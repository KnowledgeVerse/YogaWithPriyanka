// ──── LANGUAGE & THEME LOGIC ────
const translations = {
  en: {
    settingsTitle: "Advanced Settings",
    language: "Language",
    theme: "Theme Options",
    themeLight: "Light Mode",
    themeDark: "Dark Mode",
    themeGlass: "Glossy Glass",
    customColor: "Accent Color",
    navHome: "Home",
    navAbout: "About",
    navClasses: "Classes",
    navGallery: "Gallery",
    navEvents: "Events",
    navBlog: "Blog",
    navContact: "Contact",
    heroTitle:
      "Transform Your<br/>Life Through<br/><em>Yoga & Mindfulness</em>",
    heroSubtitle:
      "Discover inner peace and physical strength with personalized yoga sessions designed for all levels — from beginner to advanced practitioner.",
    exploreBtn: "Explore Classes",
    bookTrialBtn: "Book Free Trial ✦",
    statsStudents: "Students Trained",
    statsYears: "Years Experience",
    statsClasses: "Classes Conducted",
  },
  hi: {
    settingsTitle: "उन्नत सेटिंग्स",
    language: "भाषा (Language)",
    theme: "थीम विकल्प",
    themeLight: "लाइट मोड",
    themeDark: "डार्क मोड",
    themeGlass: "ग्लॉसी ग्लास",
    customColor: "एक्सेंट रंग",
    navHome: "होम",
    navAbout: "परिचय",
    navClasses: "क्लासेस",
    navGallery: "गैलरी",
    navEvents: "इवेंट्स",
    navBlog: "ब्लॉग",
    navContact: "संपर्क",
    heroTitle:
      "योग और माइंडफुलनेस<br/>के माध्यम से अपना<br/><em>जीवन बदलें</em>",
    heroSubtitle:
      "शुरुआती से लेकर उन्नत अभ्यासकर्ताओं तक, सभी स्तरों के लिए डिज़ाइन किए गए व्यक्तिगत योग सत्रों के साथ आंतरिक शांति और शारीरिक शक्ति की खोज करें।",
    exploreBtn: "क्लासेस देखें",
    bookTrialBtn: "फ्री ट्रायल बुक करें ✦",
    statsStudents: "प्रशिक्षित छात्र",
    statsYears: "वर्षों का अनुभव",
    statsClasses: "आयोजित क्लासेस",
  },
};

function toggleSettings() {
  document.getElementById("settingsPanel").classList.toggle("open");
}

