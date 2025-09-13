// === Hero Title Fade In ===
window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero_title');
    setTimeout(() => {
        title.classList.add('animate-in');
    }, 200);
});