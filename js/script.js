// Modern JavaScript for Eren's Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.skill-row, .profile, .contact-me');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for clouds
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const clouds = document.querySelectorAll('.top-cloud, .bottom-cloud');
        
        clouds.forEach((cloud, index) => {
            const speed = 0.5 + (index * 0.2);
            cloud.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Dynamic typing effect for the subtitle
    const subtitle = document.querySelector('.expa');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid #301ce0';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    subtitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Add hover effects to skill images
    const skillImages = document.querySelectorAll('.Vader-Image, .Yoda-Image');
    skillImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) saturate(1)';
        });
    });

    // Contact button click tracking (for analytics)
    const contactBtn = document.querySelector('.btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('Contact button clicked');
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add a simple theme toggle (optional feature)
    const createThemeToggle = () => {
        const toggle = document.createElement('button');
        toggle.innerHTML = '🌙';
        toggle.className = 'theme-toggle';
        toggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        `;
        
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            this.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
        });
        
        document.body.appendChild(toggle);
    };

    // Uncomment the line below to enable theme toggle
    // createThemeToggle();
});

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization: Debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based functionality can go here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
