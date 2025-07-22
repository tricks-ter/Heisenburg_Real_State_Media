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
  container.className = "featured-content"; // reset classes
  container.innerHTML = ""; // clear content

  // Switch button styles
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  const clicked = Array.from(document.querySelectorAll(".tab-btn"))
    .find(btn => btn.textContent.toLowerCase().includes(tab));
  if (clicked) clicked.classList.add("active");

  // Get video list
  const videos = projectData[tab] || [];

  // === Special layout for horizontal (two vertical columns)
  if (tab === "horizontal") {
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

      // Alternate left-right
      if (index % 2 === 0) {
        leftCol.appendChild(wrapper);
      } else {
        rightCol.appendChild(wrapper);
      }
    });

    // If odd number of videos, make sure both sides look filled
    if (videos.length % 2 !== 0) {
      const placeholder = document.createElement("div");
      placeholder.className = "placeholder";
      rightCol.appendChild(placeholder);
    }

    container.appendChild(leftCol);
    container.appendChild(rightCol);

  } else {
    container.classList.add("default-layout");

    // Add default vertical layout
    videos.forEach(src => {
      const wrapper = document.createElement("div");
      wrapper.className = "video-wrapper";
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      wrapper.appendChild(video);
      container.appendChild(wrapper);
    });

    // If no videos, add placeholder
    if (videos.length === 0) {
      for (let i = 0; i < 3; i++) {
        const placeholder = document.createElement("div");
        placeholder.className = "placeholder";
        container.appendChild(placeholder);
      }
    }
  }
}

window.addEventListener("DOMContentLoaded", () => switchTab("vertical"));
