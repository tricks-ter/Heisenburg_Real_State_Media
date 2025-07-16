// === Video Controls ===
    const playBtn = document.getElementById("playButton");
    const video = document.getElementById("customVideo");

    playBtn.addEventListener("click", () => {
      video.play();
      playBtn.style.display = "none";
    });

    video.addEventListener("pause", () => {
      playBtn.style.display = "flex";
    });

    video.addEventListener("play", () => {
      playBtn.style.display = "none";
    });


