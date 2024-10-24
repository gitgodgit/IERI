document.addEventListener('DOMContentLoaded', function() {
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
    let currentLanguage = 'ka'; // Default to Georgian

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

    // Set initial language
    updateLanguage();
});
