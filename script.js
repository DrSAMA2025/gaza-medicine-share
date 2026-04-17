// =============================================
// Gaza Medicine Share — script.js
// =============================================

// ===== TRANSLATIONS =====
const STRINGS = {
  en: {
    siteTitle: "Gaza Medicine Share",
    siteSub: "Community Medicine Exchange",
    heroTitle: "Help your community.<br>Share what you have.",
    heroSub: "Post medicines you're not using so others in need can find them. Free. Anonymous. No registration.",
    btnShare: "+ Share Medicine",
    btnHeroShare: "📦 Share a Medicine",
    btnHeroFind: "🔍 Find Medicine",
    statLabel: "medicines shared",
    listingsTitle: "Available Medicines",
    searchPlaceholder: "Search medicine name...",
    allCat: "All categories",
    allLoc: "All locations",
    catAntibiotic: "Antibiotics",
    catPain: "Painkillers",
    catChronic: "Chronic / BP / Diabetes",
    catChild: "Children's Medicine",
    catWound: "Wound Care / Antiseptic",
    catOther: "Other",
    loadingText: "Loading medicines...",
    emptyText: "No medicines found. Be the first to share!",
    btnEmptyShare: "Share a Medicine",
    modalPostTitle: "Share a Medicine",
    modalPostSub: "Help someone in need. Fill in what you can.",
    lblMedEn: "Medicine name (English)",
    lblMedAr: "اسم الدواء (عربي)",
    lblQty: "Quantity",
    lblExpiry: "Expiry date",
    lblForm: "Form",
    lblCategory: "Category",
    lblLocation: "Location (optional)",
    lblContact: "How to contact you",
    lblContactHint: "This will be visible to people who want the medicine",
    lblNotes: "Extra notes (optional)",
    btnSubmit: "📤 Submit",
    discText: "This is a community tool, not a pharmacy. Verify expiry dates. Consult a doctor before using any medicine. We do not verify safety.",
    contactTitle: "Contact Donor",
    contactDisc: "⚠️ Verify the medicine's expiry date and condition before use. Consult a healthcare professional if unsure.",
    btnContact: "I Need This",
    btnFlag: "🚩 Flag",
    cardJustNow: "Just now",
    cardAgo: "ago",
    footerText: "Gaza Medicine Share — A community initiative. Not affiliated with any government or organization.",
    footerGithub: "View source on GitHub",
    errFill: "Please fill in at least the medicine name (English or Arabic) and your contact info.",
    errExpired: "Note: This medicine's expiry date has passed.",
    successTitle: "Thank you! 🌿",
    successMsg: "Your medicine has been shared. Someone in need will find it.",
    flagConfirm: "Thank you for flagging. This listing has been reported.",
    langToggle: "عربي",
    waBtn: "📱 WhatsApp",
    tgBtn: "✈️ Telegram",
  },
  ar: {
    siteTitle: "مشاركة الأدوية في غزة",
    siteSub: "منصة تبادل الأدوية المجتمعية",
    heroTitle: "ساعد مجتمعك.<br>شارك ما لديك.",
    heroSub: "انشر الأدوية التي لا تستخدمها لكي يجدها المحتاجون. مجانًا. بدون تسجيل.",
    btnShare: "+ مشاركة دواء",
    btnHeroShare: "📦 شارك دواءً",
    btnHeroFind: "🔍 ابحث عن دواء",
    statLabel: "دواء تمت مشاركته",
    listingsTitle: "الأدوية المتاحة",
    searchPlaceholder: "ابحث عن اسم الدواء...",
    allCat: "كل الفئات",
    allLoc: "كل المناطق",
    catAntibiotic: "مضادات حيوية",
    catPain: "مسكنات ألم",
    catChronic: "أمراض مزمنة / ضغط / سكري",
    catChild: "أدوية أطفال",
    catWound: "عناية بالجروح / مطهرات",
    catOther: "أخرى",
    loadingText: "جارٍ تحميل الأدوية...",
    emptyText: "لا توجد أدوية حتى الآن. كن أول من يشارك!",
    btnEmptyShare: "شارك دواءً",
    modalPostTitle: "شارك دواءً",
    modalPostSub: "ساعد شخصًا محتاجًا. أدخل ما تستطيع.",
    lblMedEn: "Medicine name (English)",
    lblMedAr: "اسم الدواء (عربي)",
    lblQty: "الكمية",
    lblExpiry: "تاريخ الانتهاء",
    lblForm: "الشكل",
    lblCategory: "الفئة",
    lblLocation: "الموقع (اختياري)",
    lblContact: "طريقة التواصل",
    lblContactHint: "سيظهر هذا للأشخاص الذين يحتاجون الدواء",
    lblNotes: "ملاحظات إضافية (اختياري)",
    btnSubmit: "📤 إرسال",
    discText: "هذه أداة مجتمعية وليست صيدلية. تحقق من تواريخ انتهاء الصلاحية. استشر طبيبًا قبل استخدام أي دواء. لا نتحقق من سلامة الأدوية.",
    contactTitle: "تواصل مع المُعطي",
    contactDisc: "⚠️ تحقق من تاريخ انتهاء صلاحية الدواء وحالته قبل الاستخدام. استشر متخصصًا صحيًا إذا كنت غير متأكد.",
    btnContact: "أحتاج هذا",
    btnFlag: "🚩 إبلاغ",
    cardJustNow: "الآن",
    cardAgo: "مضى",
    footerText: "مشاركة الأدوية في غزة — مبادرة مجتمعية. لا تنتمي لأي حكومة أو منظمة.",
    footerGithub: "المصدر على GitHub",
    errFill: "يرجى إدخال اسم الدواء (عربي أو إنجليزي) وبيانات التواصل على الأقل.",
    errExpired: "تنبيه: تاريخ انتهاء صلاحية هذا الدواء قد مر.",
    successTitle: "شكرًا لك! 🌿",
    successMsg: "تمت مشاركة دوائك. سيجده شخص محتاج.",
    flagConfirm: "شكرًا للإبلاغ. تم تسجيل هذا الإدخال.",
    langToggle: "English",
    waBtn: "📱 واتساب",
    tgBtn: "✈️ تيليغرام",
  }
};

