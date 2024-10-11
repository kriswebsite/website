// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Navigation Toggle for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
        if(navMenu.classList.contains('active')){
            navMenu.classList.remove('active');
        }
    });
});

// Scroll Effects
const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Change Navbar on Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Show Scroll to Top Button
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if(window.scrollY > 300){
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }

    // Update Active Navigation Link
    updateActiveNavLink();
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollToTopBtn');

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact Form Submission (Optional: You can integrate with backend)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you can add form validation and submission logic
    alert('Thank you for your message!');
    contactForm.reset();
});

// Active Navigation Link Highlight
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight;
        if(window.scrollY >= sectionTop - 50){
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === currentSection){
            link.classList.add('active');
        }
    });
}

// Initialize Active Navigation on Load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);
