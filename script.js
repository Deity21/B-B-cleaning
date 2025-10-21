/* ===========================
   Initialize AOS (scroll animations)
=========================== */
AOS.init({
  duration: 1000,
  once: true,
  offset: 120,
  easing: "ease-in-out"
});

/* ===========================
   Hero Animations
=========================== */
gsap.from(".hero-content h1", { y: 60, opacity: 0, duration: 1.1, ease: "power3.out" });
gsap.from(".hero-content p", { y: 40, opacity: 0, delay: 0.2, duration: 1 });
gsap.from(".cta", { scale: 0.8, opacity: 0, delay: 0.4, duration: 0.8 });

/* Floating Shapes */
gsap.to(".shape1", { y: 30, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".shape2", { y: -40, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
gsap.to(".shape3", { y: 50, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });

/* ===========================
   Default Smooth Scroll Behavior
=========================== */
document.documentElement.style.scrollBehavior = "smooth";

/* ===========================
   WhatsApp Quick Contact
=========================== */
function openWhatsApp() {
  const msg = encodeURIComponent("Hello! I'm interested in your cleaning services.");
  window.open(`https://wa.me/2347037189474?text=${msg}`, "_blank");
}

document.querySelectorAll(".btn-contact").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    openWhatsApp();
  });
});

/* ===========================
   Quote Popup
=========================== */
const popup = document.getElementById("quotePopup");
const openBtns = [document.getElementById("quoteBtn"), document.getElementById("quoteBtn2")];
const closeBtn = document.querySelector(".close");
const sendBtn = document.getElementById("sendQuote");

if (popup && openBtns && closeBtn && sendBtn) {
  openBtns.forEach(btn => btn?.addEventListener("click", () => {
    popup.style.display = "flex";
    document.body.style.overflow = "hidden";
  }));

  closeBtn.onclick = () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  };

  window.onclick = e => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  sendBtn.addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const service = document.getElementById("service").value.trim();
    const details = document.getElementById("details").value.trim();

    if (!name || !service) {
      alert("Please fill in your name and desired service.");
      return;
    }

    const text = `Hello, my name is ${name}. I'm interested in your ${service} cleaning service.${details ? "\n\nDetails: " + details : ""}`;
    window.open(`https://wa.me/2347037189474?text=${encodeURIComponent(text)}`, "_blank");
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });
}

/* ===========================
   Mouse Glow Cursor
=========================== */
const cursorDot = document.querySelector(".cursor-dot");
if (cursorDot) {
  document.addEventListener("mousemove", e => {
    gsap.to(cursorDot, { 
      x: e.clientX - 7, 
      y: e.clientY - 7, 
      duration: 0.15, 
      ease: "power2.out"
    });
  });
}

/* ===========================
   Testimonial Auto Slider
=========================== */
const track = document.querySelector(".testimonial-track");
if (track) {
  let scrollAmount = 0;
  let lastTime = 0;
  const speed = 0.4; // Adjust speed here

  function autoScroll(time) {
    if (!lastTime) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;

    scrollAmount += speed * (delta / 16);
    if (scrollAmount >= track.scrollWidth - track.clientWidth) scrollAmount = 0;
    track.scrollLeft = scrollAmount;

    requestAnimationFrame(autoScroll);
  }
  requestAnimationFrame(autoScroll);
}

/* ===========================
   Lazy Loading Images
=========================== */
document.querySelectorAll("img").forEach(img => img.setAttribute("loading", "lazy"));
