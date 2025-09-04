const serviceBlocks = document.querySelectorAll('.service-block');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

serviceBlocks.forEach(block => {
  observer.observe(block);
});

// Service videos data (map each service-block to a video)
const serviceVideos = [
  "/videos/service1.mp4",  // First service video
  "/videos/service2.mp4",  // Second service video
  "/videos/service3.mp4",  // Third service video
  "/videos/service4.mp4"   // Fourth service video
];

// Select all .service-video containers
const videoContainers = document.querySelectorAll(".service-video");

// Inject local video elements dynamically
videoContainers.forEach((container, index) => {
  if (serviceVideos[index]) {
    container.innerHTML = `
      <video 
        src="${serviceVideos[index]}" 
        controls 
        autoplay 
        muted 
        loop 
        class="service-video-player">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    container.innerHTML = `<div class="video-placeholder">[Video Placeholder]</div>`;
  }
});
