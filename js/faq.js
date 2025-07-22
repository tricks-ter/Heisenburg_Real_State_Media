document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    parent.classList.toggle('active');

    // Close others if needed
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== parent) item.classList.remove('active');
    });
  });
});
