-- ============================================
-- NHAN KHANG AN — Database Schema
-- IMPORTANT: Import using `npm run db:setup` to ensure UTF-8 encoding
-- DO NOT use mysql CLI directly on Windows (cp1252 issue)
-- ============================================

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

CREATE DATABASE IF NOT EXISTS nhankhangan
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE nhankhangan;

-- ============================================
-- Categories
-- ============================================
CREATE TABLE IF NOT EXISTS categories (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(64) DEFAULT 'Package',
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================
-- Products
-- ============================================
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(64) PRIMARY KEY,
  category_id VARCHAR(64) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  features TEXT,                        -- JSON array of strings
  is_featured TINYINT(1) DEFAULT 0,
  industry_tag VARCHAR(64),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================
-- Company info (key-value)
-- ============================================
CREATE TABLE IF NOT EXISTS company_info (
  `key` VARCHAR(64) PRIMARY KEY,
  `value` TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO company_info (`key`, `value`) VALUES
  ('name', 'Công ty TNHH Nhân Khang An'),
  ('shortName', 'NHÂN KHANG AN'),
  ('phone', '0944 27 27 26'),
  ('phoneHref', 'tel:0944272726'),
  ('address', 'Đường QL13, Khu phố 1, Phường Thành Tâm, Thị xã Chơn Thành, Tỉnh Bình Phước'),
  ('email', 'dovudinhchi@gmail.com'),
  ('slogan', 'Nhân Khang An - Bạn thịnh vượng, chúng tôi hạnh phúc')
ON DUPLICATE KEY UPDATE `value` = VALUES(`value`);

-- ============================================
-- Admin settings (for password change feature)
-- ============================================
CREATE TABLE IF NOT EXISTS admin_settings (
  `key` VARCHAR(64) PRIMARY KEY,
  `value` TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================
-- Seed initial categories
-- ============================================
INSERT INTO categories (id, name, icon, description, sort_order) VALUES
  ('tape-packing', 'Băng keo đóng gói', 'Package', 'Niêm phong thùng carton, đóng gói hàng hoá xuất kho — dính chắc, không bong tróc, tiết kiệm chi phí đóng gói.', 1),
  ('tape-paper', 'Băng keo Giấy & 2 mặt', 'Layers', 'Dùng trong sơn, trang trí, gắn kết vật liệu — dễ xé tay, không để lại keo, đa dạng khổ rộng.', 2),
  ('waterproofing', 'Chống dột & Cách nhiệt', 'Home', 'Xử lý chống dột mái tôn, mái ngói, sân thượng, vách tường — thi công nhanh, tiết kiệm chi phí sửa chữa.', 3),
  ('tape-specialty', 'Băng keo chuyên dụng', 'Wrench', 'Băng keo xốp, simili, điện, dán nền, che sơn — mỗi loại phục vụ một nhu cầu riêng trong sản xuất và xây dựng.', 4),
  ('packaging', 'Vật liệu đóng gói', 'ShieldCheck', 'Xốp hơi và màng PE — bọc, quấn, bảo vệ hàng hoá khỏi trầy xước và va đập khi vận chuyển.', 5),
  ('strapping', 'Dây đai & Dây rút', 'Cable', 'Siết chặt, cố định thùng hàng và kiện hàng — chịu lực tốt, đảm bảo an toàn khi vận chuyển đường dài.', 6),
  ('warning', 'Vật liệu Cảnh báo', 'AlertTriangle', 'Trụ chóp nón và cuộn phản quang — cảnh báo khu vực nguy hiểm tại công trình, đường xá, nhà xưởng.', 7),
  ('hardware', 'Kim khí & Dụng cụ', 'Hammer', 'Vít các loại, keo nến, dao cắt keo — dụng cụ thiết yếu cho xây dựng, lắp đặt mái và sửa chữa.', 8)
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- ============================================
-- Seed all 35 products
-- ============================================
INSERT INTO products (id, category_id, name, description, image, features, is_featured, industry_tag, sort_order) VALUES
  -- Băng keo đóng gói
  ('p1', 'tape-packing', 'Băng keo trong', 'Dán thùng carton, niêm phong hàng hoá. Trong suốt, độ dính cao, không để lại vết keo. Khổ 2F4 và 4F8.', '/uploads/seed/bangkeotrong.png', '["1 kg","1.2 kg","1.4 kg","1.6 kg","1.8 kg"]', 1, 'Logistics', 1),
  ('p2', 'tape-packing', 'Băng keo đục', 'Dán thùng hàng cần che kín nội dung bên trong. Màu đục, bám dính tốt trên mọi bề mặt carton. Khổ 2F4 và 4F8.', '/uploads/seed/bangkeoduc.png', '["1 kg","1.2 kg","1.4 kg","1.6 kg","1.8 kg"]', 1, 'Logistics', 2),
  ('p3', 'tape-packing', 'Băng keo hàng dễ vỡ', 'In cảnh báo "Hàng dễ vỡ — Handle with Care" trực tiếp trên keo. Giúp nhân viên vận chuyển cẩn thận hơn với kiện hàng.', '/uploads/seed/bangkeomau2.png', '["1.2 kg","1.8 kg"]', 0, NULL, 3),
  ('p3b', 'tape-packing', 'Băng keo văn phòng phẩm', 'Loại nhỏ dùng cho văn phòng, dán tài liệu, phong bì, hồ sơ. Trong suốt, dễ xé, nhiều kích cỡ.', '/uploads/seed/bangkeovanphongpham.png', '["Nhiều size","Trong suốt"]', 1, 'Văn phòng', 4),

  -- Băng keo Giấy & 2 mặt
  ('p4', 'tape-paper', 'Băng keo giấy', 'Che sơn, đánh dấu vị trí, dán tạm khi thi công. Dễ xé tay, không để lại vết keo khi gỡ. Khổ 2F4 và 4F8.', '/uploads/seed/bangkeogiay.png', '["12m","18m","30m","45m"]', 1, 'Sản xuất', 1),
  ('p5', 'tape-paper', 'Băng keo giấy 2 mặt', 'Dán 2 bề mặt lại với nhau — dùng trong in ấn, may mặc, quảng cáo. Kết dính mạnh, không cần keo nước. Khổ 1F2, 2F4, 4F8.', '/uploads/seed/bangkeogiay2.png', '["12m","18m","30m","45m"]', 0, NULL, 2),
  ('p5b', 'tape-paper', 'Băng keo giấy cuộn lớn', 'Cuộn dài tiết kiệm cho xưởng sản xuất, công trình lớn. Nhiều chiều dài từ 12m đến 35m, đa dạng khổ rộng.', '/uploads/seed/bangkeogiay12-35m.png', '["12m","18m","25m","35m"]', 1, 'Sản xuất', 3),

  -- Chống dột & Cách nhiệt
  ('p6', 'waterproofing', 'Băng keo chống dột X2000', 'Dán trực tiếp lên vết nứt, mối nối mái tôn để ngăn nước mưa. Chịu nhiệt, chịu nắng, bền theo thời gian. Nhiều khổ rộng.', '/uploads/seed/bangkeochongdot.png', '["Khổ 5cm","Khổ 10cm","Khổ 15cm","Khổ 20cm"]', 1, 'Xây dựng', 1),
  ('p7', 'waterproofing', 'Băng keo chống dột nhựa đường', 'Chống thấm bằng nhựa đường tự dính — dùng cho mái ngói, sân thượng, mái bê tông. Bám dính cực mạnh, chống UV.', '/uploads/seed/bangkeochongdotnhuaduong.png', '["Khổ 5cm","Khổ 10cm","Khổ 15cm","Khổ 20cm"]', 0, NULL, 2),
  ('p8', 'waterproofing', 'Cuộn lưới thủy tinh', 'Gia cố lớp chống thấm, tăng độ bền cho bề mặt tường và sàn. Kết hợp với keo chống dột để đạt hiệu quả tối đa. Khổ 1m x 50m.', '/uploads/seed/cuonluoithuytinh.png', '["3×3","4×4","5×5"]', 0, NULL, 3),
  ('p9', 'waterproofing', 'Cuộn chống dột nhựa đường', 'Cuộn lớn phủ toàn bộ mái hoặc sàn, xử lý triệt để vấn đề thấm dột diện rộng. Tự dính, thi công đơn giản. Khổ 1m x 5m.', '/uploads/seed/cuonluoithuytinh.png', '["Khổ 1m x 5m"]', 0, NULL, 4),

  -- Băng keo chuyên dụng
  ('p10', 'tape-specialty', 'Băng keo Xốp', 'Đệm chống va đập, cách âm, gắn biển hiệu. Xốp dày 2 mặt dính, chịu lực tốt. Có 3 màu: xanh, đỏ, trắng. Khổ 2F4 và 4F8.', '/uploads/seed/bangkeoxopxanh.png', '["Xốp xanh","Xốp đỏ","Xốp trắng"]', 0, NULL, 1),
  ('p11', 'tape-specialty', 'Băng keo Simili', 'Đánh dấu khu vực, phân luồng trong nhà xưởng, kho bãi. Nhiều màu sắc nổi bật, bám dính trên nền bê tông. Khổ 3F6 và 4F8.', '/uploads/seed/bangkeomau1.png', '["Vàng","Đỏ","Xanh lá","Xanh dương"]', 0, NULL, 2),
  ('p12', 'tape-specialty', 'Băng keo Dán nền', 'Kẻ vạch an toàn, phân chia khu vực sản xuất theo tiêu chuẩn 5S. Bền, chịu mài mòn, dễ nhận diện. Khổ 4F8 và 7F.', '/uploads/seed/bangkeodannenvang.png', '["Vàng","Vàng đen","Khổ 4F8","Khổ 7F"]', 0, NULL, 3),
  ('p13', 'tape-specialty', 'Băng keo Điện', 'Quấn cách điện dây dẫn, bảo vệ mối nối điện an toàn. Chịu nhiệt, cách điện tốt. Hiệu Tô Nga Dũng và Nano.', '/uploads/seed/bangkeodien-nano.png', '["Tô Nga Dũng","Nano","20 yard","30 yard"]', 0, NULL, 4),
  ('p13b', 'tape-specialty', 'Băng keo che sơn 3M', 'Che phủ bề mặt không cần sơn, tạo đường viền sắc nét. Gỡ ra không để lại keo, không làm hỏng bề mặt. Chính hãng 3M.', '/uploads/seed/bangkeocheson3-5-11.png', '["Nhiều khổ","3M chính hãng"]', 1, 'Xây dựng', 5),
  ('p14', 'tape-specialty', 'Băng keo đặc biệt', 'Các loại chuyên dụng: vải xám chịu lực, bạc nhôm chịu nhiệt, lưới thạch cao chống nứt, nano siêu dính đa năng.', '/uploads/seed/bangkeovai-xanh-xam.png', '["Vải xám","Bạc nhôm","Lưới thạch cao","Nano siêu dính"]', 0, NULL, 6),

  -- Vật liệu đóng gói
  ('p15', 'packaging', 'Xốp hơi', 'Bọc hàng dễ vỡ, chống va đập khi vận chuyển. Nhẹ, đàn hồi, tái sử dụng được. Nguyên cây 1m40 hoặc cắt theo yêu cầu.', '/uploads/seed/xophoinguyencay.png', '["Nguyên cây 1m40","Cắt 2","Cắt 3","Cắt 4","Cắt 5","Cắt 6","Cắt 7"]', 1, 'Logistics', 1),
  ('p16', 'packaging', 'Màng PE cuộn', 'Quấn pallet, cố định hàng hoá trên xe, chống bụi và ẩm. Co giãn tốt, bám dính tự nhiên. Khổ 25cm và 50cm.', '/uploads/seed/manpe-cacloai.png', '["1.5 kg","2 kg","2.5 kg","3 kg"]', 1, 'Logistics', 2),
  ('p16b', 'packaging', 'Màng PE co nhiệt', 'Bọc sản phẩm rồi dùng nhiệt co lại ôm sát — tạo lớp bảo vệ kín, chống nước, chống bụi. Nhận sản xuất theo yêu cầu.', '/uploads/seed/manpe-2.png', '["Khổ 25cm","Khổ 50cm","Theo yêu cầu"]', 1, 'Sản xuất', 3),

  -- Dây đai & Dây rút
  ('p17', 'strapping', 'Dây đai PP', 'Đai nhựa siết thùng carton, kiện hàng nhẹ đến trung bình. Dẻo dai, không gỉ sét, tiết kiệm hơn đai thép. Nhiều màu: trắng, xanh, vàng.', '/uploads/seed/daydainhieumau.png', '["Trắng","Xanh","Vàng"]', 1, 'Logistics', 1),
  ('p18', 'strapping', 'Dây đai PET', 'Đai cứng chịu lực cao cho hàng nặng, pallet gạch, thép, gỗ. Thay thế đai thép, an toàn hơn khi cắt. Màu xanh và đen.', '/uploads/seed/daydai-mautuychon.png', '["Xanh","Đen"]', 0, NULL, 2),
  ('p19', 'strapping', 'Bọ sắt kẹp đai', 'Khoá kim loại giữ chặt đầu dây đai, đảm bảo mối nối không bung trong quá trình vận chuyển. Dùng với đai PP và PET.', '/uploads/seed/daydai-mautuychon.png', '["Bọ sắt"]', 0, NULL, 3),
  ('p20', 'strapping', 'Dây rút nhựa', 'Buộc gọn dây điện, ống nước, cố định linh kiện. Khoá 1 chiều, siết chặt không tuột. Đầy đủ kích thước từ 100mm đến 450mm.', '/uploads/seed/dayrut-nhieukichco.png', '["100mm","150mm","200mm","250mm","300mm","350mm","400mm","450mm"]', 0, NULL, 4),

  -- Vật liệu Cảnh báo
  ('p21', 'warning', 'Trụ cảnh báo', 'Đặt tại công trình, bãi đỗ xe, khu vực thi công để cảnh báo người qua lại. Phản quang ban đêm, chịu va đập. 3 kích thước.', '/uploads/seed/sanphamcanhbao-trucanhbao-cuon-canhbao.png', '["55cm","65cm","75cm"]', 0, NULL, 1),
  ('p22', 'warning', 'Cuộn cảnh báo', 'Dán trên nền, tường, rào chắn để cảnh báo nguy hiểm. Phản quang, nhiều mẫu: mũi tên chỉ hướng, vàng-đen, đỏ-trắng, cáp điện, cáp nước.', '/uploads/seed/sanphamcanhbao-trucanhbao-cuon-canhbao.png', '["Mũi tên","Vàng đen","Đỏ trắng","Cáp nước","Cáp điện"]', 0, NULL, 2),

  -- Kim khí & Dụng cụ
  ('p23', 'hardware', 'Vít tự khoan đầu dù', 'Bắn trực tiếp vào tôn, thép mỏng mà không cần khoan trước. Đầu dù giữ tấm lợp chắc chắn, chống gió bão.', '/uploads/seed/vitukhoan.png', '["Tự khoan","Đầu dù"]', 1, 'Xây dựng', 1),
  ('p24', 'hardware', 'Vít bắn ngói', 'Cố định ngói lên đòn tay gỗ, chống ngói bay khi có gió lớn. Mũi nhọn xuyên ngói dễ dàng, không gây nứt.', '/uploads/seed/vitgoren.png', '["Bắn ngói"]', 0, NULL, 2),
  ('p25', 'hardware', 'Vít bắn tôn', 'Bắn tôn vào khung thép hoặc đòn tay gỗ. Kèm ron cao su chống dột tại vị trí bắn vít. Ron đen chịu nhiệt.', '/uploads/seed/vitbanton.png', '["Ron đen","Đòn tay gỗ"]', 0, NULL, 3),
  ('p26', 'hardware', 'Vít gỗ ren thưa', 'Bắn gỗ, ván ép, MDF. Ren thưa bám gỗ chắc, không làm nứt tách gỗ khi vặn. Nhiều kích thước.', '/uploads/seed/vitgoren.png', '["Ren thưa"]', 0, NULL, 4),
  ('p27', 'hardware', 'Vít thạch cao đen', 'Bắn tấm thạch cao vào khung xương, thi công trần và vách ngăn. Mũi nhọn, lớp phủ đen chống gỉ.', '/uploads/seed/vitthanhcaoden.png', '["Thạch cao"]', 0, NULL, 5),
  ('p28', 'hardware', 'Vít trắng đầu bằng', 'Lắp đặt phụ kiện nội thất, bản lề, ray trượt. Đầu bằng chìm, mặt trắng thẩm mỹ cao.', '/uploads/seed/vitukhoan.png', '["Đầu bằng","Trắng"]', 0, NULL, 6),
  ('p29', 'hardware', 'Vít inox', 'Dùng ngoài trời hoặc môi trường ẩm ướt. Inox 304 chống gỉ sét vĩnh viễn, tuổi thọ cao gấp 5 lần vít thường.', '/uploads/seed/vitukhoan.png', '["Inox","Chống gỉ"]', 0, NULL, 7),
  ('p30', 'hardware', 'Keo nến & Súng bắn keo', 'Gắn kết nhanh các vật liệu: gỗ, vải, nhựa, giấy. Keo nến tan chảy bằng súng nhiệt, khô trong 30 giây. Có loại lớn và nhỏ.', '/uploads/seed/sungbankeo.png', '["Keo nến lớn","Keo nến nhỏ","Súng lớn","Súng nhỏ"]', 0, NULL, 8),
  ('p31', 'hardware', 'Dao cắt keo', 'Cắt băng keo nhanh, gọn khi đóng gói hàng loạt. Lưỡi sắc bén, an toàn, có nhiều loại: cầm tay, để bàn. Hiệu Dân Hoa.', '/uploads/seed/daocatkeo.png', '["Dân Hoa 5cm","Dân Hoa 7cm","Dao để bàn","Dao tay cầm"]', 0, NULL, 9)
ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), image = VALUES(image), features = VALUES(features), is_featured = VALUES(is_featured), industry_tag = VALUES(industry_tag), sort_order = VALUES(sort_order);
