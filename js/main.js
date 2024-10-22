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

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            setTimeout(() => {
                this.querySelector('.project-description').style.opacity = '1';
            }, 200);
        });

        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-description').style.opacity = '0';
        });
    });
});

