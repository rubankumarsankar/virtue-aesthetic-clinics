import fs from 'fs';
import https from 'https';

const url = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85';
const dest = 'public/images/hero/hero-radiant-portrait.jpg';

const file = fs.createWriteStream(dest);
https.get(url, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded radiant portrait successfully: ' + fs.statSync(dest).size + ' bytes');
      });
    });
  } else {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded radiant portrait successfully: ' + fs.statSync(dest).size + ' bytes');
    });
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
});

