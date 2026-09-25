(function () {
  "use strict";
  var d = window.PORTFOLIO;
  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var icons = {
    github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.2 2.4 4.2 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
    folder: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'
  };

  // ---------- Hero ----------
  $("heroName").textContent = d.name;
  $("heroRole").textContent = d.role;
  $("heroTagline").textContent = d.tagline;
  $("heroLocation").textContent = "📍 " + d.location;
  $("avatarInitials").textContent = d.initials;
  $("footerName").textContent = d.name;
  $("year").textContent = new Date().getFullYear();

  if (d.photo) {
    var img = new Image();
    img.alt = d.name;
    img.onload = function () { $("avatar").innerHTML = ""; $("avatar").appendChild(img); };
    img.src = d.photo;
  }
  if (d.resume) {
    $("resumeBtn").href = d.resume;
    $("resumeBtn").hidden = false;
  }

  // ---------- About ----------
  $("aboutText").innerHTML = d.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  $("stats").innerHTML = d.stats.map(function (s) {
    return '<div class="stat"><span class="stat-value">' + esc(s.value) + '</span><span class="stat-label">' + esc(s.label) + "</span></div>";
  }).join("");
  $("hobbies").innerHTML = (d.hobbies || []).map(function (h) { return "<li>" + esc(h) + "</li>"; }).join("");

  // ---------- Skills ----------
  $("skillsGrid").innerHTML = d.skills.map(function (g) {
    return '<div class="card skill-card reveal"><h3>' + esc(g.group) + '</h3><ul class="chips">' +
      g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
  }).join("");

  // ---------- Experience ----------
  $("timeline").innerHTML = d.experience.map(function (e) {
    return '<li class="timeline-item reveal"><div class="card">' +
      '<div class="tl-head"><div><h3>' + esc(e.title) + ' <span class="accent">@ ' + esc(e.company) + "</span></h3>" +
      (e.meta ? '<p class="muted">' + esc(e.meta) + "</p>" : "") + "</div>" +
      '<span class="tl-period mono">' + esc(e.period) + "</span></div>" +
      '<ul class="tl-points">' + e.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>" +
      "</div></li>";
  }).join("");

  // ---------- Projects ----------
  function projectCard(p) {
    var links = "";
    if (p.github) links += '<a href="' + esc(p.github) + '" target="_blank" rel="noopener" aria-label="' + esc(p.name) + ' on GitHub">' + icons.github + "</a>";
    if (p.live) links += '<a href="' + esc(p.live) + '" target="_blank" rel="noopener" aria-label="' + esc(p.name) + ' live demo">' + icons.external + "</a>";
    return '<article class="card project-card reveal">' +
      '<div class="project-top"><span class="accent">' + icons.folder + '</span><div class="project-links">' + links + "</div></div>" +
      "<h3>" + esc(p.name) + "</h3><p>" + esc(p.description) + "</p>" +
      '<ul class="tags mono">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></article>";
  }
  function projectsOf(type) {
    return d.projects.filter(function (p) { return (p.type || "professional") === type; }).map(projectCard).join("");
  }
  $("projectsPro").innerHTML = projectsOf("professional");
  $("projectsPersonal").innerHTML = projectsOf("personal");

  // ---------- Education & Training ----------
  function eduItem(e) {
    return '<div class="card edu-item reveal"><div class="edu-head"><h4>' + esc(e.title) + '</h4><span class="tl-period mono">' + esc(e.period) + "</span></div>" +
      '<p class="muted">' + esc(e.place) + "</p>" + (e.note ? '<p class="edu-note">' + esc(e.note) + "</p>" : "") + "</div>";
  }
  $("eduList").innerHTML = d.education.map(eduItem).join("");
  $("certList").innerHTML = d.certifications.map(eduItem).join("");

  // ---------- Contact ----------
  var c = d.contact;
  $("contactEmailBtn").href = "mailto:" + c.email;
  var socials = '<a href="mailto:' + esc(c.email) + '" aria-label="Email">' + icons.mail + "<span>" + esc(c.email) + "</span></a>";
  if (c.github) socials += '<a href="' + esc(c.github) + '" target="_blank" rel="noopener" aria-label="GitHub">' + icons.github + "<span>GitHub</span></a>";
  if (c.linkedin) socials += '<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icons.linkedin + "<span>LinkedIn</span></a>";
  $("socials").innerHTML = socials;

  // ---------- Theme toggle ----------
  $("themeToggle").addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // ---------- Mobile menu ----------
  var menuBtn = $("menuToggle"), navLinks = $("navLinks");
  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () { setMenu(!navLinks.classList.contains("open")); });
  navLinks.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });

  // ---------- Nav shadow + active link ----------
  var nav = $("nav");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 10); }, { passive: true });

  var linkMap = {};
  navLinks.querySelectorAll("a").forEach(function (a) { linkMap[a.getAttribute("href").slice(1)] = a; });

  if ("IntersectionObserver" in window) {
    var sectionObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove("active"); });
          if (linkMap[en.target.id]) linkMap[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { sectionObs.observe(s); });

    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); revealObs.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { revealObs.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }
})();
