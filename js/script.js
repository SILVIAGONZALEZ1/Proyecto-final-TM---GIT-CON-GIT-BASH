const filterButtons = document.querySelectorAll(".filter-btn");
const skillItems = document.querySelectorAll(".skill-item");
const accordionButtons = document.querySelectorAll(".accordion-btn");
const revealCards = document.querySelectorAll(".reveal-card");
const cvButtons = document.querySelectorAll(".cv-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    skillItems.forEach((skill) => {
      const isVisible =
        selectedCategory === "all" || skill.dataset.category === selectedCategory;

      skill.classList.toggle("hidden-skill", !isVisible);
    });
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    if (!content) {
      return;
    }

    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    content.classList.toggle("closed", isOpen);
  });
});

const showCardOnScroll = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(showCardOnScroll, {
    threshold: 0.2,
  });

  revealCards.forEach((card) => observer.observe(card));
} else {
  revealCards.forEach((card) => card.classList.add("visible"));
}

cvButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".profile-card");

    if (!card) {
      return;
    }

    const person = card.dataset.person;

    alert(`Descarga simulada del CV de ${person}.`);
  });
});
