// ===== Intersection Observers =====

// Fade-in observer for lines and sections
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
}, { threshold: 0.2 });

// Counter animation observer
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("has-counted")) {
            el.classList.add("has-counted");
            const h2 = el.querySelector("h2");
            const target = parseInt(el.getAttribute("data-target"));
            const suffix = el.getAttribute("data-suffix") || '';
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 100));
            const update = () => {
                current += step;
                if (current >= target) h2.textContent = `${target}${suffix}`;
                else {
                    h2.textContent = `${current}${suffix}`;
                    requestAnimationFrame(update);
                }
            };
            requestAnimationFrame(update);
        }
    });
}, { threshold: 0.3 });

// ===== Corner Images Animation =====
function animateCornerImages() {
    const width = window.innerWidth;
    const corners = document.querySelectorAll('.fade-corner');

    corners.forEach(container => {
        const leftL1 = container.querySelector('.l1');
        const leftL2 = container.querySelector('.l2');
        const rightR1 = container.querySelector('.r1');
        const rightR2 = container.querySelector('.r2');

        if (width > 768) {
            // Animate images like desktop
            container.classList.add('in-view');
        } else {
            // Disable animations for smaller screens
            container.classList.remove('in-view');
        }
    });
}

// ===== Resize Images Proportionally =====
function resizeCornerImages() {
    const width = window.innerWidth;
    const scale = width < 480 ? 0.55 : width < 768 ? 0.7 : 1;

    document.querySelectorAll('.corner-img-container').forEach(container => {
        container.style.width = `${180 * scale}px`;
        container.style.height = `${150 * scale}px`;
        container.querySelectorAll('img').forEach(img => {
            img.style.width = '100%';
            img.style.height = 'auto';
        });
    });
}

// ===== DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', () => {
    // Observe animated lines
    document.querySelectorAll('.line').forEach(el => fadeObserver.observe(el));

    // Observe counters
    document.querySelectorAll('.animated-counter').forEach(el => counterObserver.observe(el));

    // Fade-in sections (testimonial rows)
    document.querySelectorAll('.fade-in-section').forEach(el => fadeObserver.observe(el));

    // Initial corner images setup
    animateCornerImages();
    resizeCornerImages();
});

// ===== Window Resize =====
window.addEventListener('resize', () => {
    animateCornerImages();
    resizeCornerImages();
});