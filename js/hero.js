window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero_title');
    if (title) {
        setTimeout(() => {
            title.classList.add('animate-in');
        }, 200);
    }
});