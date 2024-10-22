document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const text = "IERI creates spaces that inspire, innovate, and endure. Led by visionary architect Gocha Mindilaia.";
    const typedTextElement = document.getElementById('typed-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typedTextElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Adjust typing speed here (milliseconds)
        }
    }

    // Start the typewriter effect
    typeWriter();

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Prevent automatic scrolling on page load
    if (window.location.hash) {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1);
    }

    // Project card hover effect has been removed as it's now handled by CSS

    // Header transparency on scroll
    const header = document.querySelector('.header');
    const scrollThreshold = 100; // Adjust this value to change when the header becomes transparent

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('header-transparent');
        } else {
            header.classList.remove('header-transparent');
        }
    });

    // Language switching
    const languageSwitch = document.getElementById('language-switch');
    let currentLanguage = 'en';

    languageSwitch.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'ka' : 'en';
        updateLanguage();
    });

    function updateLanguage() {
        document.querySelectorAll('[data-en]').forEach(element => {
            element.textContent = element.getAttribute(`data-${currentLanguage}`);
        });
        
        document.querySelectorAll('[data-en-placeholder]').forEach(element => {
            element.placeholder = element.getAttribute(`data-${currentLanguage}-placeholder`);
        });

        languageSwitch.textContent = currentLanguage === 'en' ? 'GE' : 'EN';
    }
});
