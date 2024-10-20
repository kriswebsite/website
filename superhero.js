// script.js

document.addEventListener('DOMContentLoaded', () => {
    const superheroImg = document.getElementById('superhero-img');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (!superheroImg) {
        console.error('Element with id "superhero-img" not found.');
        return;
    }

    // Function to change image to hireme.png
    const changeToHireMe = () => {
        if (superheroImg.getAttribute('src') === 'hireme.png') return; // Prevent unnecessary changes
        superheroImg.setAttribute('src', 'hireme.png');
        superheroImg.classList.remove('superhero1-size', 'superhero2-size');
        superheroImg.classList.add('hireme-size');
        console.log('Changed hero image to hireme.png');
    };

    // Function to change image to superhero2.png
    const changeToSuperhero2 = () => {
        if (superheroImg.getAttribute('src') === 'superhero2.png') return; // Prevent unnecessary changes
        superheroImg.setAttribute('src', 'superhero2.png');
        superheroImg.classList.remove('superhero1-size', 'hireme-size');
        superheroImg.classList.add('superhero2-size');
        console.log('Changed hero image to superhero2.png');
    };

    // Function to change image back to superhero1.png
    const changeToSuperhero1 = () => {
        if (superheroImg.getAttribute('src') === 'superhero1.png') return; // Prevent unnecessary changes
        superheroImg.setAttribute('src', 'superhero1.png');
        superheroImg.classList.remove('hireme-size', 'superhero2-size');
        superheroImg.classList.add('superhero1-size');
        console.log('Reverted hero image to superhero1.png');
    };

    // Initialize with superhero1-size class
    superheroImg.classList.add('superhero1-size');

    // Hover Event Listeners
    superheroImg.addEventListener('mouseenter', () => {
        if (window.pageYOffset === 0) { // Only change on hover if at top
            changeToHireMe();
        }
    });

    superheroImg.addEventListener('mouseleave', () => {
        if (window.pageYOffset === 0) { // Only revert if at top
            changeToSuperhero1();
        }
    });

    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            changeToSuperhero2();
        } else {
            changeToSuperhero1();
        }

        // Scroll to Top Button Visibility
        if (window.pageYOffset > 300) { // Show button after scrolling down 300px
            scrollToTopBtn.style.display = 'block';
            // Use a slight delay to trigger CSS transition
            setTimeout(() => {
                scrollToTopBtn.style.opacity = '1'; // Ensure it's fully visible
            }, 10);
        } else {
            scrollToTopBtn.style.opacity = '0'; // Fade out
            // After transition duration, hide the button
            setTimeout(() => {
                scrollToTopBtn.style.display = 'none';
            }, 300); // Match the CSS transition duration
        }
    });

    // Scroll to Top Functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Initial Check for Scroll Position (in case user reloads while scrolled)
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '1';
    }
});
