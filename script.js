const SITE = {
  whatsappNumbers: ["919701897225", "919550114104"],
  enquiryFormUrl: "PASTE_YOUR_GOOGLE_FORM_URL_HERE",
  instagramUrl: "",
  youtubeChannelUrl: ""
};

const VIDEOS = [
  ["Ardhanareshwaram","vWLeOcGh8gU"],["Alarulu Kuriyaga","JE3jtvMlB-g"],["Siva Stuti","kmJ0ThUrOnk"],
  ["Hanuman Chalisa","WlWcRTB636A"],["Andal Kauthuvam","Zp7hcmSGy-A"],["Maddu Meikum Kanna","8xYI_vsdpoM"],
  ["Devi Nee Ei Thunayi","zI-nbjQM2PQ"],["Jagadhodharana","R9eCDCDTeu4"],["Rajarajeswari Ashtakam","RBW0EhYjKMY"],
  ["Sriman Narayana","wxDbWkgRbSM"],["Thaaye Yashoda","FGA7mu7EA3I"],["Thillana","z2LzBhp8Vq4"]
];

const STUDENT_GALLERY = [
  ["student-performance-01.jpeg","Student performance archive"],["student-performance-02.jpeg","Duet performance"],["student-performance-03.jpeg","Stage presentation"],["student-performance-04.jpeg","Group presentation"],
  ["student-performance-05.jpeg","Student performance"],["student-performance-06.jpeg","Classical repertoire"],["student-performance-07.jpeg","Student performance"],["student-performance-08.jpeg","Group choreography"],
  ["student-performance-09.jpeg","Temple performance archive"],["student-performance-10.jpeg","Group performance"],["student-performance-11.jpeg","Temple performance archive"],["student-performance-12.jpeg","Temple performance archive"],
  ["student-performance-13.jpeg","Group performance"],["student-performance-14.jpeg","Performance at a temple setting"],["student-performance-15.jpeg","Group performance"],["student-performance-16.jpeg","Natyapravaha archive — 2018"],
  ["student-performance-17.jpeg","Natyapravaha archive — 2018"],["student-performance-18.jpeg","Centenary celebrations archive"],["student-performance-19.jpeg","Cultural performance archive"],["student-performance-20.jpeg","Cultural performance archive"]
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  const msg = "Hello, I would like to enquire about Bharatanatyam classes at Kalaranjani School of Dance & Music.";
  const whatsappUrl = `https://wa.me/${SITE.whatsappNumbers[0]}?text=${encodeURIComponent(msg)}`;
  const formLink = document.getElementById("formLink");
  formLink.href = SITE.enquiryFormUrl;
  document.querySelectorAll(".floating-whatsapp").forEach(el => el.href = whatsappUrl);
  renderVideos(); renderGallery();
  document.querySelector(".menu-toggle").addEventListener("click", () => document.querySelector(".nav").classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => document.querySelector(".nav").classList.remove("open")));
});

function renderVideos(){
  const grid=document.getElementById("videoGrid");
  grid.innerHTML=VIDEOS.map(([title,id])=>`<article class="video-card"><a class="video-thumb" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener"><img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="${escapeHtml(title)} — Kalaranjani video"><span class="play">▶</span></a><div class="video-body"><div class="tag">KALARANJANI VIDEO ARCHIVE</div><h3>${escapeHtml(title)}</h3><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">Watch on YouTube →</a></div></article>`).join("");
}
function renderGallery(){
  const grid=document.getElementById("studentGallery");
  grid.innerHTML=STUDENT_GALLERY.map(([file,caption])=>`<figure><img src="assets/images/gallery/${file}" alt="${escapeHtml(caption)}"><figcaption>${escapeHtml(caption)}</figcaption></figure>`).join("");
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