let currentLang = "en";
let allListings = [];

// ===== LANG TOGGLE =====
function toggleLang() {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLang();
  renderListings(allListings);
}

function applyLang() {
  const s = STRINGS[currentLang];
  const isAr = currentLang === "ar";

  document.documentElement.setAttribute("lang", currentLang);
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.body.classList.toggle("rtl", isAr);

  const set = (id, val, attr = "textContent") => {
    const el = document.getElementById(id);
    if (el) {
      if (attr === "innerHTML") el.innerHTML = val;
      else el.textContent = val;
    }
  };
  const setPlaceholder = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = val;
  };

  set("site-title", s.siteTitle);
  set("site-subtitle", s.siteSub);
  set("hero-title", s.heroTitle, "innerHTML");
  set("hero-sub", s.heroSub);
  set("btn-share", s.btnShare);
  set("btn-hero-share", s.btnHeroShare);
  set("btn-hero-find", s.btnHeroFind);
  set("stat-label", s.statLabel);
  set("listings-title", s.listingsTitle);
  set("loading-text", s.loadingText);
  set("empty-text", s.emptyText);
  set("btn-empty-share", s.btnEmptyShare);
  set("modal-post-title", s.modalPostTitle);
  set("modal-post-sub", s.modalPostSub);
  set("lbl-med-en", s.lblMedEn);
  set("lbl-med-ar", s.lblMedAr);
  set("lbl-qty", s.lblQty);
  set("lbl-expiry", s.lblExpiry);
  set("lbl-form", s.lblForm);
  set("lbl-category", s.lblCategory);
  set("lbl-location", s.lblLocation);
  set("lbl-contact", s.lblContact);
  set("lbl-contact-hint", s.lblContactHint);
  set("lbl-notes", s.lblNotes);
  set("btn-submit", s.btnSubmit);
  set("disc-text", s.discText);
  set("contact-modal-title", s.contactTitle);
  set("contact-disc", s.contactDisc);
  set("btn-search", "🔍");
  set("footer-text", s.footerText);
  set("footer-github", s.footerGithub);
  set("lang-toggle", s.langToggle);

  setPlaceholder("search-input", s.searchPlaceholder);

  // selects
  const setOpt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setOpt("opt-all-cat", s.allCat);
  setOpt("opt-all-loc", s.allLoc);
  setOpt("opt-antibiotic", s.catAntibiotic);
  setOpt("opt-pain", s.catPain);
  setOpt("opt-chronic", s.catChronic);
  setOpt("opt-child", s.catChild);
  setOpt("opt-wound", s.catWound);
  setOpt("opt-other", s.catOther);
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
function closeIfOverlay(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}

// ===== FIREBASE LOAD =====
window.addEventListener("firebase-ready", () => {
  loadListings();
  checkFirebaseConfig();
});

function checkFirebaseConfig() {
  // If still using placeholder config, show setup guide
  try {
    const projectId = document.querySelector('script[type="module"]')?.textContent || "";
    if (projectId.includes("YOUR_PROJECT_ID")) {
      document.getElementById("setup-modal").style.display = "flex";
    }
  } catch (e) {}
}

