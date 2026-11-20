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
  // Hero Woman Portrait (soft glow, natural beauty, clean skin)
  {
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85",
    dest: "public/images/hero/hero-radiant-portrait.jpg"
  },
  // Video thumbnail / treatment room
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    dest: "public/images/hero/clinic-thumb.jpg"
  },
  // Clinic Interior Reception
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85",
    dest: "public/images/clinic/reception-interior.jpg"
  },
  // Treatment 1: Skin Rejuvenation (face with cream / clean skincare)
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/treatments/skin-rejuvenation.jpg"
  },
  // Treatment 2: Injectables (natural lips / lips enhancement)
  {
    url: "https://images.unsplash.com/photo-1588510906428-8e89547cb4e8?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/treatments/injectables.jpg"
  },
  // Treatment 3: Skin Tightening (jawline & neck contour profile)
  {
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/treatments/skin-tightening.jpg"
  },
  // Treatment 4: Body Contouring (sculpted shoulder / back)
  {
    url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/treatments/body-contouring.jpg"
  },
  // Doctor 1: Dr. Elena Chen (female dermatologist portrait)
  {
    url: "https://images.unsplash.com/photo-1594824813511-2097e3a9c792?auto=format&fit=crop&w=600&q=85",
    dest: "public/images/doctors/dr-elena-chen.jpg"
  },
  // Doctor 2: Dr. Marcus Reed (male aesthetic doctor portrait)
  {
    url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=85",
    dest: "public/images/doctors/dr-marcus-reed.jpg"
  },
  // Patient Story: serene glowing skin portrait
  {
    url: "https://images.unsplash.com/photo-1512290900672-1f02e6907481?auto=format&fit=crop&w=1000&q=85",
    dest: "public/images/clinic/patient-story.jpg"
  },
  // Blog 1: Skin Health (golden liquid / silk)
  {
    url: "https://images.unsplash.com/photo-1608248597359-009cf012c40c?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/blogs/skin-health.jpg"
  },
  // Blog 2: Treatment Guides (serum dropper)
  {
    url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/blogs/treatment-guide.jpg"
  },
  // Blog 3: Body Contouring (smooth sand / warm texture)
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    dest: "public/images/blogs/body-contouring.jpg"
  }
];

async function main() {
  console.log("Downloading mockup photography assets...");
  for (const img of images) {
    try {
      const fullPath = path.resolve(img.dest);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      await download(img.url, fullPath);
      console.log(`✓ ${img.dest} (${fs.statSync(fullPath).size} bytes)`);
    } catch (e) {
      console.warn(`✗ ${img.dest} failed:`, e.message);
    }
  }
  console.log("Done.");
}

main();

