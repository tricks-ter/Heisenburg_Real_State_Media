// === Floating Starfield Animation ===
    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");

    let stars = [];
    const STAR_COUNT = 200;
    const STAR_SPEED = 0.3;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.3 + 0.3,
          dx: (Math.random() - 0.5) * STAR_SPEED,
          dy: (Math.random() - 0.5) * STAR_SPEED,
          alpha: Math.random() * 0.6 + 0.4
        });
      }
    }

    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let star of stars) {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

        ctx.beginPath();
        ctx.globalAlpha = star.alpha;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(animateStars);
    }

    window.addEventListener("resize", () => {
      resizeCanvas();
      createStars();
    });

    resizeCanvas();
    createStars();
    animateStars();