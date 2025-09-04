// testimonial.js

// Testimonial data (video, text, name, role, pic)
const testimonials = [
    {
        video: "./videos/testimonial1.mp4",
        quote: "Honestly, they are the best in the game, and I love them.",
        name: "Chris Bardon",
        role: "Real Estate Agent",
        pic: "./image/profile1.jpg"
    },
    {
        video: "./videos/testimonial2.mp4",
        quote: "They transformed my raw footage into something incredible. Fast and reliable!",
        name: "Samantha Lee",
        role: "Property Manager",
        pic: "./image/1.png"
    },
    {
        video: "./videos/testimonial3.mp4",
        quote: "The edits helped me close deals quicker. Amazing team!",
        name: "David Kim",
        role: "Broker",
        pic: "./image/profile3.jpg"
    }
];

let currentIndex = 0;

const videoEl = document.getElementById("testimonialVideo");
const quoteEl = document.querySelector(".testimonial-quote");
const nameEl = document.querySelector(".testimonial-author .name");
const roleEl = document.querySelector(".testimonial-author .role");
const authorDot = document.querySelector(".testimonial-author .author-dot");

// Update testimonial content
function updateTestimonial(index) {
    const t = testimonials[index];

    // Update video
    videoEl.pause();
    videoEl.querySelector("source").src = t.video;
    videoEl.load();

    // Update text
    quoteEl.textContent = `“${t.quote}”`;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;

    // Update profile pic inside the dot
    authorDot.style.backgroundImage = `url(${t.pic})`;
    authorDot.style.backgroundSize = "cover";
    authorDot.style.backgroundPosition = "center";
}

// Next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
}

// Initialize first testimonial
updateTestimonial(currentIndex);
