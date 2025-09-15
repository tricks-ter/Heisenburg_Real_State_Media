document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const cta = document.querySelector(".cta"); // CTA button

    const SCROLL_THRESHOLD = 80;
    let isScrolled = false;

    function handleScroll() {
        const currentScrollY = window.scrollY;
        const isDesktop = window.innerWidth > 768;

        if (isDesktop) {
            if (currentScrollY > SCROLL_THRESHOLD && !isScrolled) {
                navbar.classList.add("scrolled");
                isScrolled = true;
            } else if (currentScrollY <= SCROLL_THRESHOLD && isScrolled) {
                navbar.classList.remove("scrolled");
                isScrolled = false;
            }

            if (cta && !navbar.contains(cta)) {
                navbar.appendChild(cta);
            }

            navLinks.style.height = "auto";
        } else {
            if (isScrolled) {
                navbar.classList.remove("scrolled");
                isScrolled = false;
            }

            if (cta && !navLinks.contains(cta)) {
                navLinks.appendChild(cta);
            }

            if (!navLinks.classList.contains("active")) {
                navLinks.style.height = "0px";
            }
        }
    }

    function toggleMenu() {
        if (cta && !navLinks.contains(cta)) {
            navLinks.appendChild(cta);
        }

        if (navLinks.classList.contains("active")) {
            const currentHeight = navLinks.scrollHeight;
            navLinks.style.height = currentHeight + "px"; // set current height first
            requestAnimationFrame(() => {
                navLinks.style.height = "0px"; // animate to 0
            });
            navLinks.classList.remove("active");
        } else {
            navLinks.classList.add("active");
            const totalHeight = Array.from(navLinks.children).reduce((sum, el) => sum + el.offsetHeight, 0);
            requestAnimationFrame(() => {
                navLinks.style.height = totalHeight + "px"; // animate to full height
            });
        }
    }

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", toggleMenu);

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.style.height = "0px";
                navLinks.classList.remove("active");
            });
        });
    }

    window.addEventListener("scroll", () => window.requestAnimationFrame(handleScroll));
    window.addEventListener("resize", handleScroll);
    handleScroll();
});