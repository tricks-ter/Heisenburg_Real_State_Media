document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

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
        } else {
            if (isScrolled) {
                navbar.classList.remove("scrolled");
                isScrolled = false;
            }
        }
    }

    window.addEventListener("scroll", () => window.requestAnimationFrame(handleScroll));
    window.addEventListener("resize", handleScroll);
    handleScroll(); // run on load

    // Hamburger toggle with slide animation
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Close menu on link click
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => navLinks.classList.remove("active"));
        });
    }
});