const projectData = {
    vertical: [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ],
    horizontal: [
        "https://www.w3schools.com/html/movie.mp4",
        "https://www.w3schools.com/html/movie.mp4",
        "https://www.w3schools.com/html/movie.mp4",
        "https://www.w3schools.com/html/movie.mp4"
    ],
    agent: [
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4",
        "https://www.w3schools.com/html/mov_bbb.mp4"
    ]
};

// Helper function to detect mobile / tablet
function isMobile() {
    return window.innerWidth <= 768;
}

function switchTab(tab) {
    const container = document.getElementById("featured-content");
    container.className = "featured-content"; // reset
    container.innerHTML = "";

    // Switch button styles
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    const clicked = Array.from(document.querySelectorAll(".tab-btn"))
        .find(btn => btn.textContent.toLowerCase().includes(tab));
    if (clicked) clicked.classList.add("active");

    const videos = projectData[tab] || [];
    const mobile = isMobile();

    // === Layouts based on tab type and screen size ===
    if ((tab === "vertical" || tab === "agent") && !mobile) {
        // Desktop - TikTok style vertical frames side by side
        container.classList.add("default-layout");
        videos.forEach(src => {
            const wrapper = document.createElement("div");
            wrapper.className = "video-wrapper";
            const video = document.createElement("video");
            video.src = src;
            video.controls = true;
            wrapper.appendChild(video);
            container.appendChild(wrapper);
        });
    } else if (tab === "horizontal" && !mobile) {
        // Desktop horizontal - dual columns
        container.classList.add("dual-column-layout");

        const leftCol = document.createElement("div");
        const rightCol = document.createElement("div");
        leftCol.className = "dual-column";
        rightCol.className = "dual-column";

        videos.forEach((src, index) => {
            const wrapper = document.createElement("div");
            wrapper.className = "video-wrapper";
            const video = document.createElement("video");
            video.src = src;
            video.controls = true;
            wrapper.appendChild(video);

            if (index % 2 === 0) leftCol.appendChild(wrapper);
            else rightCol.appendChild(wrapper);
        });

        // Ensure both columns look filled
        if (videos.length % 2 !== 0) {
            const placeholder = document.createElement("div");
            placeholder.className = "placeholder";
            rightCol.appendChild(placeholder);
        }

        container.appendChild(leftCol);
        container.appendChild(rightCol);
    } else {
        // Mobile layout - stack all videos vertically
        container.classList.add("default-layout");
        videos.forEach(src => {
            const wrapper = document.createElement("div");
            wrapper.className = "video-wrapper";
            const video = document.createElement("video");
            video.src = src;
            video.controls = true;
            wrapper.appendChild(video);
            container.appendChild(wrapper);
        });
    }

    // If no videos, add placeholders
    if (videos.length === 0) {
        for (let i = 0; i < 3; i++) {
            const placeholder = document.createElement("div");
            placeholder.className = "placeholder";
            container.appendChild(placeholder);
        }
    }
}

// Recalculate layout on window resize
window.addEventListener("resize", () => {
    const activeTabBtn = document.querySelector(".tab-btn.active");
    if (activeTabBtn) {
        const tab = activeTabBtn.textContent.toLowerCase();
        switchTab(tab);
    }
});

window.addEventListener("DOMContentLoaded", () => switchTab("vertical"));