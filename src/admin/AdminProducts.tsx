import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Plus, Edit2, Trash2, Save, X, Loader2, Upload, Star, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import {
  apiGetProducts, apiGetCategories,
  apiCreateProduct, apiUpdateProduct, apiDeleteProduct,
  apiUploadImage,
  ApiProduct, ApiCategory,
} from '../services/api';

const empty: ApiProduct = {
  id: '', category: '', name: '', description: '', image: '',
  features: [], isFeatured: false, industryTag: '', sort_order: 0,
};

const AdminProducts = () => {
  const [list, setList] = useState<ApiProduct[]>([]);
  const [cats, setCats] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<ApiProduct | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [error, setError] = useState('');
  const [filterCat, setFilterCat] = useState<string>('all');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [featuresStr, setFeaturesStr] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const [p, c] = await Promise.all([apiGetProducts(), apiGetCategories()]);
      setList(p);
      setCats(c);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const openEdit = (p: ApiProduct) => {
    setEditing({ ...p });
    setFeaturesStr(p.features.join(', '));
    setIsNew(false);
    setError('');
  };

  const openNew = () => {
    setEditing({ ...empty, category: cats[0]?.id || '' });
    setFeaturesStr('');
    setIsNew(true);
    setError('');
  };

  const handleSave = async () => {
    if (!editing) return;
    if (!editing.id || !editing.name || !editing.category) {
      setError('ID, Tên, Danh mục là bắt buộc');
      return;
    }
    const features = featuresStr.split(',').map(s => s.trim()).filter(Boolean);
    const payload = { ...editing, features };
    try {
      if (isNew) await apiCreateProduct(payload);
      else await apiUpdateProduct(editing.id, payload);
      setEditing(null);
      load();
    } catch (e) {
      setError((e as Error).message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Xoá sản phẩm này?')) return;
    try { await apiDeleteProduct(id); load(); }
    catch (e) { setError((e as Error).message); }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editing) return;
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const { url } = await apiUploadImage(file);
      setEditing({ ...editing, image: url });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // ============================================
  // TanStack Table setup
  // ============================================
  const filtered = useMemo(
    () => filterCat === 'all' ? list : list.filter(p => p.category === filterCat),
    [list, filterCat]
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const columnHelper = createColumnHelper<ApiProduct>();

  const columns = useMemo(() => [
    columnHelper.accessor('image', {
      header: 'Ảnh',
      enableSorting: false,
      cell: info => (
        <div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden">
          {info.getValue() ? (
            <img src={info.getValue()} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-[9px]">N/A</div>
          )}
        </div>
      ),
    }),
    columnHelper.accessor('id', {
      header: 'ID',
      cell: info => <span className="font-mono text-xs text-slate-400">{info.getValue()}</span>,
    }),
    columnHelper.accessor('name', {
      header: 'Tên sản phẩm',
      cell: info => (
        <div>
          <p className="font-bold text-sm text-slate-900">{info.getValue()}</p>
          <p className="text-xs text-slate-500 line-clamp-1 max-w-md">{info.row.original.description}</p>
        </div>
      ),
    }),
    columnHelper.accessor('category', {
      header: 'Danh mục',
      cell: info => (
        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded">
          {cats.find(c => c.id === info.getValue())?.name || info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('features', {
      header: 'Quy cách',
      enableSorting: false,
      cell: info => {
        const features = info.getValue();
        return (
          <div className="flex flex-wrap gap-1 max-w-xs">
            {features.slice(0, 3).map((f, i) => (
              <span key={i} className="text-[10px] bg-brand-bg text-brand-dark px-1.5 py-0.5 rounded font-medium">{f}</span>
            ))}
            {features.length > 3 && (
              <span className="text-[10px] text-slate-400 font-bold">+{features.length - 3}</span>
            )}
          </div>
        );
      },
    }),
    columnHelper.accessor('isFeatured', {
      header: 'Nổi bật',
      cell: info => info.getValue() ? <Star size={16} className="inline text-brand-red fill-brand-red" /> : null,
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Thao tác',
      cell: info => (
        <div className="flex gap-1 justify-end">
          <button onClick={() => openEdit(info.row.original)} className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1.5 rounded hover:bg-blue-100 transition-colors">
            <Edit2 size={12} /> Sửa
          </button>
          <button onClick={() => handleDelete(info.row.original.id)} className="flex items-center gap-1 bg-red-50 text-red-700 text-xs font-bold px-2.5 py-1.5 rounded hover:bg-red-100 transition-colors">
            <Trash2 size={12} /> Xoá
          </button>
        </div>
      ),
    }),
  ], [cats]);

  const table = useReactTable({
    data: filtered,
    columns,
    state: { sorting, columnFilters, globalFilter },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Quản lý sản phẩm</h1>
          <p className="text-sm text-slate-500 mt-1">{list.length} sản phẩm — Hiển thị {table.getFilteredRowModel().rows.length}</p>
        </div>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 active:scale-95 shadow-sm"
        >
          <Plus size={18} /> Thêm sản phẩm
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none bg-white"
          />
        </div>
        <select
          value={filterCat}
          onChange={e => setFilterCat(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none"
        >
          <option value="all">Tất cả danh mục ({list.length})</option>
          {cats.map(c => {
            const count = list.filter(p => p.category === c.id).length;
            return <option key={c.id} value={c.id}>{c.name} ({count})</option>;
          })}
        </select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-lg mb-4">{error}</div>
      )}

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin text-brand-dark" size={32} /></div>
      ) : (
        /* TanStack Data Table */
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                {table.getHeaderGroups().map(hg => (
                  <tr key={hg.id} className="text-left text-xs font-bold text-slate-600 uppercase">
                    {hg.headers.map(header => (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className={`px-4 py-3 ${header.column.getCanSort() ? 'cursor-pointer hover:bg-slate-100' : ''}`}
                      >
                        <div className="flex items-center gap-1">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanSort() && (
                            <span className="text-slate-300">
                              {header.column.getIsSorted() === 'asc' ? <ArrowUp size={12} className="text-brand-dark" /> :
                               header.column.getIsSorted() === 'desc' ? <ArrowDown size={12} className="text-brand-dark" /> :
                               <ArrowUpDown size={12} />}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="px-4 py-12 text-center text-slate-400 text-sm">
                      Không tìm thấy sản phẩm nào
                    </td>
                  </tr>
                ) : (
                  table.getRowModel().rows.map(row => (
                    <tr key={row.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="px-4 py-2.5">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span>Hiển thị</span>
              <select
                value={table.getState().pagination.pageSize}
                onChange={e => table.setPageSize(Number(e.target.value))}
                className="border border-slate-300 rounded px-2 py-1 bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark"
              >
                {[5, 10, 25, 50, 100].map(size => <option key={size} value={size}>{size}</option>)}
              </select>
              <span>sản phẩm / trang</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600">
                Trang <strong>{table.getState().pagination.pageIndex + 1}</strong> / {table.getPageCount() || 1}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                  className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronsLeft size={14} />
                </button>
                <button
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={14} />
                </button>
                <button
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                  className="p-1.5 rounded border border-slate-300 bg-white hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronsRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setEditing(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 my-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">{isNew ? 'Thêm sản phẩm' : 'Sửa sản phẩm'}</h2>
              <button onClick={() => setEditing(null)} className="p-1 hover:bg-slate-100 rounded">
                <X size={20} />
              </button>
            </div>

            {/* Image preview + upload */}
            <div className="mb-4">
              <label className="text-xs font-bold text-slate-600 uppercase block mb-2">Ảnh sản phẩm</label>
              <div className="flex items-start gap-3">
                <div className="w-32 h-32 bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shrink-0">
                  {editing.image ? <img src={editing.image} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs">Chưa có</div>}
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={editing.image}
                    onChange={e => setEditing({ ...editing, image: e.target.value })}
                    placeholder="URL ảnh hoặc upload bên dưới"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm mb-2"
                  />
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
                  <button onClick={() => fileInputRef.current?.click()} disabled={uploading} className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-2 rounded disabled:opacity-50">
                    {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                    {uploading ? 'Đang tải...' : 'Upload ảnh'}
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="ID (slug)" value={editing.id} onChange={v => setEditing({ ...editing, id: v })} disabled={!isNew} />
              <div>
                <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Danh mục</label>
                <select value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                  {cats.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-3">
              <Field label="Tên sản phẩm" value={editing.name} onChange={v => setEditing({ ...editing, name: v })} />
            </div>
            <div className="mt-3">
              <Field label="Mô tả" value={editing.description} onChange={v => setEditing({ ...editing, description: v })} textarea />
            </div>
            <div className="mt-3">
              <label className="text-xs font-bold text-slate-600 uppercase block mb-1">Quy cách (cách nhau bởi dấu phẩy)</label>
              <input value={featuresStr} onChange={e => setFeaturesStr(e.target.value)} placeholder="VD: 1 kg, 1.2 kg, 1.4 kg, 1.6 kg" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <Field label="Tag ngành (tuỳ chọn)" value={editing.industryTag || ''} onChange={v => setEditing({ ...editing, industryTag: v })} hint="VD: Logistics, Xây dựng" />
              <Field label="Thứ tự" value={String(editing.sort_order)} onChange={v => setEditing({ ...editing, sort_order: Number(v) || 0 })} />
            </div>
            <div className="mt-3">
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" checked={editing.isFeatured} onChange={e => setEditing({ ...editing, isFeatured: e.target.checked })} />
                Đánh dấu là sản phẩm nổi bật
              </label>
            </div>

            <div className="flex gap-2 justify-end mt-6 pt-4 border-t">
              <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-bold">Huỷ</button>
              <button onClick={handleSave} className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-lg font-bold text-sm">
                <Save size={16} /> Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Field = ({ label, value, onChange, textarea, disabled, hint }: { label: string; value: string; onChange: (v: string) => void; textarea?: boolean; disabled?: boolean; hint?: string }) => (
  <div>
    <label className="text-xs font-bold text-slate-600 uppercase block mb-1">{label}</label>
    {textarea ? (
      <textarea value={value} onChange={e => onChange(e.target.value)} disabled={disabled} rows={3} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm disabled:bg-slate-50" />
    ) : (
      <input value={value} onChange={e => onChange(e.target.value)} disabled={disabled} className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm disabled:bg-slate-50" />
    )}
    {hint && <p className="text-[10px] text-slate-400 mt-1">{hint}</p>}
  </div>
);

export default AdminProducts;