async function loadListings() {
  try {
    const db = window._db;
    const { collection, query, orderBy, onSnapshot } = window._firebase;

    const q = query(collection(db, "medicines"), orderBy("timestamp", "desc"));

    onSnapshot(q, (snapshot) => {
      allListings = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      document.getElementById("stat-count").textContent = allListings.length;
      filterListings();
    });
  } catch (err) {
    console.error("Load error:", err);
    document.getElementById("cards-container").innerHTML =
      `<div class="loading-state"><p style="color:#c0392b">⚠️ Could not connect. Check your Firebase config.</p></div>`;
  }
}

// ===== FILTER & RENDER =====
function filterListings() {
  const search = document.getElementById("search-input").value.toLowerCase().trim();
  const cat = document.getElementById("filter-category").value;
  const loc = document.getElementById("filter-location").value;

  let filtered = allListings.filter(m => {
    const nameMatch = !search ||
      (m.medicine_en || "").toLowerCase().includes(search) ||
      (m.medicine_ar || "").includes(search) ||
      (m.notes || "").toLowerCase().includes(search);
    const catMatch = !cat || m.category === cat;
    const locMatch = !loc || m.location === loc;
    return nameMatch && catMatch && locMatch;
  });

  renderListings(filtered);
}

function renderListings(items) {
  const container = document.getElementById("cards-container");
  const emptyState = document.getElementById("empty-state");
  const countBadge = document.getElementById("listings-count");

  countBadge.textContent = items.length > 0 ? `${items.length}` : "";

  if (items.length === 0) {
    container.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";
  container.innerHTML = items.map(m => renderCard(m)).join("");
}

const CATEGORY_LABELS = {
  antibiotic: { en: "Antibiotic", ar: "مضاد حيوي" },
  painkiller: { en: "Painkiller", ar: "مسكن ألم" },
  chronic: { en: "Chronic", ar: "أمراض مزمنة" },
  child: { en: "Children's", ar: "أطفال" },
  wound: { en: "Wound Care", ar: "عناية بالجروح" },
  other: { en: "Other", ar: "أخرى" },
};
const LOCATION_LABELS = {
  north: { en: "North Gaza", ar: "شمال غزة" },
  city: { en: "Gaza City", ar: "مدينة غزة" },
  central: { en: "Central Gaza", ar: "وسط غزة" },
  "khan-younis": { en: "Khan Younis", ar: "خان يونس" },
  rafah: { en: "Rafah", ar: "رفح" },
  "other-loc": { en: "Other", ar: "أخرى" },
};
const FORM_LABELS = {
  tablets: { en: "Tablets", ar: "أقراص" },
  syrup: { en: "Syrup", ar: "شراب" },
  injection: { en: "Injection", ar: "حقن" },
  cream: { en: "Cream", ar: "كريم" },
  inhaler: { en: "Inhaler", ar: "بخاخ" },
  drops: { en: "Drops", ar: "قطرات" },
  other: { en: "Other", ar: "أخرى" },
};

function isExpired(expiryStr) {
  if (!expiryStr) return false;
  const [year, month] = expiryStr.split("-").map(Number);
  const now = new Date();
  return new Date(year, month - 1) < new Date(now.getFullYear(), now.getMonth());
}

function timeAgo(ts) {
  const s = STRINGS[currentLang];
  if (!ts) return "";
  const seconds = Math.floor((Date.now() - ts.toMillis()) / 1000);
  if (seconds < 60) return s.cardJustNow;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ${s.cardAgo}`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ${s.cardAgo}`;
  const days = Math.floor(hours / 24);
  return `${days}d ${s.cardAgo}`;
}

function renderCard(m) {
  const l = currentLang;
  const catLabel = (CATEGORY_LABELS[m.category] || {})[l] || m.category || "";
  const locLabel = (LOCATION_LABELS[m.location] || {})[l] || "";
  const formLabel = (FORM_LABELS[m.form] || {})[l] || "";
  const expired = isExpired(m.expiry);
  const s = STRINGS[l];

  const medName = l === "ar" && m.medicine_ar ? m.medicine_ar : (m.medicine_en || m.medicine_ar || "—");
  const medSub = l === "ar" && m.medicine_ar && m.medicine_en ? m.medicine_en : (m.medicine_ar && m.medicine_en ? m.medicine_ar : "");

  return `
  <div class="medicine-card" id="card-${m.id}">
    ${catLabel ? `<span class="card-category">${catLabel}</span>` : ""}
    <div class="card-name">${escHtml(medName)}</div>
    ${medSub ? `<div class="card-name-ar">${escHtml(medSub)}</div>` : ""}
    <div class="card-meta">
      ${m.quantity ? `<span class="card-tag">📦 ${escHtml(m.quantity)}</span>` : ""}
      ${formLabel ? `<span class="card-tag">${escHtml(formLabel)}</span>` : ""}
      ${m.expiry ? `<span class="card-tag ${expired ? "expired" : ""}">
        ${expired ? "⚠️ Exp: " : "✓ Exp: "}${m.expiry}
      </span>` : ""}
    </div>
    ${locLabel ? `<div class="card-location">${escHtml(locLabel)}</div>` : ""}
    ${m.notes ? `<div class="card-notes">${escHtml(m.notes)}</div>` : ""}
    <div class="card-actions">
      <button class="btn-contact" onclick="showContact('${m.id}')">${s.btnContact}</button>
      <button class="btn-flag" onclick="flagListing('${m.id}')" title="Report this listing">${s.btnFlag}</button>
    </div>
    ${m.timestamp ? `<div class="card-date">${timeAgo(m.timestamp)}</div>` : ""}
  </div>`;
}

function escHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ===== SHOW CONTACT =====
function showContact(id) {
  const m = allListings.find(x => x.id === id);
  if (!m) return;
  const s = STRINGS[currentLang];

  const contact = m.contact || "";
  const isWA = /^\+?[\d\s\-]{7,}/.test(contact.replace(/\s/g, ""));
  const isTG = contact.startsWith("@");
  const waNum = contact.replace(/[^\d]/g, "");

  let html = `<div class="contact-info-box">
    <h3>${s.modalPostTitle === "Share a Medicine" ? "Medicine" : "الدواء"}: ${escHtml(m.medicine_en || m.medicine_ar)}</h3>
    <div class="contact-detail">${escHtml(contact)}</div>`;

  if (isWA && waNum) {
    html += `<a class="contact-wa-btn" href="https://wa.me/${waNum}" target="_blank">${s.waBtn}</a>`;
  }
  if (isTG) {
    const handle = contact.replace("@", "");
    html += `<a class="contact-tg-btn" href="https://t.me/${handle}" target="_blank">${s.tgBtn}</a>`;
  }
  html += `</div>`;

  document.getElementById("contact-modal-body").innerHTML = html;
  document.getElementById("contact-modal-title").textContent = s.contactTitle;
  document.getElementById("contact-disc").textContent = s.contactDisc;
  openModal("contact-modal");
}

// ===== FLAG =====
async function flagListing(id) {
  try {
    const db = window._db;
    const { doc, updateDoc, increment } = window._firebase;
    await updateDoc(doc(db, "medicines", id), { flag_count: increment(1) });
    alert(STRINGS[currentLang].flagConfirm);
  } catch (e) {
    console.error(e);
  }
}

// ===== SUBMIT =====
async function submitMedicine() {
  const s = STRINGS[currentLang];
  const medEn = document.getElementById("f-med-en").value.trim();
  const medAr = document.getElementById("f-med-ar").value.trim();
  const contact = document.getElementById("f-contact").value.trim();
  const errEl = document.getElementById("post-error");

  if ((!medEn && !medAr) || !contact) {
    errEl.textContent = s.errFill;
    errEl.style.display = "block";
    return;
  }
  errEl.style.display = "none";

  const expiry = document.getElementById("f-expiry").value;
  if (expiry && isExpired(expiry)) {
    const ok = confirm(s.errExpired + "\n\nContinue anyway?");
    if (!ok) return;
  }

  const btn = document.getElementById("btn-submit");
  btn.disabled = true;
  btn.textContent = "...";

  try {
    const db = window._db;
    const { collection, addDoc, serverTimestamp } = window._firebase;

    await addDoc(collection(db, "medicines"), {
      medicine_en: medEn,
      medicine_ar: medAr,
      quantity: document.getElementById("f-qty").value.trim(),
      expiry,
      form: document.getElementById("f-form").value,
      category: document.getElementById("f-category").value,
      location: document.getElementById("f-location").value,
      contact,
      notes: document.getElementById("f-notes").value.trim(),
      flag_count: 0,
      timestamp: serverTimestamp(),
    });

    // Show success
    document.querySelector("#post-modal .modal").innerHTML = `
      <div class="success-anim">
        <div class="check">✅</div>
        <h2 style="font-family:'Amiri',serif;color:#1a4a3a;margin:12px 0 8px">${s.successTitle}</h2>
        <p style="color:#5c7a6e;margin-bottom:20px">${s.successMsg}</p>
        <button class="btn-primary" onclick="closeModal('post-modal');resetForm()">${currentLang === "ar" ? "إغلاق" : "Close"}</button>
      </div>`;
  } catch (err) {
    console.error(err);
    errEl.textContent = "Error: " + (err.message || "Could not save. Check your connection.");
    errEl.style.display = "block";
    btn.disabled = false;
    btn.textContent = s.btnSubmit;
  }
}

function resetForm() {
  ["f-med-en","f-med-ar","f-qty","f-expiry","f-contact","f-notes"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  // Restore modal HTML (reload for simplicity)
  location.reload();
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  applyLang();
});
