const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const slides = [...document.querySelectorAll('.screenshot-item')];
const dots = [...document.querySelectorAll('.dot')];
let activeSlide = 0;
let carouselTimer;

function updateNavbar() {
    if (!navbar) return;
    navbar.classList.toggle('is-scrolled', window.scrollY > 16);
}

function closeMenu() {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
}

function showSlide(index) {
    if (!slides.length) return;
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('is-active', slideIndex === activeSlide);
    });

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === activeSlide);
    });
}

function startCarousel() {
    if (slides.length < 2) return;
    window.clearInterval(carouselTimer);
    carouselTimer = window.setInterval(() => showSlide(activeSlide + 1), 5200);
}

updateNavbar();
window.addEventListener('scroll', updateNavbar, { passive: true });

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.addEventListener('click', (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            closeMenu();
        }
    });
}

document.querySelectorAll('[data-direction]').forEach((button) => {
    button.addEventListener('click', () => {
        const direction = button.getAttribute('data-direction');
        showSlide(activeSlide + (direction === 'next' ? 1 : -1));
        startCarousel();
    });
});

dots.forEach((dot) => {
    dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.slide || 0));
        startCarousel();
    });
});

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px'
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
}

showSlide(0);
startCarousel();
