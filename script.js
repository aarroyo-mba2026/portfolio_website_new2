const header = document.querySelector(".site-header");
const form = document.querySelector(".contact-form");
const revealElements = document.querySelectorAll(".reveal");
const successModal = document.getElementById("formSuccessModal");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

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

const emailInput = document.querySelector('.contact-form input[name="email"]');
const replyToInput = document.querySelector('.contact-form input[name="_replyto"]');

if (emailInput && replyToInput) {
  emailInput.addEventListener("input", () => {
    replyToInput.value = emailInput.value.trim();
  });
}

const openSuccessModal = () => {
  if (!successModal) return;
  successModal.classList.add("is-visible");
  successModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeSuccessModal = () => {
  if (!successModal) return;
  successModal.classList.remove("is-visible");
  successModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeSuccessModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSuccessModal();
  }
});

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        openSuccessModal();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });
}