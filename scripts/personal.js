const yearSpan = document.getElementById('currentyear');
const now = new Date();
yearSpan.textContent = now.getFullYear();

// Fade-in project cards on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.transition = '0.6s ease';
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
