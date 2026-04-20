const header = document.querySelector(".site-header");
const form = document.querySelector(".contact-form");
const revealElements = document.querySelectorAll(".reveal");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 50);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -80px 0px",
  }
);

revealElements.forEach((element) => observer.observe(element));

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