function setLanguage(lang) {
  document
    .querySelectorAll(".lang-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelector(".lang-" + lang).classList.add("active");
  localStorage.setItem("yogaLang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("yogaTheme", theme);
  document
    .querySelectorAll(".theme-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("btn-theme-" + theme).classList.add("active");
}

function setCustomColor(color) {
  document.documentElement.style.setProperty("--sage-dark", color);
  document.documentElement.style.setProperty("--sage", color);
  localStorage.setItem("yogaCustomColor", color);
}

function resetCustomColor() {
  document.documentElement.style.removeProperty("--sage-dark");
  document.documentElement.style.removeProperty("--sage");
  localStorage.removeItem("yogaCustomColor");
  document.getElementById("customColorPicker").value = "#587c4a";
}

// ──── MOUSE PARALLAX FOR ORBS ────
document.addEventListener("mousemove", (e) => {
  if (document.documentElement.getAttribute("data-theme") === "glass") {
    const orbs = document.querySelector(".glass-bg-orbs");
    if (orbs) {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // Max move 20px
      const y = (e.clientY / window.innerHeight - 0.5) * 40; // Max move 20px
      orbs.style.transform = `translate(${x}px, ${y}px)`;
    }
  }
});

// ──── DATA STORE ────
const defaultClasses = [
  {
    id: 1,
    name: "Morning Hatha Yoga",
    type: "offline",
    time: "6:00 AM – 7:00 AM",
    duration: "60 min",
    price: 1500,
    seats: "20 seats",
    emoji: "🌅",
    desc: "Gentle morning flow to energize your day",
  },
  {
    id: 2,
    name: "Power Yoga Online",
    type: "online",
    time: "7:30 AM – 8:30 AM",
    duration: "60 min",
    price: 1200,
    seats: "Unlimited",
    emoji: "💪",
    desc: "High-energy dynamic yoga via Zoom",
  },
  {
    id: 3,
    name: "Evening Vinyasa",
    type: "offline",
    time: "6:00 PM – 7:00 PM",
    duration: "60 min",
    price: 1500,
    seats: "15 seats",
    emoji: "🌙",
    desc: "Flowing sequences to release daily stress",
  },
  {
    id: 4,
    name: "Prenatal Yoga",
    type: "special",
    time: "10:00 AM – 11:00 AM",
    duration: "60 min",
    price: 2000,
    seats: "10 seats",
    emoji: "🤰",
    desc: "Safe and nurturing yoga for mothers-to-be",
  },
  {
    id: 5,
    name: "Meditation & Pranayama",
    type: "online",
    time: "5:30 AM – 6:15 AM",
    duration: "45 min",
    price: 800,
    seats: "Unlimited",
    emoji: "🧘",
    desc: "Breathwork and mindfulness techniques",
  },
  {
    id: 6,
    name: "Weight Loss Yoga",
    type: "special",
    time: "8:00 AM – 9:00 AM",
    duration: "60 min",
    price: 2500,
    seats: "12 seats",
    emoji: "🔥",
    desc: "Targeted yoga for weight management",
  },
];

const defaultTestimonials = [
  {
    name: "Anita Singh",
    cls: "Morning Hatha Yoga",
    text: "Priyanka's classes have completely transformed my mornings. I feel more energetic, focused, and at peace with myself. Highly recommended for anyone starting their yoga journey.",
    rating: 5,
    initial: "A",
    color: "#a8c49a",
  },
  {
    name: "Rohit Verma",
    cls: "Weight Loss Program",
    text: "I lost 8kg in just 3 months through her weight loss yoga program. The techniques are effective and Priyanka is incredibly supportive throughout the journey.",
    rating: 5,
    initial: "R",
    color: "#c5b8d4",
  },
  {
    name: "Meena Gupta",
    cls: "Prenatal Yoga",
    text: "The prenatal yoga sessions gave me so much confidence during my pregnancy. Safe, gentle, and genuinely caring – Priyanka is an exceptional teacher.",
    rating: 5,
    initial: "M",
    color: "#f5dcc0",
  },
];

const defaultBlogs = [
  {
    title: "5 Morning Yoga Poses to Boost Your Energy",
    cat: "Yoga Tips",
    time: "5 min",
    emoji: "🌅",
    color: "#a8c49a",
    excerpt:
      "Start your day with these powerful asanas that will energize your body and sharpen your mind for the challenges ahead.",
  },
  {
    title: "The Complete Guide to Pranayama Breathing",
    cat: "Meditation",
    time: "8 min",
    emoji: "🌬️",
    color: "#c5b8d4",
    excerpt:
      "Learn how breathwork can dramatically reduce stress, improve lung capacity, and bring lasting calm to your daily life.",
  },
  {
    title: "Yoga for Weight Loss: What Really Works",
    cat: "Health",
    time: "6 min",
    emoji: "🔥",
    color: "#f5e8a0",
    excerpt:
      "Beyond the calories, discover how yoga transforms your relationship with food, movement, and self-care for lasting results.",
  },
];

const defaultEvents = [
  {
    name: "Weekend Yoga Retreat",
    date: "June 21-22, 2025",
    price: 3500,
    location: "Nalanda Resort, Rajgir",
    desc: "A transformative two-day retreat combining yoga, meditation, and nature immersion in the beautiful hills.",
  },
  {
    name: "International Yoga Day Camp",
    date: "June 21, 2025",
    price: "Free",
    location: "Gandhi Maidan, Patna",
    desc: "Celebrate the global day of yoga with a massive community session. Open to all levels, all welcome!",
  },
  {
    name: "Corporate Yoga Workshop",
    date: "July 5, 2025",
    price: 1500,
    location: "Online / Office",
    desc: "A specially designed 2-hour workshop for corporate teams to reduce burnout and boost productivity through yoga.",
  },
];

let classes = JSON.parse(
  localStorage.getItem("yogaClasses") || JSON.stringify(defaultClasses),
);
let events = JSON.parse(
  localStorage.getItem("yogaEvents") || JSON.stringify(defaultEvents),
);
let blogs = JSON.parse(
  localStorage.getItem("yogaBlogs") || JSON.stringify(defaultBlogs),
);
let localGallery = JSON.parse(localStorage.getItem("yogaLocalGallery") || "[]");
let nextClassId = classes.length + 1;

// ──── RENDER CLASSES ────
function renderClasses(filter = "all") {
  const grid = document.getElementById("classesGrid");
  const filtered =
    filter === "all" ? classes : classes.filter((c) => c.type === filter);
  const bgs = {
    offline: "var(--sage-light)",
    online: "var(--lavender-light)",
    special: "var(--gold-light)",
  };
  grid.innerHTML = filtered
    .map(
      (c) => `
<div class="class-card">
<div class="class-card-banner" style="background:${bgs[c.type] || "#f0f0f0"}">${c.emoji || "🧘"}</div>
<div class="class-card-body">
  <span class="class-type-badge badge-${c.type}">${c.type.charAt(0).toUpperCase() + c.type.slice(1)}</span>
  <div class="class-card-title">${c.name}</div>
  <div style="font-size:0.82rem; color:var(--text-light)">${c.desc || ""}</div>
  <div class="class-meta">
    <span>⏰ ${c.time}</span>
    <span>⏱ ${c.duration}</span>
    <span>💺 ${c.seats}</span>
  </div>
  <div class="class-price">₹${Number(c.price).toLocaleString("en-IN")} <small>/month</small></div>
  <button class="btn-enroll" onclick="enrollClass('${c.name}')">Enroll Now</button>
</div>
</div>
`,
    )
    .join("");
}

function filterClasses(type, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderClasses(type);
}

function enrollClass(name) {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    const sel = document.querySelector("#contact select");
    const opts = sel.options;
    for (let i = 0; i < opts.length; i++) {
      if (
        opts[i].text.toLowerCase().includes(name.toLowerCase().split(" ")[0])
      ) {
        sel.selectedIndex = i;
        break;
      }
    }
  }, 800);
}

// ──── RENDER TESTIMONIALS ────
function renderTestimonials() {
  document.getElementById("testimonialsGrid").innerHTML = defaultTestimonials
    .map(
      (t) => `
<div class="testimonial-card">
<p class="testimonial-text">${t.text}</p>
<div class="testimonial-author">
  <div class="author-avatar" style="background:${t.color}20; color:${t.color}">${t.initial}</div>
  <div>
    <div class="stars">${"★".repeat(t.rating)}</div>
    <div class="author-name">${t.name}</div>
    <div class="author-class">${t.cls}</div>
  </div>
</div>
</div>
`,
    )
    .join("");
}

// ──── RENDER BLOGS ────
function renderBlogs() {
  document.getElementById("blogGrid").innerHTML = defaultBlogs
    .map(
      (b) => `
<div class="blog-card">
<div class="blog-card-img" style="background:${b.color}40; font-size:3.5rem">${b.emoji}</div>
<div class="blog-card-body">
  <div class="blog-category">${b.cat}</div>
  <div class="blog-title">${b.title}</div>
  <p class="blog-excerpt">${b.excerpt}</p>
  <div class="blog-meta">
    <span>📖 ${b.time} read</span>
    <span>🌿 Priyanka</span>
  </div>
</div>
</div>
`,
    )
    .join("");
}

// ──── RENDER EVENTS ────
function renderEvents() {
  document.getElementById("eventsGrid").innerHTML = defaultEvents
    .map(
      (e) => `
<div class="event-card">
<div class="event-date">📅 ${e.date}</div>
<div class="event-name">${e.name}</div>
<p class="event-desc">${e.desc}</p>
<div>
  <span class="event-price">₹${e.price === "Free" ? "Free" : Number(e.price).toLocaleString("en-IN")}</span>
  <button class="event-btn">Register →</button>
</div>
<div style="clear:both; font-size:0.78rem; color:var(--text-light); margin-top:0.75rem">📍 ${e.location}</div>
</div>
`,
    )
    .join("");
}

// ──── COUNTER ANIMATION ────
function animateCounter(id, target, suffix = "") {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const increment = Math.ceil(target / 50);
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = current.toLocaleString("en-IN") + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

// ──── ADMIN ────
function openAdmin() {
  document.getElementById("admin-login").classList.add("open");
}
function closeAdmin() {
  document.getElementById("admin-login").classList.remove("open");
}

function doLogin() {
  const u = document.getElementById("loginUser").value;
  const p = document.getElementById("loginPass").value;
  if (u === "Priyanka" && (p === "Kamal@007" || p === "Priyanka@007")) {
    document.getElementById("admin-login").classList.remove("open");
    document.getElementById("admin-dashboard").classList.add("open");
    document.getElementById("todayDate").textContent =
      new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    renderAdminClassesTable();
    renderAdminGallery();
    renderAdminEventsTable();
    renderAdminBlogTable();
  } else {
    alert("Incorrect credentials! Try: Priyanka / Kamal@007");
  }
}

function signOut() {
  document.getElementById("admin-dashboard").classList.remove("open");
}

function toggleAdminSidebar() {
  document.querySelector(".admin-sidebar").classList.toggle("open");
  document.getElementById("adminSidebarOverlay").classList.toggle("active");
}

function showSection(name, link) {
  document
    .querySelectorAll(".admin-section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".admin-nav-link")
    .forEach((l) => l.classList.remove("active"));
  document.getElementById("section-" + name).classList.add("active");
  link.classList.add("active");

  // Auto-close sidebar on mobile after clicking a link
  document.querySelector(".admin-sidebar").classList.remove("open");
  document.getElementById("adminSidebarOverlay").classList.remove("active");
}

function saveContent() {
  const heroTitleEl = document.getElementById("heroTitle");
  showToast("Content saved successfully!");
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = "✓ " + msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

// ──── ADMIN CLASSES ────
function renderAdminClassesTable() {
  document.getElementById("classesTableBody").innerHTML = classes
    .map(
      (c, i) => `
<tr>
<td>${c.emoji} ${c.name}</td>
<td><span class="class-type-badge badge-${c.type}">${c.type}</span></td>
<td>${c.time}</td>
<td>₹${Number(c.price).toLocaleString("en-IN")}</td>
<td><button class="btn-danger" onclick="deleteClass(${i})">Delete</button></td>
</tr>
`,
    )
    .join("");
}

function addClass() {
  showToast("Fill the form and click Save Class");
}
function clearClassForm() {
  ["cName", "cTime", "cDuration", "cPrice", "cSeats", "cDesc"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
}

function saveClass() {
  const name = document.getElementById("cName").value;
  if (!name) {
    alert("Please enter a class name");
    return;
  }
  const newClass = {
    id: nextClassId++,
    name,
    type: document.getElementById("cType").value,
    time: document.getElementById("cTime").value || "9:00 AM",
    duration: document.getElementById("cDuration").value || "60 min",
    price: document.getElementById("cPrice").value || 1500,
    seats: document.getElementById("cSeats").value || "Open",
    emoji: "🧘",
    desc: document.getElementById("cDesc").value,
  };
  classes.push(newClass);
  localStorage.setItem("yogaClasses", JSON.stringify(classes));
  renderAdminClassesTable();
  renderClasses("all");
  clearClassForm();
  showToast("Class added to website!");
}

function deleteClass(i) {
  if (confirm("Delete this class?")) {
    classes.splice(i, 1);
    localStorage.setItem("yogaClasses", JSON.stringify(classes));
    renderAdminClassesTable();
    renderClasses("all");
    showToast("Class removed");
  }
}

// ──── ADMIN GALLERY ────
const galleryEmojis = [
  "🌿",
  "🧘‍♀️",
  "🌸",
  "☯️",
  "🕉️",
  "🌅",
  "🙏",
  "💚",
  "🌳",
  "🌺",
  "✨",
  "🌙",
];
function renderAdminGallery() {
  const grid = document.getElementById("galleryAdminGrid");
  const localHtml = localGallery
    .map(
      (img, i) => `
    <div class="gallery-admin-item" style="background: url('${img}') center/cover;">
      <button class="delete-btn" onclick="removeLocalGalleryItem(${i})">✕</button>
    </div>
  `,
    )
    .join("");
  const emojiHtml = galleryEmojis
    .map(
      (e, i) => `
    <div class="gallery-admin-item" style="background:var(--beige)">
      ${e}
      <button class="delete-btn" onclick="removeGalleryItem(${i})">✕</button>
    </div>
  `,
    )
    .join("");
  grid.innerHTML = localHtml + emojiHtml;
}

function handleGalleryUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      localGallery.unshift(e.target.result);
      localStorage.setItem("yogaLocalGallery", JSON.stringify(localGallery));
      renderAdminGallery();
      renderMainGallery();
      showToast("Image uploaded successfully!");
    } catch (err) {
      alert(
        "Storage limit exceeded! Image is too large for local browser storage.",
      );
    }
  };
  reader.readAsDataURL(file);
  event.target.value = ""; // Reset input so same file can be chosen again
}

function removeLocalGalleryItem(i) {
  if (confirm("Delete this uploaded image?")) {
    localGallery.splice(i, 1);
    localStorage.setItem("yogaLocalGallery", JSON.stringify(localGallery));
    renderAdminGallery();
    renderMainGallery();
    showToast("Image removed");
  }
}

function removeGalleryItem(i) {
  showToast("Cannot delete default emojis from this demo.");
}

function renderMainGallery() {
  const grid = document.querySelector("#gallery .gallery-grid");
  if (!grid) return;
  const localHtml = localGallery
    .map(
      (img) => `
    <div class="gallery-item" style="background: url('${img}') center/cover; font-size:0;"></div>
  `,
    )
    .join("");
  // Append uploaded images ahead of the default emoji elements
  grid.innerHTML =
    localHtml +
    `
    <div class="gallery-item wide" style="background: linear-gradient(135deg, #a8c49a, #7c9a6e); font-size: 5rem;">🌿</div>
    <div class="gallery-item" style="background: linear-gradient(135deg, #c5b8d4, #a090c0)">🧘‍♀️</div>
    <div class="gallery-item" style="background: linear-gradient(135deg, #f5dcc0, #c4a15a)">🌸</div>
    <div class="gallery-item tall" style="background: linear-gradient(135deg, #7c9a6e, #4a6b3e); font-size: 4rem;">🌱</div>
    <div class="gallery-item" style="background: linear-gradient(135deg, #f5f0e8, #e8d0b0)">☯️</div>
    <div class="gallery-item wide" style="background: linear-gradient(135deg, #d4e8c0, #9abf70)">🕉️</div>
  `;
}

// ──── ADMIN EVENTS ────
function renderAdminEventsTable() {
  document.getElementById("eventsTableBody").innerHTML = defaultEvents
    .map(
      (e, i) => `
<tr>
<td>${e.name}</td>
<td>${e.date}</td>
<td>₹${e.price === "Free" ? "Free" : Number(e.price).toLocaleString("en-IN")}</td>
<td>${e.location}</td>
<td><button class="btn-danger" onclick="deleteEvent(${i})">Delete</button></td>
</tr>
`,
    )
    .join("");
}

function saveEvent() {
  const name = document.getElementById("evName").value;
  if (!name) {
    alert("Enter event name");
    return;
  }
  const ev = {
    name,
    date: document.getElementById("evDate").value || "TBD",
    price: document.getElementById("evPrice").value || "Free",
    location: document.getElementById("evLocation").value || "Studio",
    desc: document.getElementById("evDesc").value,
  };
  defaultEvents.push(ev);
  renderEvents();
  renderAdminEventsTable();
  showToast("Event published!");
}

function deleteEvent(i) {
  if (confirm("Delete event?")) {
    defaultEvents.splice(i, 1);
    renderEvents();
    renderAdminEventsTable();
    showToast("Event deleted");
  }
}

// ──── ADMIN BLOG ────
function renderAdminBlogTable() {
  document.getElementById("blogTableBody").innerHTML = defaultBlogs
    .map(
      (b, i) => `
<tr>
<td>${b.title}</td>
<td>${b.cat}</td>
<td>May 2025</td>
<td><button class="btn-danger" onclick="deleteBlog(${i})">Delete</button></td>
</tr>
`,
    )
    .join("");
}

function saveBlog() {
  const title = document.getElementById("blogTitle").value;
  if (!title) {
    alert("Enter blog title");
    return;
  }
  const b = {
    title,
    cat: document.getElementById("blogCat").value,
    time: document.getElementById("blogTime").value + " min",
    emoji: "📝",
    color: "#a8c49a",
    excerpt:
      document.getElementById("blogContent").textContent.substring(0, 120) +
      "...",
  };
  defaultBlogs.push(b);
  renderBlogs();
  renderAdminBlogTable();
  document.getElementById("blogTitle").value = "";
  document.getElementById("blogContent").innerHTML =
    "Write your article here...";
  showToast("Blog post published!");
}

function deleteBlog(i) {
  if (confirm("Delete this post?")) {
    defaultBlogs.splice(i, 1);
    renderBlogs();
    renderAdminBlogTable();
    showToast("Post deleted");
  }
}

function formatText(cmd, val) {
  if (cmd === "createLink") {
    val = prompt("Enter link URL:", "https://");
    if (!val) return;
  } else if (cmd === "insertImage") {
    val = prompt("Enter image URL:", "https://");
    if (!val) return;
  }
  document.getElementById("blogContent").focus();
  document.execCommand(cmd, false, val || null);
}

// ──── FORM SUBMIT ────
function submitForm() {
  showToast("Message sent! Priyanka will contact you within 24 hours.");
}

// ──── TESTIMONIALS ────
function approveTest(btn) {
  const card = btn.closest("div[style]");
  card.style.opacity = "0.5";
  setTimeout(() => card.remove(), 300);
  showToast("Testimonial approved and published!");
}

function rejectTest(btn) {
  const card = btn.closest("div[style]");
  card.style.opacity = "0.5";
  setTimeout(() => card.remove(), 300);
  showToast("Testimonial rejected");
}

// ──── MOBILE NAV ────
function toggleMobileNav() {
  const links = document.getElementById("navLinks");
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.cssText =
      "display:flex; flex-direction:column; position:absolute; top:70px; left:0; right:0; background:rgba(253,250,245,0.98); padding:1rem 2rem; gap:1rem; border-bottom:1px solid rgba(180,160,130,0.2); z-index:999";
  }
}

// ──── INIT ────
window.addEventListener("DOMContentLoaded", () => {
  // Init Theme & Language
  const savedTheme = localStorage.getItem("yogaTheme") || "glass";
  setTheme(savedTheme);
  const savedLang = localStorage.getItem("yogaLang") || "en";
  setLanguage(savedLang);

  const savedColor = localStorage.getItem("yogaCustomColor");
  if (savedColor) {
    setCustomColor(savedColor);
    document.getElementById("customColorPicker").value = savedColor;
  }

  renderClasses("all");
  renderMainGallery();
  renderTestimonials();
  renderBlogs();
  renderEvents();

  // Counter animation on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter("statStudents", 1240, "+");
          animateCounter("statYears", 12, "");
          animateCounter("statClasses", 3500, "+");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );

  const heroStats = document.querySelector(".hero-stats");
  if (heroStats) observer.observe(heroStats);
});
