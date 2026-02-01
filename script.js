// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initHeroAnimations();
    initFunnelAnimation();
    initModal();
    initAnimations();
});

// --- AOS Alternative (Fade Up) ---
function initAnimations() {
    const fadeElements = document.querySelectorAll('[data-aos="fade-up"]');

    fadeElements.forEach(el => {
        gsap.fromTo(el,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                }
            }
        );
    });

    // Soluções/Resultados specific
    const leftElements = document.querySelectorAll('[data-aos="fade-right"]');
    leftElements.forEach(el => {
        gsap.fromTo(el, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%" } });
    });

    const rightElements = document.querySelectorAll('[data-aos="fade-left"]');
    rightElements.forEach(el => {
        gsap.fromTo(el, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: el, start: "top 80%" } });
    });
}

// --- Header Logic ---
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add solid class when scrolled
        if (currentScroll > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        // Hide/Show logic
        if (currentScroll > lastScroll && currentScroll > 200) {
            // Scroll Down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll Up
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

// --- Hero Animations ---
function initHeroAnimations() {
    // 1. Rotating Text (Keywords)
    const keywords = [
        "Leads Qualificados",
        "ROI Positivo",
        "Previsibilidade",
        "Demanda Crescente",
        "Base Consciente"
    ];

    const textElement = document.querySelector('.rotating-text');

    if (textElement) {
        // Initial fade/slide sequence
        const tl = gsap.timeline({ repeat: -1 });

        keywords.forEach((word) => {
            tl.to(textElement, {
                duration: 0.5,
                opacity: 0,
                y: -20,
                onComplete: () => {
                    textElement.textContent = word;
                    textElement.style.transform = 'translateY(20px)'; // Prepare for entry
                }
            })
                .to(textElement, {
                    duration: 0.5,
                    opacity: 1,
                    y: 0,
                    ease: "power2.out"
                })
                .to({}, { duration: 2.0 }); // Wait
        });
    }

    // 2. Mouse Parallax for Visual
    const heroVisual = document.querySelector('.hero-visual');
    const cards = document.querySelectorAll('.floating-card');
    const img = document.querySelector('.hero-img');

    if (heroVisual) {
        heroVisual.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            gsap.to(img, {
                duration: 1,
                x: x * -1,
                y: y * -1,
                ease: "power2.out"
            });

            cards.forEach((card, index) => {
                const depth = (index + 1) * 1.5;
                gsap.to(card, {
                    duration: 1.5,
                    x: x * depth,
                    y: y * depth,
                    ease: "power2.out"
                });
            });
        });

        // Reset on mouse leave
        heroVisual.addEventListener('mouseleave', () => {
            gsap.to([img, ...cards], {
                duration: 1,
                x: 0,
                y: 0,
                ease: "power2.out"
            });
        });
    }
}

// --- Funnel Animation ---
function initFunnelAnimation() {
    const container = document.querySelector('.particles-container');
    if (!container) return;

    // Create particles
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        container.appendChild(p);
    }

    const particles = document.querySelectorAll('.particle');

    // Animate them falling through the "funnel"
    particles.forEach((p, i) => {
        // Random horizontal offset for start
        const startX = (Math.random() - 0.5) * 100;

        gsap.timeline({
            repeat: -1,
            delay: i * 0.2,
            defaults: { ease: "none" }
        })
            .set(p, { x: startX, y: -20, opacity: 0, backgroundColor: 'white' })
            .to(p, {
                duration: 0.5,
                opacity: 1,
                y: 0
            })
            .to(p, {
                duration: 1.5,
                y: 200, // Middle
                x: 0, // Converge to center
                backgroundColor: '#0bae6e', // Turn green
                ease: "power1.in"
            })
            .to(p, {
                duration: 1.5,
                y: 400, // Bottom
                opacity: 0,
                scale: 0.5
            });
    });
}

// --- Modal Logic ---
function initModal() {
    const modal = document.getElementById('modal-contato');
    const openBtns = document.querySelectorAll('[href="#contato"]');
    const closeBtn = document.querySelector('.modal-close');

    if (!modal) return;

    const openModal = (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Handle Form Submit (Optional: Add AJAX here if needed, but Netlify handles standard POST)
    // We can add a simple loading state if desired.
}
