# 🌿 Gaza Medicine Share | مشاركة الأدوية في غزة

A free, bilingual (English/Arabic) community platform for sharing unused medicines in Gaza. 
Runs entirely on **GitHub Pages** (free) + **Firebase** (free tier).

---

## ✅ Features

- 🇬🇧 / 🇵🇸 Full English & Arabic with RTL layout toggle
- 📦 Post medicines with name, quantity, expiry, form, category, location
- 🔍 Search & filter by medicine name, category, or location
- 📱 Contact via **WhatsApp** or **Telegram** — one tap opens the app
- 🚩 Community flagging for expired/unsafe listings
- ⚡ Real-time updates (new posts appear instantly, no refresh)
- 📲 PWA — "Add to Home Screen" on Android/iOS
- 💬 Works in WhatsApp/Telegram/Facebook link previews (Open Graph)
- No registration, no email, no password — zero barrier to use

---

## 🚀 Setup Guide (15 minutes, 100% free)

### Step 1 — Fork or create the GitHub repo

1. Go to [github.com](https://github.com) → New repository
2. Name it: `gaza-medicine-share`
3. Set to **Public**
4. Upload all files from this folder

### Step 2 — Create Firebase project (free)

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → give it a name → Continue
3. Disable Google Analytics (optional) → **Create project**

### Step 3 — Enable Firestore database

1. In left sidebar → **Firestore Database** → **Create database**
2. Choose **Start in test mode** → Next
3. Select a region close to your users (e.g., `europe-west1`) → **Enable**

### Step 4 — Get your Firebase config

1. Go to **Project Settings** (gear icon) → **General** tab
2. Scroll to **Your apps** → Click **</>** (Web app)
3. Register app → Copy the `firebaseConfig` object

### Step 5 — Add config to index.html

Open `index.html` and find this section:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```

Replace with your actual values from Step 4.

### Step 6 — Set Firestore security rules

1. In Firebase Console → **Firestore** → **Rules** tab
2. Replace the default rules with the contents of `firestore.rules`
3. Click **Publish**

### Step 7 — Deploy to GitHub Pages

1. In your GitHub repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` → folder: `/ (root)` → **Save**
4. Wait ~2 minutes → your app is live at:
   `https://yourusername.github.io/gaza-medicine-share`

---

## 📱 Sharing on WhatsApp / Telegram / Facebook

Just share the GitHub Pages link — it will show a rich preview (title + description) in all messaging apps.

**For Telegram channels**: Pin the link with a brief message in Arabic.

**For WhatsApp groups**: Send the link with this message:
```
🌿 مشاركة الأدوية في غزة
إذا عندك أدوية مش بتستخدمها، شاركها مع اللي محتاجها!
رابط: https://yourusername.github.io/gaza-medicine-share
```

---

## 🔧 Firebase Free Tier Limits

| Feature | Free Limit | Enough for? |
|---------|-----------|-------------|
| Firestore reads | 50,000/day | ~500 users/day |
| Firestore writes | 20,000/day | ~200 new posts/day |
| Storage | 1 GB | Text only, no problem |
| Hosting | N/A (GitHub Pages) | Unlimited |

If you exceed limits (great problem to have!), Firebase Spark plan auto-pauses — no charges ever.

---

## 🛡️ Moderation

- Users can **flag** suspicious listings (increments `flag_count`)
- You can view and delete flagged listings directly in the Firebase Console
- Firestore rules prevent deletion from the public app

---

## 📁 File Structure

```
gaza-medicine-share/
├── index.html          ← Main app (everything in one file)
├── style.css           ← Styles (Arabic RTL, mobile-first)
├── script.js           ← App logic, translations, Firebase
├── manifest.json       ← PWA manifest (add to home screen)
├── firestore.rules     ← Security rules (paste into Firebase)
└── README.md           ← This file
```

---

## ⚠️ Medical Disclaimer

This is a community tool, not a pharmacy. It does not verify the safety, efficacy, or legality of shared medicines. Users should verify expiry dates and consult a healthcare professional before using any medicine obtained through this platform.

---

*Built with care for the people of Gaza. Free forever.*
