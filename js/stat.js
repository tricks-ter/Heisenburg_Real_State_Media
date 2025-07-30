const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.2 });

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting && !el.classList.contains("has-counted")) {
      el.classList.add("has-counted");

      const h2 = el.querySelector("h2");
      const target = parseInt(el.getAttribute("data-target"));
      const suffix = el.getAttribute("data-suffix") || '';
      let current = 0;
      const step = Math.ceil(target / 100);

      const update = () => {
        current += step;
        if (current >= target) {
          h2.textContent = `${target}${suffix}`;
          counterObserver.unobserve(el);
        } else {
          h2.textContent = `${current}${suffix}`;
          requestAnimationFrame(update);
        }
      };
      requestAnimationFrame(update);
    }
  });
}, { threshold: 0.3 });

const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', () => {
  // Observe each animated line in titles
  document.querySelectorAll('.line').forEach(el => scrollObserver.observe(el));

  // Corner image stack animation
  document.querySelectorAll('.fade-corner').forEach(el => scrollObserver.observe(el));

  // Fade-in section observer
  document.querySelectorAll('.fade-in-section').forEach(el => fadeObserver.observe(el));

  // Counter animation
  document.querySelectorAll('.animated-counter').forEach(el => counterObserver.observe(el));

  // Initialize first testimonial if needed
  updateTestimonial?.(0);
});
