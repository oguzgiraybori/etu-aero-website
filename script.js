const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll(".reveal");
const tiltTarget = document.querySelector("[data-tilt]");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach(item => observer.observe(item));

if (tiltTarget) {
  const stage = tiltTarget.closest(".zifir-stage");

  stage.addEventListener("pointermove", event => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltTarget.style.transform = `translate(-50%, -50%) rotateX(${58 - y * 8}deg) rotateZ(${-10 + x * 9}deg)`;
  });

  stage.addEventListener("pointerleave", () => {
    tiltTarget.style.transform = "translate(-50%, -50%) rotateX(58deg) rotateZ(-10deg)";
  });
}
