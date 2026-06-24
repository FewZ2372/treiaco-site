const revealTargets = document.querySelectorAll(
  ".service-card, .spotlight, .metric-grid article, .process-grid article, .about-values article, .contact-card"
);

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});

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
    threshold: 0.18,
  }
);

revealTargets.forEach((element) => {
  observer.observe(element);
});
