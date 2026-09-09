/* ===== SCROLL EFFECTS - JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Fade-in on Scroll (Intersection Observer) ---
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.1
    });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- Floating Particles on Cover ---
    const particlesContainer = document.getElementById('particles');

    if (particlesContainer) {
        createParticles(particlesContainer, 30);
    }

    function createParticles(container, count) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            const isDot = Math.random() > 0.4;

            particle.classList.add('particle');
            particle.classList.add(isDot ? 'particle-dot' : 'particle-ring');

            const size = isDot
                ? Math.random() * 4 + 2
                : Math.random() * 12 + 8;

            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.opacity = Math.random() * 0.3 + 0.1;

            // Float animation
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 10;
            particle.style.animation = `float-particle ${duration}s ${delay}s ease-in-out infinite`;

            container.appendChild(particle);
        }

        // Add keyframes dynamically
        if (!document.getElementById('particle-keyframes')) {
            const style = document.createElement('style');
            style.id = 'particle-keyframes';
            style.textContent = `
                @keyframes float-particle {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                        opacity: 0.2;
                    }
                    25% {
                        transform: translate(${randomRange(-30, 30)}px, ${randomRange(-40, 10)}px) scale(1.1);
                        opacity: 0.4;
                    }
                    50% {
                        transform: translate(${randomRange(-20, 20)}px, ${randomRange(-60, -20)}px) scale(0.9);
                        opacity: 0.3;
                    }
                    75% {
                        transform: translate(${randomRange(-30, 30)}px, ${randomRange(-30, 10)}px) scale(1.05);
                        opacity: 0.35;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    function randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
