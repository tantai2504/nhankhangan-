import { Category, Capability, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 'adhesives',
    name: 'Keo & Vật liệu đóng gói',
    icon: 'Wrench',
    description: 'Giải pháp kết dính công nghiệp đa dạng, từ keo silicone đến băng keo chuyên dụng.',
    products: [
      { id: 'p1', name: 'Keo công nghiệp', category: 'adhesives', description: 'Độ bền cao, chịu nhiệt tốt.', image: 'https://picsum.photos/seed/glue1/400/300', features: ['Chịu nhiệt', 'Kết dính cực mạnh'] },
      { id: 'p2', name: 'Keo silicone', category: 'adhesives', description: 'Chống thấm, linh hoạt.', image: 'https://picsum.photos/seed/silicone/400/300', features: ['Chống thấm', 'Đàn hồi'] },
      { id: 'p3', name: 'Băng keo đóng gói', category: 'adhesives', description: 'Dính chắc trên nhiều bề mặt.', image: 'https://picsum.photos/seed/tape/400/300', features: ['Nhiều kích cỡ', 'Dính tốt'] },
    ]
  },
  {
    id: 'strapping',
    name: 'Dây đai - Vật tư cố định',
    icon: 'Package',
    description: 'Đảm bảo an toàn cho hàng hóa trong quá trình vận chuyển và lưu kho.',
    products: [
      { id: 'p4', name: 'Dây đai nhựa', category: 'strapping', description: 'Nhẹ, bền, tiết kiệm.', image: 'https://picsum.photos/seed/strap1/400/300', features: ['PP/PET', 'Chịu lực tốt'] },
      { id: 'p5', name: 'Dây đai thép', category: 'strapping', description: 'Dành cho hàng nặng, siêu trọng.', image: 'https://picsum.photos/seed/strap2/400/300', features: ['Thép mạ kẽm', 'Siêu bền'] },
      { id: 'p6', name: 'Thiết bị siết đai', category: 'strapping', description: 'Dụng cụ cầm tay và máy tự động.', image: 'https://picsum.photos/seed/tool1/400/300', features: ['Dễ sử dụng', 'Hiệu suất cao'] },
    ]
  },
  {
    id: 'hardware',
    name: 'Vít - Kim khí',
    icon: 'Box',
    description: 'Phụ kiện kim khí chất lượng cao cho xây dựng và sản xuất.',
    products: [
      { id: 'p7', name: 'Vít inox', category: 'hardware', description: 'Chống gỉ sét, thẩm mỹ.', image: 'https://picsum.photos/seed/screw1/400/300', features: ['Inox 304/316', 'Nhiều quy cách'] },
      { id: 'p8', name: 'Bulong', category: 'hardware', description: 'Chịu lực cao, chuẩn quốc tế.', image: 'https://picsum.photos/seed/bolt/400/300', features: ['Cấp bền cao', 'Chính xác'] },
      { id: 'p9', name: 'Phụ kiện kim khí', category: 'hardware', description: 'Đa dạng chủng loại.', image: 'https://picsum.photos/seed/metal/400/300', features: ['Chất lượng ổn định'] },
    ]
  },
  {
    id: 'protection',
    name: 'Màng PE - Xốp bảo vệ',
    icon: 'ShieldCheck',
    description: 'Bảo vệ bề mặt sản phẩm khỏi trầy xước và va đập.',
    products: [
      { id: 'p10', name: 'Màng PE', category: 'protection', description: 'Độ co giãn tuyệt vời.', image: 'https://picsum.photos/seed/pe/400/300', features: ['Quấn tay/máy', 'Trong suốt'] },
      { id: 'p11', name: 'Xốp nổ', category: 'protection', description: 'Chống va đập hiệu quả.', image: 'https://picsum.photos/seed/bubble/400/300', features: ['Nhiều khổ rộng', 'Dẻo dai'] },
      { id: 'p12', name: 'Xốp foam', category: 'protection', description: 'Mềm mại, bảo vệ tinh tế.', image: 'https://picsum.photos/seed/foam/400/300', features: ['Chống trầy', 'Cách nhiệt nhẹ'] },
    ]
  },
  {
    id: 'waterproofing',
    name: 'Vật liệu chống dột - thấm',
    icon: 'Home',
    description: 'Giải pháp bảo vệ công trình bền vững trước thời tiết.',
    products: [
      { id: 'p13', name: 'Sơn chống thấm', category: 'waterproofing', description: 'Công nghệ tiên tiến.', image: 'https://picsum.photos/seed/paint/400/300', features: ['Bám dính tốt', 'Kháng UV'] },
      { id: 'p14', name: 'Keo chống dột', category: 'waterproofing', description: 'Xử lý triệt để các vết nứt.', image: 'https://picsum.photos/seed/sealant/400/300', features: ['Nhanh khô', 'Bền thời tiết'] },
      { id: 'p15', name: 'Giải pháp xử lý mái', category: 'waterproofing', description: 'Tư vấn trọn gói.', image: 'https://picsum.photos/seed/roof/400/300', features: ['Hiệu quả lâu dài'] },
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
