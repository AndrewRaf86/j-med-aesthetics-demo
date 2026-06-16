const revealItems = document.querySelectorAll(".reveal");
const stickyCall = document.querySelector(".sticky-call");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    item.classList.add("can-reveal");
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("details[open]").forEach((openDetail) => {
      if (openDetail !== detail) openDetail.removeAttribute("open");
    });
  });
});

const updateStickyCall = () => {
  if (!stickyCall) return;
  stickyCall.classList.toggle("is-active", window.scrollY > 560);
};

updateStickyCall();
window.addEventListener("scroll", updateStickyCall, { passive: true });
