import https from "node:https";
import fs from "node:fs";
import path from "node:path";

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", reject);
  });
}

const images = [
  // Injectables (lips profile)
  {
    url: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/treatments/injectables.jpg"
  },
  // Dr. Elena Chen (female doctor in white coat)
  {
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=85",
    dest: "public/images/doctors/dr-elena-chen.jpg"
  },
  // Patient Story (peaceful serene portrait)
  {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/clinic/patient-story.jpg"
  },
  // Skin Health blog (silk / smooth skin glow)
  {
    url: "https://images.unsplash.com/photo-1512290903671-17adc820d449?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/blogs/skin-health.jpg"
  }
];

async function main() {
  for (const img of images) {
    try {
      const fullPath = path.resolve(img.dest);
      await download(img.url, fullPath);
      console.log(`✓ ${img.dest} (${fs.statSync(fullPath).size} bytes)`);
    } catch (e) {
      console.warn(`✗ ${img.dest} failed:`, e.message);
    }
  }
}

main();

