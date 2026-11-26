# SreyHong Love Prank Web App 💕🖕

កម្មវិធីកម្សាន្ត prank បែបគួរឱ្យស្រឡាញ់ និងកំប្លែង បង្កើតឡើងដោយប្រើប្រាស់ **HTML5, CSS3 និង Pure JavaScript** (ព្រមទាំងមានជម្រើស PHP ដូចក្នុងវីដេអូដើម)។ កម្មវិធីនេះត្រូវបានអភិវឌ្ឍឡើងយ៉ាងពិសេសសម្រាប់ **ទូរស័ព្ទដៃ (Mobile Phone Full Screen & Haptics)** ផ្តល់នូវបទពិសោធន៍ពេញលេញ រលូន និងទាក់ទាញបំផុត។

---

## 📱 មុខងារ Fullscreen & Engagement លើទូរស័ព្ទដៃ (Mobile Setup)

1. **Auto Fullscreen ពេលចុច (Automatic Surprise)**:
   - ពេលអ្នកប្រើប្រាស់ទូរស័ព្ទចុចប៊ូតុង **"ចុចខ្ញុំ 🤩"** កម្មវិធីនឹងហៅ `requestFullScreenMode()` ដោយស្វ័យប្រវត្ត ដើម្បីបិទ Address Bar / Tab Bar របស់ Browser ធ្វើឱ្យរូបភាព Comic Prank "FUCK YOU!" លោតពេញអេក្រង់ទូរស័ព្ទតែម្តង។

2. **ប៊ូតុងបើក/បិទពេញអេក្រង់ងាយស្រួល (Intuitive Fullscreen Toggle)**:
   - នៅជ្រុងខាងលើមានប៊ូតុង `⛶ ពេញអេក្រង់` ដែលអាចចុចដើម្បីបើក ឬចាកចេញពី Fullscreen បានគ្រប់ពេល។

3. **ប្រព័ន្ធញ័រទូរស័ព្ទ (Haptic Feedback / Vibration)**:
   - ប្រើប្រាស់ `navigator.vibrate([80, 60, 140])` ដើម្បីឱ្យទូរស័ព្ទញ័រខ្លាំងៗនៅពេល prank បង្ហាញខ្លួន បង្កើនអារម្មណ៍ភ្ញាក់ផ្អើល និងទាក់ទាញទ្វេដង។

4. **រចនាបថ 100dvh & Safe-Area Inset (No Layout Jumping)**:
   - ប្រើប្រាស់ `min-height: 100dvh` និង `env(safe-area-inset-*)` ការពារមិនឱ្យ notch ឬរបារ status bar របស់ iPhone / Android បាំងខ្លឹមសារ។
   - បន្ថែម `touch-action: manipulation;` ការពារកុំឱ្យច្រឡំ zoom ពេលចុចលឿនៗ។

5. **សំឡេងកំប្លែង Web Audio API (Zero Lag / No Network Required)**:
   - សំឡេង Pop ស្រទន់ពេលចុច និងសំឡេង Prank Trombone "Wah-wah-wah-waaaah" កំប្លែង ដែលបង្កើតចេញពី Web Audio Synthesizer ដោយផ្ទាល់ ដំណើរការភ្លាមៗដោយមិនបាច់ទាញយក file សំឡេងពីក្រៅឡើយ។

---

## 📂 រចនាសម្ព័ន្ធឯកសារ (Project Structure)

```
d:/SreyHong/
│
├── index.html         # ទំព័រដើម (Screen 1 & Screen 2 បែប Single Page App + Fullscreen API)
├── Hlong_love.html    # ទំព័រ Prank ដាច់ដោយឡែក (HTML standalone)
├── Hlong_love.php     # ទំព័រ Prank សម្រាប់ XAMPP / Apache PHP (ដូចក្នុងវីដេអូ localhost/SreyHong/Hlong_love.php)
├── style.css          # រចនាបថ 100dvh, Mobile Fullscreen, Animations, Khmer Fonts
├── script.js          # Fullscreen API, Haptic Vibration, Web Audio API, Particles, Share & Replay
│
├── assets/            # រូបភាព និងសំឡេង
│   ├── comic.png      # រូបភាព Pop Art Comic "FUCK YOU!" (កម្រិត HD)
│   ├── bgm.mp3        # បទភ្លេងដើមពីវីដេអូ
│   ├── bear_clean.png # Sticker កូនខ្លាឃ្មុំ Brown (Transparent)
│   ├── envelope_clean.png # Sticker សំបុត្រស្នេហា (Transparent)
│   ├── heart_clean.png    # Sticker បេះដូងផ្កាយ (Transparent)
│   ├── flower_clean.png   # Sticker ផ្កាសាគូរ៉ា (Transparent)
│   └── svg/           # Sticker បែប Vector SVG (ច្បាស់គ្រប់អេក្រង់ Retina/Mobile)
│       ├── bear.svg
│       ├── envelope.svg
│       ├── heart.svg
│       └── flower.svg
└── README.md
```

---

## 🚀 របៀបបើកដំណើរការ (How to Run)

1. **បើកផ្ទាល់លើកុំព្យូទ័រ ឬទូរស័ព្ទ**:
   - ចុចពីរដងលើ `index.html` ដើម្បីបើកក្នុង Chrome, Safari, ឬ Edge។
2. **បើកតាម Live Server (VS Code)**:
   - ចុចកណ្ដុរស្ដាំលើ `index.html` ហើយជ្រើសរើស **Open with Live Server** (`http://127.0.0.1:5501/index.html`)។
3. **បើកតាម XAMPP / PHP**:
   - ដាក់ក្នុង `htdocs/SreyHong` ហើយចូលតាម `http://localhost/SreyHong/Hlong_love.php`។
