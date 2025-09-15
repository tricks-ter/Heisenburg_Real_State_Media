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

    // Assign layout classes
    if (tab === "vertical") {
        container.classList.add("vertical-layout");
    } else if (tab === "agent") {
        container.classList.add("agent-layout");
    } else if (tab === "horizontal") {
        container.classList.add("horizontal-layout");
    }

    // Create stacked videos
    videos.forEach(src => {
        const wrapper = document.createElement("div");
        wrapper.className = "video-wrapper";
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        wrapper.appendChild(video);
        container.appendChild(wrapper);
    });

    // If empty, placeholders
    if (videos.length === 0) {
        for (let i = 0; i < 2; i++) {
            const placeholder = document.createElement("div");
            placeholder.className = "placeholder";
            container.appendChild(placeholder);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => switchTab("vertical"));