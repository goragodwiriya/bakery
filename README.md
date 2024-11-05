# 🥐 ร้านขนมปังสังขยา - Custard Bread Shop

เว็บไซต์ร้านขนมปังสังขยาแบบ One Page ที่รองรับการทำงานแบบออฟไลน์ พร้อมระบบตะกร้าสินค้า

## 📋 คุณสมบัติ

- 📱 Responsive Design รองรับทุกขนาดหน้าจอ
- 🔄 Progressive Web App (PWA) ทำงานได้แบบออฟไลน์
- 🛒 ระบบตะกร้าสินค้าแบบ Real-time
- 💾 จัดเก็บข้อมูลด้วย Local Storage
- 🎨 ภาพกราฟิกแบบ SVG Vector ทั้งหมด
- 🎯 แอนิเมชันและเอฟเฟกต์แบบ Interactive
- 📝 ฟอนต์ไทย Prompt แบบ Self-hosted

## 🚀 การติดตั้ง

1. Clone repository:
```bash
git clone https://github.com/goragodwiriya/bakery.git
cd bakery-website
```

2. ติดตั้ง Local Server (แนะนำ VS Code + Live Server Extension)

3. เปิดโปรเจคใน VS Code และเริ่ม Live Server

4. เข้าถึงเว็บไซต์ที่ http://localhost:5500

## 📂 โครงสร้างโปรเจค

```
bakery-website/
├── assets/
│   ├── css/          # สไตล์ชีท
│   ├── images/       # รูปภาพ SVG
│   ├── js/           # JavaScript
│   └── fonts/        # ฟอนต์ Prompt
├── index.html        # หน้าหลัก
├── manifest.json     # PWA manifest
├── sw.js            # Service Worker
├── README.md        # เอกสารนี้
└── LICENSE          # MIT License
```

## 💻 การใช้งานบนเซิร์ฟเวอร์

1. อัพโหลดไฟล์ทั้งหมดไปยังเว็บโฮสติ้ง
2. ต้องใช้งานบน HTTPS เพื่อให้ Service Worker ทำงานได้
3. ตรวจสอบ Path ในไฟล์ manifest.json ให้ตรงกับโดเมน

## 🔧 การพัฒนาต่อ

1. แก้ไขไฟล์ CSS ในโฟลเดอร์ `assets/css/`
2. แก้ไขไฟล์ JavaScript ในโฟลเดอร์ `assets/js/`
3. แก้ไขรูปภาพ SVG ในโฟลเดอร์ `assets/images/`
4. แก้ไขเนื้อหาในไฟล์ `index.html`

## ⚠️ ข้อควรระวัง

- ต้องรันบน HTTPS หรือ localhost
- ตรวจสอบ Path ของไฟล์ให้ถูกต้อง
- รองรับเฉพาะเบราว์เซอร์รุ่นใหม่
- ต้องเปิดใช้งาน JavaScript

## 👨‍💻 ผู้พัฒนา

Goragod Wiriya

## 📄 ลิขสิทธิ์

[MIT License](LICENSE)
