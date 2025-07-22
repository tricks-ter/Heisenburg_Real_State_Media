const serviceBlocks = document.querySelectorAll('.service-block');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

serviceBlocks.forEach(block => {
  observer.observe(block);
});
