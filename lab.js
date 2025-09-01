document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
  });

  // Smooth scroll
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
      menuBtn.classList.remove("fa-times");
    });
  });

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  document.querySelectorAll(".lightbox-item").forEach((item) => {
    item.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = item.src;
    });
  });
  closeBtn.addEventListener("click", () => (lightbox.style.display = "none"));
  window.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });

  // Book Ticket
  const bookBtns = document.querySelectorAll(".book-btn");
  bookBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const toast = document.createElement("div");
      toast.textContent = "✅ Your ticket has been booked!";
      Object.assign(toast.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "12px 18px",
        background: "linear-gradient(45deg,#0ff,#06f)",
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        zIndex: "3000",
        opacity: "0",
        transition: "opacity .3s, transform .3s",
      });
      document.body.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = "1";
        toast.style.transform = "translateY(-10px)";
      });
      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(0)";
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    });
  });

  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 900, once: true, offset: 120, easing: "ease-in-out" });
  }
});
