// Script: copy product seed images from src/assets/images to public/uploads/seed
// Run: npm run db:seed-images

import fs from 'fs';
import path from 'path';

const SOURCE_DIR = path.join(process.cwd(), 'src', 'assets', 'images');
const DEST_DIR = path.join(process.cwd(), 'public', 'uploads', 'seed');

// All image filenames used by seed products in db.sql
const SEED_IMAGES = [
  'bangkeotrong.png',
  'bangkeoduc.png',
  'bangkeomau2.png',
  'bangkeovanphongpham.png',
  'bangkeogiay.png',
  'bangkeogiay2.png',
  'bangkeogiay12-35m.png',
  'bangkeochongdot.png',
  'bangkeochongdotnhuaduong.png',
  'cuonluoithuytinh.png',
  'bangkeoxopxanh.png',
  'bangkeomau1.png',
  'bangkeodannenvang.png',
  'bangkeodien-nano.png',
  'bangkeocheson3-5-11.png',
  'bangkeovai-xanh-xam.png',
  'xophoinguyencay.png',
  'manpe-cacloai.png',
  'manpe-2.png',
  'daydainhieumau.png',
  'daydai-mautuychon.png',
  'dayrut-nhieukichco.png',
  'sanphamcanhbao-trucanhbao-cuon-canhbao.png',
  'vitukhoan.png',
  'vitgoren.png',
  'vitbanton.png',
  'vitthanhcaoden.png',
  'sungbankeo.png',
  'daocatkeo.png',
];

function main() {
  // Create dest folder
  if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
    console.log(`✓ Created folder: ${DEST_DIR}`);
  }

  let copied = 0;
  let skipped = 0;
  let missing = 0;

  for (const filename of SEED_IMAGES) {
    const src = path.join(SOURCE_DIR, filename);
    const dest = path.join(DEST_DIR, filename);

    if (!fs.existsSync(src)) {
      console.warn(`⚠ Missing source: ${filename}`);
      missing++;
      continue;
    }

    if (fs.existsSync(dest)) {
      // Already exists — overwrite to keep in sync
      fs.copyFileSync(src, dest);
      skipped++;
    } else {
      fs.copyFileSync(src, dest);
      copied++;
    }
  }

  console.log('');
  console.log(`✓ Copy complete: ${copied} new, ${skipped} updated, ${missing} missing`);
  console.log(`  Source: ${SOURCE_DIR}`);
  console.log(`  Dest:   ${DEST_DIR}`);
  console.log(`  Files served at: /uploads/seed/<filename>`);
}

main();
