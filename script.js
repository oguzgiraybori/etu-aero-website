const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll("[data-reveal]");
const canvas = document.querySelector(".sky-canvas");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Menüyü aç");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

if (canvas) {
  const context = canvas.getContext("2d");
  const particles = Array.from({ length: 86 }, () => ({
    x: Math.random(),
    y: Math.random(),
    speed: 0.08 + Math.random() * 0.26,
    size: 0.55 + Math.random() * 1.7,
    drift: -0.2 + Math.random() * 0.4,
  }));

  let width = 0;
  let height = 0;
  let lastTime = 0;

  const resizeCanvas = () => {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const render = (time) => {
    const delta = Math.min(32, time - lastTime || 16);
    lastTime = time;
    context.clearRect(0, 0, width, height);

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(70, 217, 255, 0.08)");
    gradient.addColorStop(0.45, "rgba(255, 255, 255, 0.02)");
    gradient.addColorStop(1, "rgba(215, 41, 56, 0.08)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.y -= (particle.speed * delta) / 1000;
      particle.x += (particle.drift * delta) / 1000;

      if (particle.y < -0.03) {
        particle.y = 1.03;
        particle.x = Math.random();
      }

      if (particle.x < -0.03) particle.x = 1.03;
      if (particle.x > 1.03) particle.x = -0.03;

      context.beginPath();
      context.arc(particle.x * width, particle.y * height, particle.size, 0, Math.PI * 2);
      context.fillStyle = "rgba(213, 234, 255, 0.52)";
      context.fill();
    });

    requestAnimationFrame(render);
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  requestAnimationFrame(render);
}
