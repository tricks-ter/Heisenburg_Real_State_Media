
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-in-section').forEach(el => {
  fadeObserver.observe(el);
});


const videos = [
  {
    src: './videos/testimonial1.mp4',
    quote: 'Honestly, they are the best in the game, and I highly recommend',
    name: 'Chris Bardon',
    role: 'real estate agent'
  },
  {
    src: './videos/testimonial2.mp4',
    quote: 'They made our listings go viral with beautiful edits!',
    name: 'Maria Lopez',
    role: 'property manager'
  },
  {
    src: './videos/testimonial3.mp4',
    quote: 'Super fast turnaround and high quality visuals.',
    name: 'Alan Smith',
    role: 'media head'
  }
];

let currentIndex = 0;
const videoEl = document.getElementById('testimonialVideo');
const quoteEl = document.querySelector('.testimonial-quote');
const nameEl = document.querySelector('.name');
const roleEl = document.querySelector('.role');

function updateTestimonial(index) {
  const data = videos[index];
  videoEl.src = data.src;
  quoteEl.textContent = `“${data.quote}”`;
  nameEl.textContent = data.name;
  roleEl.textContent = data.role;
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % videos.length;
  updateTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  updateTestimonial(currentIndex);
}

// preload and initialize
document.addEventListener('DOMContentLoaded', () => updateTestimonial(0));
