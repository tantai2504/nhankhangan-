import { Category, Capability, Testimonial, Award, ProcessStep } from './types';

// Helper to resolve image paths from src/assets/images
const img = (name: string) => new URL(`./assets/images/${name}`, import.meta.url).href;

export const COMPANY_INFO = {
  name: 'Công ty TNHH Nhân Khang An',
  shortName: 'NHÂN KHANG AN',
  phone: '0944 27 27 26',
  phoneHref: 'tel:0944272726',
  address: 'Đường QL13, Khu phố 1, Phường Thành Tâm, Thị xã Chơn Thành, Tỉnh Bình Phước',
  email: 'dovudinhchi@gmail.com',
  slogan: 'Nhân Khang An - Bạn thịnh vượng, chúng tôi hạnh phúc',
};

export const CATEGORIES: Category[] = [
  {
    id: 'tape-packing',
    name: 'Băng keo đóng gói',
    icon: 'Package',
    description: 'Băng keo trong & đục đa dạng trọng lượng, phục vụ đóng gói hàng hóa chuyên nghiệp.',
    products: [
      { id: 'p1', name: 'Băng keo trong', category: 'tape-packing', description: 'Khổ 2F4 và 4F8, nhiều trọng lượng.', image: img('bangkeotrong.png'), features: ['1 kg', '1.2 kg', '1.4 kg', '1.6 kg', '1.8 kg'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p2', name: 'Băng keo đục', category: 'tape-packing', description: 'Khổ 2F4 và 4F8, nhiều trọng lượng.', image: img('bangkeoduc.png'), features: ['1 kg', '1.2 kg', '1.4 kg', '1.6 kg', '1.8 kg'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p3', name: 'Băng keo hàng dễ vỡ', category: 'tape-packing', description: 'Chuyên dụng cho hàng dễ vỡ.', image: img('bangkeomau2.png'), features: ['1.2 kg', '1.8 kg'] },
      { id: 'p3b', name: 'Băng keo văn phòng phẩm', category: 'tape-packing', description: 'Đa dạng kích cỡ cho văn phòng.', image: img('bangkeovanphongpham.png'), features: ['Nhiều size', 'Trong suốt'], isFeatured: true, industryTag: 'Văn phòng' },
    ]
  },
  {
    id: 'tape-paper',
    name: 'Băng keo Giấy & Băng keo 2 mặt',
    icon: 'Layers',
    description: 'Băng keo giấy và băng keo 2 mặt đa dạng khổ và chiều dài.',
    products: [
      { id: 'p4', name: 'Băng keo giấy', category: 'tape-paper', description: 'Khổ 2F4 và 4F8.', image: img('bangkeogiay.png'), features: ['12m', '18m', '30m', '45m'], isFeatured: true, industryTag: 'Sản xuất' },
      { id: 'p5', name: 'Băng keo giấy 2 mặt', category: 'tape-paper', description: 'Khổ 1F2, 2F4, 4F8.', image: img('bangkeogiay2.png'), features: ['12m', '18m', '30m', '45m'] },
      { id: 'p5b', name: 'Băng keo giấy đa chiều dài', category: 'tape-paper', description: 'Từ 12m đến 35m, nhiều khổ.', image: img('bangkeogiay12-35m.png'), features: ['12m', '18m', '25m', '35m'], isFeatured: true, industryTag: 'Sản xuất' },
    ]
  },
  {
    id: 'waterproofing',
    name: 'Vật liệu Chống dột & Cách nhiệt',
    icon: 'Home',
    description: 'Giải pháp chống dột, chống thấm và cách nhiệt cho công trình.',
    products: [
      { id: 'p6', name: 'Băng keo chống dột X2000', category: 'waterproofing', description: 'Chống dột hiệu quả, nhiều khổ rộng.', image: img('bangkeochongdot.png'), features: ['Khổ 5cm', 'Khổ 10cm', 'Khổ 15cm', 'Khổ 20cm'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p7', name: 'Băng keo chống dột nhựa đường', category: 'waterproofing', description: 'Chống dột chuyên dụng nhựa đường.', image: img('bangkeochongdotnhuaduong.png'), features: ['Khổ 5cm', 'Khổ 10cm', 'Khổ 15cm', 'Khổ 20cm'] },
      { id: 'p8', name: 'Cuộn lưới thủy tinh', category: 'waterproofing', description: 'Gia cố chống thấm, khổ 1m x 50m.', image: img('cuonluoithuytinh.png'), features: ['3×3', '4×4', '5×5'] },
      { id: 'p9', name: 'Cuộn chống dột nhựa đường', category: 'waterproofing', description: 'Cuộn nhựa đường khổ 1m x 5m.', image: img('cuonluoithuytinh.png'), features: ['Khổ 1m x 5m'] },
    ]
  },
  {
    id: 'tape-specialty',
    name: 'Băng keo chuyên dụng',
    icon: 'Wrench',
    description: 'Các loại băng keo xốp, simili, dán nền, điện và nhiều loại chuyên dụng khác.',
    products: [
      { id: 'p10', name: 'Băng keo Xốp', category: 'tape-specialty', description: 'Xốp xanh, xốp đỏ (2F4), xốp trắng (2F4, 4F8).', image: img('bangkeoxopxanh.png'), features: ['Xốp xanh', 'Xốp đỏ', 'Xốp trắng'] },
      { id: 'p11', name: 'Băng keo Simili', category: 'tape-specialty', description: 'Nhiều màu sắc, khổ 3F6 và 4F8.', image: img('bangkeomau1.png'), features: ['Vàng', 'Đỏ', 'Xanh lá', 'Xanh dương'] },
      { id: 'p12', name: 'Băng keo Dán nền', category: 'tape-specialty', description: 'Vàng và Vàng đen, khổ 4F8 và 7F.', image: img('bangkeodannenvang.png'), features: ['Vàng', 'Vàng đen', 'Khổ 4F8', 'Khổ 7F'] },
      { id: 'p13', name: 'Băng keo Điện', category: 'tape-specialty', description: 'Hiệu Tô Nga Dũng và Nano.', image: img('bangkeodien-nano.png'), features: ['Tô Nga Dũng', 'Nano', '20 yard', '30 yard'] },
      { id: 'p13b', name: 'Băng keo che sơn 3M', category: 'tape-specialty', description: 'Nhiều kích cỡ, chuyên dụng sơn.', image: img('bangkeocheson3-5-11.png'), features: ['Nhiều khổ', '3M chính hãng'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p14', name: 'Băng keo khác', category: 'tape-specialty', description: 'Vải xám, bạc nhôm, lưới thạch cao, nano siêu dính.', image: img('bangkeovai-xanh-xam.png'), features: ['Vải xám', 'Bạc nhôm', 'Lưới thạch cao', 'Nano siêu dính'] },
    ]
  },
  {
    id: 'packaging',
    name: 'Vật liệu đóng gói',
    icon: 'ShieldCheck',
    description: 'Xốp hơi và màng PE bảo vệ hàng hóa, đa dạng kích thước.',
    products: [
      { id: 'p15', name: 'Xốp hơi', category: 'packaging', description: 'Nguyên cây 1m40 hoặc cắt theo yêu cầu.', image: img('xophoinguyencay.png'), features: ['Nguyên cây 1m40', 'Cắt 2', 'Cắt 3', 'Cắt 4', 'Cắt 5', 'Cắt 6', 'Cắt 7'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p16', name: 'Màng PE cuộn', category: 'packaging', description: 'Khổ 25cm và 50cm, nhận làm theo yêu cầu.', image: img('manpe-cacloai.png'), features: ['1.5 kg', '2 kg', '2.5 kg', '3 kg'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p16b', name: 'Màng PE co nhiệt', category: 'packaging', description: 'Màng PE đa dạng, co nhiệt tốt.', image: img('manpe-2.png'), features: ['Khổ 25cm', 'Khổ 50cm', 'Theo yêu cầu'], isFeatured: true, industryTag: 'Sản xuất' },
    ]
  },
  {
    id: 'strapping',
    name: 'Dây đai & Dây rút',
    icon: 'Cable',
    description: 'Dây đai PP, PET và dây rút đầy đủ kích thước cho mọi nhu cầu.',
    products: [
      { id: 'p17', name: 'Dây đai PP', category: 'strapping', description: 'Nhiều màu sắc: trắng, xanh, vàng.', image: img('daydainhieumau.png'), features: ['Trắng', 'Xanh', 'Vàng'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p18', name: 'Dây đai PET', category: 'strapping', description: 'Dây đai PET chịu lực cao.', image: img('daydai-mautuychon.png'), features: ['Xanh', 'Đen'] },
      { id: 'p19', name: 'Bọ sắt kẹp đai', category: 'strapping', description: 'Phụ kiện kẹp đai chuyên dụng.', image: img('daydai-mautuychon.png'), features: ['Bọ sắt'] },
      { id: 'p20', name: 'Dây rút', category: 'strapping', description: 'Đầy đủ kích thước từ 100mm đến 450mm.', image: img('dayrut-nhieukichco.png'), features: ['100mm', '150mm', '200mm', '250mm', '300mm', '350mm', '400mm', '450mm'] },
    ]
  },
  {
    id: 'warning',
    name: 'Vật liệu Cảnh báo',
    icon: 'AlertTriangle',
    description: 'Trụ cảnh báo và cuộn cảnh báo an toàn cho công trình, công trường.',
    products: [
      { id: 'p21', name: 'Trụ cảnh báo', category: 'warning', description: 'Nhiều kích thước cho mọi công trường.', image: img('sanphamcanhbao-trucanhbao-cuon-canhbao.png'), features: ['55cm', '65cm', '75cm'] },
      { id: 'p22', name: 'Cuộn cảnh báo', category: 'warning', description: 'Đa dạng mẫu và mục đích sử dụng.', image: img('sanphamcanhbao-trucanhbao-cuon-canhbao.png'), features: ['Mũi tên', 'Vàng đen', 'Đỏ trắng', 'Cáp nước', 'Cáp điện'] },
    ]
  },
  {
    id: 'hardware',
    name: 'Kim khí & Dụng cụ',
    icon: 'Hammer',
    description: 'Vít, keo nến, dao cắt keo và các dụng cụ phục vụ xây dựng, sản xuất.',
    products: [
      { id: 'p23', name: 'Vít tự khoan đầu dù', category: 'hardware', description: 'Vít chuyên dụng đầu dù.', image: img('vitukhoan.png'), features: ['Tự khoan', 'Đầu dù'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p24', name: 'Vít bắn ngói', category: 'hardware', description: 'Chuyên dùng cho mái ngói.', image: img('vitgoren.png'), features: ['Bắn ngói'] },
      { id: 'p25', name: 'Vít bắn tôn', category: 'hardware', description: 'Ron đen, đòn tay gỗ.', image: img('vitbanton.png'), features: ['Ron đen', 'Đòn tay gỗ'] },
      { id: 'p26', name: 'Vít gỗ ren thưa', category: 'hardware', description: 'Vít chuyên dùng cho gỗ.', image: img('vitgoren.png'), features: ['Ren thưa'] },
      { id: 'p27', name: 'Vít thạch cao đen', category: 'hardware', description: 'Vít chuyên dùng cho thạch cao.', image: img('vitthanhcaoden.png'), features: ['Thạch cao'] },
      { id: 'p28', name: 'Vít trắng đầu bằng', category: 'hardware', description: 'Vít đầu bằng, thẩm mỹ cao.', image: img('vitukhoan.png'), features: ['Đầu bằng', 'Trắng'] },
      { id: 'p29', name: 'Vít inox', category: 'hardware', description: 'Chống gỉ sét, thẩm mỹ.', image: img('vitukhoan.png'), features: ['Inox', 'Chống gỉ'] },
      { id: 'p30', name: 'Keo nến & Súng bắn keo', category: 'hardware', description: 'Keo nến lớn/nhỏ và súng bắn keo.', image: img('sungbankeo.png'), features: ['Keo nến lớn', 'Keo nến nhỏ', 'Súng bắn keo lớn', 'Súng bắn keo nhỏ'] },
      { id: 'p31', name: 'Dao cắt keo', category: 'hardware', description: 'Dao cắt keo Dân Hoa và các loại khác.', image: img('daocatkeo.png'), features: ['Dân Hoa 5cm', 'Dân Hoa 7cm', 'Dao để bàn', 'Dao có tay cầm'] },
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
  { id: 'a1', title: 'Chứng nhận Hội viên', year: '2024', description: 'Hội viên CLB Doanh nhân Nam Bình tại TP. Hồ Chí Minh.', image: img('chunghoivien.jpg') },
  { id: 'a2', title: 'Chứng nhận Hiệp hội SME', year: '2024', description: 'Thành viên Hiệp hội Doanh nghiệp nhỏ và vừa TP.HCM (HCM SME).', image: img('chungnhan-cuahiephoi.jpg') },
  { id: 'a3', title: 'CLB Doanh nhân 2030', year: '2025', description: 'Hội viên chính thức CLB Doanh nhân 2030 — Ban Chấp hành Saigon Times Club.', image: img('chungnhantruongcaulacbo.jpg') },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Tiếp nhận nhu cầu', description: 'Lắng nghe bài toán vật tư và khó khăn của doanh nghiệp.', icon: 'MessageSquare' },
  { number: '02', title: 'Khảo sát & Tư vấn', description: 'Chuyên gia trực tiếp khảo sát và đề xuất giải pháp tối ưu chi phí.', icon: 'Search' },
  { number: '03', title: 'Cung cấp mẫu thử', description: 'Gửi mẫu sản phẩm thực tế để doanh nghiệp kiểm định chất lượng.', icon: 'FlaskConical' },
  { number: '04', title: 'Ký kết & Cung ứng', description: 'Thiết lập hợp đồng dài hạn với nguồn hàng ổn định.', icon: 'FileText' },
  { number: '05', title: 'Hỗ trợ sau bán', description: 'Theo dõi hiệu quả và hỗ trợ kỹ thuật 24/7.', icon: 'Headphones' },
];
