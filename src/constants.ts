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
    description: 'Niêm phong thùng carton, đóng gói hàng hoá xuất kho — dính chắc, không bong tróc, tiết kiệm chi phí đóng gói.',
    products: [
      { id: 'p1', name: 'Băng keo trong', category: 'tape-packing', description: 'Dán thùng carton, niêm phong hàng hoá. Trong suốt, độ dính cao, không để lại vết keo. Khổ 2F4 và 4F8.', image: img('bangkeotrong.png'), features: ['1 kg', '1.2 kg', '1.4 kg', '1.6 kg', '1.8 kg'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p2', name: 'Băng keo đục', category: 'tape-packing', description: 'Dán thùng hàng cần che kín nội dung bên trong. Màu đục, bám dính tốt trên mọi bề mặt carton. Khổ 2F4 và 4F8.', image: img('bangkeoduc.png'), features: ['1 kg', '1.2 kg', '1.4 kg', '1.6 kg', '1.8 kg'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p3', name: 'Băng keo hàng dễ vỡ', category: 'tape-packing', description: 'In cảnh báo "Hàng dễ vỡ — Handle with Care" trực tiếp trên keo. Giúp nhân viên vận chuyển cẩn thận hơn với kiện hàng.', image: img('bangkeomau2.png'), features: ['1.2 kg', '1.8 kg'] },
      { id: 'p3b', name: 'Băng keo văn phòng phẩm', category: 'tape-packing', description: 'Loại nhỏ dùng cho văn phòng, dán tài liệu, phong bì, hồ sơ. Trong suốt, dễ xé, nhiều kích cỡ.', image: img('bangkeovanphongpham.png'), features: ['Nhiều size', 'Trong suốt'], isFeatured: true, industryTag: 'Văn phòng' },
    ]
  },
  {
    id: 'tape-paper',
    name: 'Băng keo Giấy & 2 mặt',
    icon: 'Layers',
    description: 'Dùng trong sơn, trang trí, gắn kết vật liệu — dễ xé tay, không để lại keo, đa dạng khổ rộng.',
    products: [
      { id: 'p4', name: 'Băng keo giấy', category: 'tape-paper', description: 'Che sơn, đánh dấu vị trí, dán tạm khi thi công. Dễ xé tay, không để lại vết keo khi gỡ. Khổ 2F4 và 4F8.', image: img('bangkeogiay.png'), features: ['12m', '18m', '30m', '45m'], isFeatured: true, industryTag: 'Sản xuất' },
      { id: 'p5', name: 'Băng keo giấy 2 mặt', category: 'tape-paper', description: 'Dán 2 bề mặt lại với nhau — dùng trong in ấn, may mặc, quảng cáo. Kết dính mạnh, không cần keo nước. Khổ 1F2, 2F4, 4F8.', image: img('bangkeogiay2.png'), features: ['12m', '18m', '30m', '45m'] },
      { id: 'p5b', name: 'Băng keo giấy cuộn lớn', category: 'tape-paper', description: 'Cuộn dài tiết kiệm cho xưởng sản xuất, công trình lớn. Nhiều chiều dài từ 12m đến 35m, đa dạng khổ rộng.', image: img('bangkeogiay12-35m.png'), features: ['12m', '18m', '25m', '35m'], isFeatured: true, industryTag: 'Sản xuất' },
    ]
  },
  {
    id: 'waterproofing',
    name: 'Chống dột & Cách nhiệt',
    icon: 'Home',
    description: 'Xử lý chống dột mái tôn, mái ngói, sân thượng, vách tường — thi công nhanh, tiết kiệm chi phí sửa chữa.',
    products: [
      { id: 'p6', name: 'Băng keo chống dột X2000', category: 'waterproofing', description: 'Dán trực tiếp lên vết nứt, mối nối mái tôn để ngăn nước mưa. Chịu nhiệt, chịu nắng, bền theo thời gian. Nhiều khổ rộng.', image: img('bangkeochongdot.png'), features: ['Khổ 5cm', 'Khổ 10cm', 'Khổ 15cm', 'Khổ 20cm'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p7', name: 'Băng keo chống dột nhựa đường', category: 'waterproofing', description: 'Chống thấm bằng nhựa đường tự dính — dùng cho mái ngói, sân thượng, mái bê tông. Bám dính cực mạnh, chống UV.', image: img('bangkeochongdotnhuaduong.png'), features: ['Khổ 5cm', 'Khổ 10cm', 'Khổ 15cm', 'Khổ 20cm'] },
      { id: 'p8', name: 'Cuộn lưới thủy tinh', category: 'waterproofing', description: 'Gia cố lớp chống thấm, tăng độ bền cho bề mặt tường và sàn. Kết hợp với keo chống dột để đạt hiệu quả tối đa. Khổ 1m x 50m.', image: img('cuonluoithuytinh.png'), features: ['3×3', '4×4', '5×5'] },
      { id: 'p9', name: 'Cuộn chống dột nhựa đường', category: 'waterproofing', description: 'Cuộn lớn phủ toàn bộ mái hoặc sàn, xử lý triệt để vấn đề thấm dột diện rộng. Tự dính, thi công đơn giản. Khổ 1m x 5m.', image: img('cuonluoithuytinh.png'), features: ['Khổ 1m x 5m'] },
    ]
  },
  {
    id: 'tape-specialty',
    name: 'Băng keo chuyên dụng',
    icon: 'Wrench',
    description: 'Băng keo xốp, simili, điện, dán nền, che sơn — mỗi loại phục vụ một nhu cầu riêng trong sản xuất và xây dựng.',
    products: [
      { id: 'p10', name: 'Băng keo Xốp', category: 'tape-specialty', description: 'Đệm chống va đập, cách âm, gắn biển hiệu. Xốp dày 2 mặt dính, chịu lực tốt. Có 3 màu: xanh, đỏ, trắng. Khổ 2F4 và 4F8.', image: img('bangkeoxopxanh.png'), features: ['Xốp xanh', 'Xốp đỏ', 'Xốp trắng'] },
      { id: 'p11', name: 'Băng keo Simili', category: 'tape-specialty', description: 'Đánh dấu khu vực, phân luồng trong nhà xưởng, kho bãi. Nhiều màu sắc nổi bật, bám dính trên nền bê tông. Khổ 3F6 và 4F8.', image: img('bangkeomau1.png'), features: ['Vàng', 'Đỏ', 'Xanh lá', 'Xanh dương'] },
      { id: 'p12', name: 'Băng keo Dán nền', category: 'tape-specialty', description: 'Kẻ vạch an toàn, phân chia khu vực sản xuất theo tiêu chuẩn 5S. Bền, chịu mài mòn, dễ nhận diện. Khổ 4F8 và 7F.', image: img('bangkeodannenvang.png'), features: ['Vàng', 'Vàng đen', 'Khổ 4F8', 'Khổ 7F'] },
      { id: 'p13', name: 'Băng keo Điện', category: 'tape-specialty', description: 'Quấn cách điện dây dẫn, bảo vệ mối nối điện an toàn. Chịu nhiệt, cách điện tốt. Hiệu Tô Nga Dũng và Nano.', image: img('bangkeodien-nano.png'), features: ['Tô Nga Dũng', 'Nano', '20 yard', '30 yard'] },
      { id: 'p13b', name: 'Băng keo che sơn 3M', category: 'tape-specialty', description: 'Che phủ bề mặt không cần sơn, tạo đường viền sắc nét. Gỡ ra không để lại keo, không làm hỏng bề mặt. Chính hãng 3M.', image: img('bangkeocheson3-5-11.png'), features: ['Nhiều khổ', '3M chính hãng'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p14', name: 'Băng keo đặc biệt', category: 'tape-specialty', description: 'Các loại chuyên dụng: vải xám chịu lực, bạc nhôm chịu nhiệt, lưới thạch cao chống nứt, nano siêu dính đa năng.', image: img('bangkeovai-xanh-xam.png'), features: ['Vải xám', 'Bạc nhôm', 'Lưới thạch cao', 'Nano siêu dính'] },
    ]
  },
  {
    id: 'packaging',
    name: 'Vật liệu đóng gói',
    icon: 'ShieldCheck',
    description: 'Xốp hơi và màng PE — bọc, quấn, bảo vệ hàng hoá khỏi trầy xước và va đập khi vận chuyển.',
    products: [
      { id: 'p15', name: 'Xốp hơi', category: 'packaging', description: 'Bọc hàng dễ vỡ, chống va đập khi vận chuyển. Nhẹ, đàn hồi, tái sử dụng được. Nguyên cây 1m40 hoặc cắt theo yêu cầu.', image: img('xophoinguyencay.png'), features: ['Nguyên cây 1m40', 'Cắt 2', 'Cắt 3', 'Cắt 4', 'Cắt 5', 'Cắt 6', 'Cắt 7'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p16', name: 'Màng PE cuộn', category: 'packaging', description: 'Quấn pallet, cố định hàng hoá trên xe, chống bụi và ẩm. Co giãn tốt, bám dính tự nhiên. Khổ 25cm và 50cm.', image: img('manpe-cacloai.png'), features: ['1.5 kg', '2 kg', '2.5 kg', '3 kg'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p16b', name: 'Màng PE co nhiệt', category: 'packaging', description: 'Bọc sản phẩm rồi dùng nhiệt co lại ôm sát — tạo lớp bảo vệ kín, chống nước, chống bụi. Nhận sản xuất theo yêu cầu.', image: img('manpe-2.png'), features: ['Khổ 25cm', 'Khổ 50cm', 'Theo yêu cầu'], isFeatured: true, industryTag: 'Sản xuất' },
    ]
  },
  {
    id: 'strapping',
    name: 'Dây đai & Dây rút',
    icon: 'Cable',
    description: 'Siết chặt, cố định thùng hàng và kiện hàng — chịu lực tốt, đảm bảo an toàn khi vận chuyển đường dài.',
    products: [
      { id: 'p17', name: 'Dây đai PP', category: 'strapping', description: 'Đai nhựa siết thùng carton, kiện hàng nhẹ đến trung bình. Dẻo dai, không gỉ sét, tiết kiệm hơn đai thép. Nhiều màu: trắng, xanh, vàng.', image: img('daydainhieumau.png'), features: ['Trắng', 'Xanh', 'Vàng'], isFeatured: true, industryTag: 'Logistics' },
      { id: 'p18', name: 'Dây đai PET', category: 'strapping', description: 'Đai cứng chịu lực cao cho hàng nặng, pallet gạch, thép, gỗ. Thay thế đai thép, an toàn hơn khi cắt. Màu xanh và đen.', image: img('daydai-mautuychon.png'), features: ['Xanh', 'Đen'] },
      { id: 'p19', name: 'Bọ sắt kẹp đai', category: 'strapping', description: 'Khoá kim loại giữ chặt đầu dây đai, đảm bảo mối nối không bung trong quá trình vận chuyển. Dùng với đai PP và PET.', image: img('daydai-mautuychon.png'), features: ['Bọ sắt'] },
      { id: 'p20', name: 'Dây rút nhựa', category: 'strapping', description: 'Buộc gọn dây điện, ống nước, cố định linh kiện. Khoá 1 chiều, siết chặt không tuột. Đầy đủ kích thước từ 100mm đến 450mm.', image: img('dayrut-nhieukichco.png'), features: ['100mm', '150mm', '200mm', '250mm', '300mm', '350mm', '400mm', '450mm'] },
    ]
  },
  {
    id: 'warning',
    name: 'Vật liệu Cảnh báo',
    icon: 'AlertTriangle',
    description: 'Trụ chóp nón và cuộn phản quang — cảnh báo khu vực nguy hiểm tại công trình, đường xá, nhà xưởng.',
    products: [
      { id: 'p21', name: 'Trụ cảnh báo', category: 'warning', description: 'Đặt tại công trình, bãi đỗ xe, khu vực thi công để cảnh báo người qua lại. Phản quang ban đêm, chịu va đập. 3 kích thước.', image: img('sanphamcanhbao-trucanhbao-cuon-canhbao.png'), features: ['55cm', '65cm', '75cm'] },
      { id: 'p22', name: 'Cuộn cảnh báo', category: 'warning', description: 'Dán trên nền, tường, rào chắn để cảnh báo nguy hiểm. Phản quang, nhiều mẫu: mũi tên chỉ hướng, vàng-đen, đỏ-trắng, cáp điện, cáp nước.', image: img('sanphamcanhbao-trucanhbao-cuon-canhbao.png'), features: ['Mũi tên', 'Vàng đen', 'Đỏ trắng', 'Cáp nước', 'Cáp điện'] },
    ]
  },
  {
    id: 'hardware',
    name: 'Kim khí & Dụng cụ',
    icon: 'Hammer',
    description: 'Vít các loại, keo nến, dao cắt keo — dụng cụ thiết yếu cho xây dựng, lắp đặt mái và sửa chữa.',
    products: [
      { id: 'p23', name: 'Vít tự khoan đầu dù', category: 'hardware', description: 'Bắn trực tiếp vào tôn, thép mỏng mà không cần khoan trước. Đầu dù giữ tấm lợp chắc chắn, chống gió bão.', image: img('vitukhoan.png'), features: ['Tự khoan', 'Đầu dù'], isFeatured: true, industryTag: 'Xây dựng' },
      { id: 'p24', name: 'Vít bắn ngói', category: 'hardware', description: 'Cố định ngói lên đòn tay gỗ, chống ngói bay khi có gió lớn. Mũi nhọn xuyên ngói dễ dàng, không gây nứt.', image: img('vitgoren.png'), features: ['Bắn ngói'] },
      { id: 'p25', name: 'Vít bắn tôn', category: 'hardware', description: 'Bắn tôn vào khung thép hoặc đòn tay gỗ. Kèm ron cao su chống dột tại vị trí bắn vít. Ron đen chịu nhiệt.', image: img('vitbanton.png'), features: ['Ron đen', 'Đòn tay gỗ'] },
      { id: 'p26', name: 'Vít gỗ ren thưa', category: 'hardware', description: 'Bắn gỗ, ván ép, MDF. Ren thưa bám gỗ chắc, không làm nứt tách gỗ khi vặn. Nhiều kích thước.', image: img('vitgoren.png'), features: ['Ren thưa'] },
      { id: 'p27', name: 'Vít thạch cao đen', category: 'hardware', description: 'Bắn tấm thạch cao vào khung xương, thi công trần và vách ngăn. Mũi nhọn, lớp phủ đen chống gỉ.', image: img('vitthanhcaoden.png'), features: ['Thạch cao'] },
      { id: 'p28', name: 'Vít trắng đầu bằng', category: 'hardware', description: 'Lắp đặt phụ kiện nội thất, bản lề, ray trượt. Đầu bằng chìm, mặt trắng thẩm mỹ cao.', image: img('vitukhoan.png'), features: ['Đầu bằng', 'Trắng'] },
      { id: 'p29', name: 'Vít inox', category: 'hardware', description: 'Dùng ngoài trời hoặc môi trường ẩm ướt. Inox 304 chống gỉ sét vĩnh viễn, tuổi thọ cao gấp 5 lần vít thường.', image: img('vitukhoan.png'), features: ['Inox', 'Chống gỉ'] },
      { id: 'p30', name: 'Keo nến & Súng bắn keo', category: 'hardware', description: 'Gắn kết nhanh các vật liệu: gỗ, vải, nhựa, giấy. Keo nến tan chảy bằng súng nhiệt, khô trong 30 giây. Có loại lớn và nhỏ.', image: img('sungbankeo.png'), features: ['Keo nến lớn', 'Keo nến nhỏ', 'Súng lớn', 'Súng nhỏ'] },
      { id: 'p31', name: 'Dao cắt keo', category: 'hardware', description: 'Cắt băng keo nhanh, gọn khi đóng gói hàng loạt. Lưỡi sắc bén, an toàn, có nhiều loại: cầm tay, để bàn. Hiệu Dân Hoa.', image: img('daocatkeo.png'), features: ['Dân Hoa 5cm', 'Dân Hoa 7cm', 'Dao để bàn', 'Dao tay cầm'] },
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
