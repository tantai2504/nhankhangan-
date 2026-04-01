import { Category, Capability, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'adhesives',
    name: 'Keo & Vật liệu đóng gói',
    icon: 'Wrench',
    description: 'Giải pháp kết dính công nghiệp đa dạng, từ keo silicone đến băng keo chuyên dụng.',
    products: [
      { id: 'p1', name: 'Keo công nghiệp', category: 'adhesives', description: 'Độ bền cao, chịu nhiệt tốt.', image: 'https://images.unsplash.com/photo-1567360420413-54bc956504c0?auto=format&fit=crop&q=80&w=400', features: ['Chịu nhiệt', 'Kết dính cực mạnh'], isFeatured: true, industryTag: 'Sản xuất' },
      { id: 'p2', name: 'Keo silicone', category: 'adhesives', description: 'Chống thấm, linh hoạt.', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=400', features: ['Chống thấm', 'Đàn hồi'] },
      { id: 'p3', name: 'Băng keo đóng gói', category: 'adhesives', description: 'Dính chắc trên nhiều bề mặt.', image: 'https://images.unsplash.com/photo-1603912627214-9011de55a043?auto=format&fit=crop&q=80&w=400', features: ['Nhiều kích cỡ', 'Dính tốt'], isFeatured: true, industryTag: 'Logistics' },
    ]
  },
  {
    id: 'strapping',
    name: 'Dây đai - Vật tư cố định',
    icon: 'Package',
    description: 'Đảm bảo an toàn cho hàng hóa trong quá trình vận chuyển và lưu kho.',
    products: [
      { id: 'p4', name: 'Dây đai nhựa', category: 'strapping', description: 'Nhẹ, bền, tiết kiệm.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400', features: ['PP/PET', 'Chịu lực tốt'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p5', name: 'Dây đai thép', category: 'strapping', description: 'Dành cho hàng nặng, siêu trọng.', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400', features: ['Thép mạ kẽm', 'Siêu bền'] },
      { id: 'p6', name: 'Thiết bị siết đai', category: 'strapping', description: 'Dụng cụ cầm tay và máy tự động.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400', features: ['Dễ sử dụng', 'Hiệu suất cao'] },
    ]
  },
  {
    id: 'hardware',
    name: 'Vít - Kim khí',
    icon: 'Box',
    description: 'Phụ kiện kim khí chất lượng cao cho xây dựng và sản xuất.',
    products: [
      { id: 'p7', name: 'Vít inox', category: 'hardware', description: 'Chống gỉ sét, thẩm mỹ.', image: 'https://images.unsplash.com/photo-1586864387917-f729a5018101?auto=format&fit=crop&q=80&w=400', features: ['Inox 304/316', 'Nhiều quy cách'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p8', name: 'Bulong', category: 'hardware', description: 'Chịu lực cao, chuẩn quốc tế.', image: 'https://images.unsplash.com/photo-1530124560677-bdaea027d896?auto=format&fit=crop&q=80&w=400', features: ['Cấp bền cao', 'Chính xác'] },
      { id: 'p9', name: 'Phụ kiện kim khí', category: 'hardware', description: 'Đa dạng chủng loại.', image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=400', features: ['Chất lượng ổn định'] },
    ]
  },
  {
    id: 'protection',
    name: 'Màng PE - Xốp bảo vệ',
    icon: 'ShieldCheck',
    description: 'Bảo vệ bề mặt sản phẩm khỏi trầy xước và va đập.',
    products: [
      { id: 'p10', name: 'Màng PE', category: 'protection', description: 'Độ co giãn tuyệt vời.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400', features: ['Quấn tay/máy', 'Trong suốt'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p11', name: 'Xốp nổ', category: 'protection', description: 'Chống va đập hiệu quả.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400', features: ['Nhiều khổ rộng', 'Dẻo dai'] },
      { id: 'p12', name: 'Xốp foam', category: 'protection', description: 'Mềm mại, bảo vệ tinh tế.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400', features: ['Chống trầy', 'Cách nhiệt nhẹ'] },
    ]
  },
  {
    id: 'waterproofing',
    name: 'Vật liệu chống dột - thấm',
    icon: 'Home',
    description: 'Giải pháp bảo vệ công trình bền vững trước thời tiết.',
    products: [
      { id: 'p13', name: 'Sơn chống thấm', category: 'waterproofing', description: 'Công nghệ tiên tiến.', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400', features: ['Bám dính tốt', 'Kháng UV'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p14', name: 'Keo chống dột', category: 'waterproofing', description: 'Xử lý triệt để các vết nứt.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400', features: ['Nhanh khô', 'Bền thời tiết'] },
      { id: 'p15', name: 'Giải pháp xử lý mái', category: 'waterproofing', description: 'Tư vấn trọn gói.', image: 'https://images.unsplash.com/photo-1632759162353-19c9a57c7fb7?auto=format&fit=crop&q=80&w=400', features: ['Hiệu quả lâu dài'] },
    ]
  }
];

export const CAPABILITIES: Capability[] = [
  { title: 'Nguồn hàng ổn định', description: 'Hợp tác trực tiếp với các nhà sản xuất uy tín, đảm bảo không đứt gãy chuỗi cung ứng.', icon: 'Database' },
  { title: 'Quy mô cung ứng lớn', description: 'Kho bãi rộng lớn, sẵn sàng đáp ứng mọi đơn hàng số lượng lớn của doanh nghiệp.', icon: 'Truck' },
  { title: 'Tối ưu chi phí', description: 'Giải pháp vật tư trọn gói giúp doanh nghiệp tiết kiệm đến 20% chi phí vận hành.', icon: 'TrendingDown' },
  { title: 'Tư vấn chuyên sâu', description: 'Đội ngũ kỹ thuật hỗ trợ lựa chọn vật tư phù hợp nhất với từng ngành nghề.', icon: 'Users' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', company: 'Logistics Toàn Cầu', content: 'Nhân Khang An đã giúp chúng tôi giải quyết bài toán đóng gói hàng xuất khẩu một cách chuyên nghiệp và tiết kiệm.', author: 'Nguyễn Văn A', position: 'Giám đốc Thu mua' },
  { id: 't2', company: 'Xây Dựng Việt Nam', content: 'Sản phẩm vít và bulong của Nhân Khang An luôn đạt chuẩn chất lượng, giao hàng cực nhanh.', author: 'Trần Thị B', position: 'Quản lý Dự án' },
];

export const AWARDS: Award[] = [
  { id: 'a1', title: 'Top 100 Thương hiệu Việt Nam', year: '2024', description: 'Vinh danh doanh nghiệp có đóng góp tích cực cho ngành vật tư công nghiệp.', image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400' },
  { id: 'a2', title: 'Chứng nhận ISO 9001:2015', year: '2023', description: 'Hệ thống quản lý chất lượng đạt chuẩn quốc tế.', image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=400' },
  { id: 'a3', title: 'Đối tác Vàng Logistics', year: '2022', description: 'Giải thưởng về giải pháp đóng gói tối ưu cho ngành vận tải.', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=400' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Tiếp nhận nhu cầu', description: 'Lắng nghe bài toán vật tư và khó khăn của doanh nghiệp.', icon: 'MessageSquare' },
  { number: '02', title: 'Khảo sát & Tư vấn', description: 'Chuyên gia trực tiếp khảo sát và đề xuất giải pháp tối ưu chi phí.', icon: 'Search' },
  { number: '03', title: 'Cung cấp mẫu thử', description: 'Gửi mẫu sản phẩm thực tế để doanh nghiệp kiểm định chất lượng.', icon: 'FlaskConical' },
  { number: '04', title: 'Ký kết & Cung ứng', description: 'Thiết lập hợp đồng dài hạn với nguồn hàng ổn định.', icon: 'FileText' },
  { number: '05', title: 'Hỗ trợ sau bán', description: 'Theo dõi hiệu quả và hỗ trợ kỹ thuật 24/7.', icon: 'Headphones' },
];
