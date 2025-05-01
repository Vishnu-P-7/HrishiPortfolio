// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking a link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.9)';
    } else {
        navbar.style.background = 'transparent';
    }
});

// Reveal animations on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add reveal class and animation to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal-section');
    observer.observe(section);
});

// Add animation classes
const style = document.createElement('style');
style.textContent = `
    .reveal-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .reveal-section.reveal {
        opacity: 1;
        transform: translateY(0);
    }

    .project-card, .certificate-card, .contact-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .reveal .project-card, .reveal .certificate-card, .reveal .contact-card {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 
