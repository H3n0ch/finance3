import fs from 'fs';
import https from 'https';
import path from 'path';

const imageUrls = {
  // Testimonial images
  'testimonial-1.jpg': 'https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg',
  'testimonial-2.jpg': 'https://img.freepik.com/free-photo/young-businessman-wearing-suit_273609-7071.jpg',
  'testimonial-3.jpg': 'https://img.freepik.com/free-photo/successful-business-woman-portrait_53876-137692.jpg',

  // Expert/Advisor images
  'advisor-1.jpg': 'https://img.freepik.com/free-photo/business-woman-office_1303-14325.jpg',
  'advisor-2.jpg': 'https://img.freepik.com/free-photo/handsome-businessman-suit_273609-6941.jpg',
  'advisor-3.jpg': 'https://img.freepik.com/free-photo/business-woman-office_1303-14326.jpg',
  'advisor-4.jpg': 'https://img.freepik.com/free-photo/confident-businessman-suit_273609-7072.jpg',

  // Expert article images
  'expert-1.jpg': 'https://img.freepik.com/free-photo/business-people-discussing-charts_53876-138077.jpg',
  'expert-2.jpg': 'https://img.freepik.com/free-photo/retirement-planning-concept_53876-138075.jpg',
  'expert-3.jpg': 'https://img.freepik.com/free-photo/digital-cryptocurrency-charts_53876-138074.jpg',

  // Author headshots
  'author-1.jpg': 'https://img.freepik.com/free-photo/senior-businessman-portrait_53876-138078.jpg',
  'author-2.jpg': 'https://img.freepik.com/free-photo/business-woman-office-portrait_53876-138079.jpg',
  'author-3.jpg': 'https://img.freepik.com/free-photo/young-businessman-portrait_53876-138080.jpg'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const dir = path.join(process.cwd(), 'public', 'images');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filepath = path.join(dir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => reject(err));
    });
  });
};

const downloadAllImages = async () => {
  try {
    for (const [filename, url] of Object.entries(imageUrls)) {
      try {
        await downloadImage(url, filename);
        // Add a small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Error downloading ${filename}:`, error.message);
      }
    }
    console.log('All images downloaded successfully!');
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

downloadAllImages();
