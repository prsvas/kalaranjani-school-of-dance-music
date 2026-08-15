// =============================
// WEBSITE SETTINGS - EDIT THESE
// =============================
const SITE = {
  whatsappNumber: "919701897225", // Country code + number, no + or spaces. Example: 919876543210
  enquiryFormUrl: "PASTE_YOUR_GOOGLE_FORM_URL_HERE",
  instagramUrl: ""
};

// Sample classical arts news.
// Replace these with your own researched items and original summaries.
// Always link to the original publisher and use photos you are licensed to use.
const NEWS = [
  {
    category: "BHARATANATYAM",
    title: "Add a current Bharatanatyam story here",
    summary: "Write a short original summary of the story in two or three sentences. Avoid copying the publisher's article text.",
    source: "Source / Publisher Name",
    url: "https://example.com"
  },
  {
    category: "CARNATIC MUSIC",
    title: "Add a current Carnatic music story here",
    summary: "Use this card for concerts, awards, festivals, artist milestones or educational initiatives.",
    source: "Source / Publisher Name",
    url: "https://example.com"
  },
  {
    category: "CLASSICAL ARTS",
    title: "Add a classical arts story here",
    summary: "Keep the summary concise and direct readers to the original publication for the full article.",
    source: "Source / Publisher Name",
    url: "https://example.com"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hello, I would like to enquire about Bharatanatyam classes.")}`;
  document.getElementById("whatsappLink").href = whatsappUrl;
  document.getElementById("floatingWhatsapp").href = whatsappUrl;
  document.getElementById("formLink").href = SITE.enquiryFormUrl;

  renderNews();

  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("open");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => document.querySelector(".nav").classList.remove("open"));
  });
});

function renderNews() {
  const grid = document.getElementById("news-grid");
  grid.innerHTML = NEWS.map(item => `
    <article class="news-card">
      <div class="tag">${escapeHtml(item.category)}</div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.summary)}</p>
      <p><strong>${escapeHtml(item.source)}</strong></p>
      <a href="${item.url}" target="_blank" rel="noopener">Read Original Article →</a>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[char]));
}
