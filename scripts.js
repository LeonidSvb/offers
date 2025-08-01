// Premium Offer System JavaScript
class OfferSystem {
    constructor() {
        this.isLoaded = false;
        this.animations = [];
        this.observers = [];
        this.init();
    }

    init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    start() {
        this.showLoader();
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupCounters();
        this.setupParallax();
        this.setupProgressBars();
        this.setupSmoothScroll();
        this.setupFormValidation();
        this.hideLoader();
        this.isLoaded = true;
    }

    // =================== LOADING SYSTEM ===================
    showLoader() {
        if (document.querySelector('.loading-overlay')) return;
        
        const loader = document.createElement('div');
        loader.className = 'loading-overlay';
        loader.innerHTML = `
            <div class="loader"></div>
            <div class="loading-text">Загружаем ваш премиум оффер...</div>
        `;
        document.body.appendChild(loader);
    }

    hideLoader() {
        setTimeout(() => {
            const loader = document.querySelector('.loading-overlay');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.remove();
                    this.startMainAnimations();
                }, 500);
            } else {
                this.startMainAnimations();
            }
        }, 1200);
    }

    // =================== SCROLL ANIMATIONS ===================
    setupScrollAnimations() {
        // Create intersection observer for scroll animations
        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animatable elements
        this.observeScrollElements();
    }

    observeScrollElements() {
        const elements = document.querySelectorAll(`
            .card, 
            .flow-step, 
            .roi-card, 
            .section-title,
            .hero-title,
            .hero-subtitle,
            .time-saved,
            .cta-button
        `);

        elements.forEach((el, index) => {
            // Set initial state
            el.style.opacity = '0';
            el.style.transform = this.getInitialTransform(el);
            el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
            
            // Add to observer
            this.scrollObserver.observe(el);
        });
    }

    getInitialTransform(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (element.classList.contains('hero-title') || element.classList.contains('section-title')) {
            return 'translateY(-40px) scale(0.95)';
        }
        if (element.classList.contains('hero-subtitle')) {
            return 'translateY(40px)';
        }
        if (element.classList.contains('card')) {
            return rect.left < window.innerWidth / 2 ? 'translateX(-50px) translateY(30px)' : 'translateX(50px) translateY(30px)';
        }
        if (element.classList.contains('flow-step')) {
            return 'translateY(50px) scale(0.9)';
        }
        if (element.classList.contains('roi-card')) {
            return 'translateY(60px) scale(0.9)';
        }
        return 'translateY(40px)';
    }

    animateElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) translateX(0) scale(1)';
        
        // Add special effects
        if (element.classList.contains('card')) {
            setTimeout(() => {
                element.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
            }, 400);
        }

        // Add floating animation after initial animation
        if (element.classList.contains('card') || element.classList.contains('time-saved')) {
            setTimeout(() => {
                element.style.animation = `float 6s ease-in-out infinite ${Math.random() * 2}s`;
            }, 800);
        }
    }

    startMainAnimations() {
        // Animate hero section with stagger
        this.animateHeroSection();
        
        // Add typing effect to titles
        this.setupTypingEffect();
        
        // Setup magnetic effects
        this.setupMagneticEffects();
    }

    animateHeroSection() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const timeSaved = document.querySelector('.time-saved');

        if (heroTitle) {
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0) scale(1)';
            }, 300);
        }

        if (heroSubtitle) {
            setTimeout(() => {
                heroSubtitle.style.opacity = '1';
                heroSubtitle.style.transform = 'translateY(0)';
            }, 600);
        }

        if (timeSaved) {
            setTimeout(() => {
                timeSaved.style.opacity = '1';
                timeSaved.style.transform = 'translateY(0)';
                timeSaved.style.animation = 'pulse 3s infinite';
            }, 900);
        }
    }

    // =================== INTERACTIVE EFFECTS ===================
    setupHoverEffects() {
        // Enhanced card hover effects
        document.querySelectorAll('.card').forEach(card => {
            let timeout;
            
            card.addEventListener('mouseenter', (e) => {
                clearTimeout(timeout);
                this.createRippleEffect(e);
                card.style.transform = 'translateY(-12px) scale(1.03)';
                card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
                card.style.zIndex = '10';
            });

            card.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                    card.style.zIndex = '1';
                }, 100);
            });
        });

        // Enhanced button effects
        document.querySelectorAll('.cta-button, .time-saved').forEach(button => {
            button.addEventListener('mouseenter', (e) => {
                button.style.transform = 'translateY(-5px) scale(1.05)';
                this.createGlowEffect(button);
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
                this.removeGlowEffect(button);
            });

            // Add click effect
            button.addEventListener('mousedown', () => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });

            button.addEventListener('mouseup', () => {
                button.style.transform = 'translateY(-5px) scale(1.05)';
            });
        });
    }

    createRippleEffect(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple 0.8s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 1000;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 800);
    }

    createGlowEffect(element) {
        element.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.5), 0 20px 40px rgba(0,0,0,0.3)';
    }

    removeGlowEffect(element) {
        element.style.boxShadow = '';
    }

    // =================== MAGNETIC EFFECTS ===================
    setupMagneticEffects() {
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = Math.max(rect.width, rect.height);
                
                if (distance < maxDistance) {
                    const strength = (maxDistance - distance) / maxDistance;
                    const moveX = (x / rect.width) * 20 * strength;
                    const moveY = (y / rect.height) * 20 * strength;
                    
                    button.style.transform = `translateY(-5px) scale(1.05) translate(${moveX}px, ${moveY}px)`;
                }
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1) translate(0px, 0px)';
            });
        });
    }

    // =================== COUNTERS ===================
    setupCounters() {
        const counters = document.querySelectorAll('.roi-metric');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent) || 0;
            if (target > 0) {
                counter.textContent = '0';
                
                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        this.animateCounter(counter, 0, target, 2000);
                        observer.disconnect();
                    }
                });
                
                observer.observe(counter);
            }
        });
    }

    animateCounter(element, start, end, duration) {
        let current = start;
        const increment = (end - start) / (duration / 16);
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                element.textContent = end + (element.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }

    // =================== PARALLAX EFFECTS ===================
    setupParallax() {
        window.addEventListener('scroll', this.throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax for header background
            const header = document.querySelector('.header');
            if (header) {
                header.style.transform = `translateY(${rate * 0.3}px)`;
            }
            
            // Parallax for floating elements
            document.querySelectorAll('.card').forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const offset = (window.innerHeight - rect.top) * 0.1;
                    card.style.transform += ` translateY(${offset * (index % 2 === 0 ? 1 : -1)}px)`;
                }
            });
        }, 16));
    }

    // =================== PROGRESS BARS ===================
    setupProgressBars() {
        // Add progress bars to step numbers
        document.querySelectorAll('.step-number').forEach((step, index, steps) => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        step.style.background = 'linear-gradient(45deg, var(--primary), var(--accent))';
                        step.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            step.style.transform = 'scale(1)';
                        }, 300);
                    }, index * 200);
                    observer.disconnect();
                }
            });
            observer.observe(step);
        });
    }

    // =================== SMOOTH SCROLL ===================
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // =================== FORM VALIDATION ===================
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                    this.showFormErrors(form);
                }
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }

    showFormErrors(form) {
        const errorInputs = form.querySelectorAll('.error');
        if (errorInputs.length > 0) {
            errorInputs[0].focus();
            errorInputs[0].style.animation = 'shake 0.5s ease-in-out';
        }
    }

    // =================== TYPING EFFECT ===================
    setupTypingEffect() {
        const titles = document.querySelectorAll('[data-typing]');
        titles.forEach(title => {
            const text = title.textContent;
            const speed = parseInt(title.dataset.typing) || 50;
            title.textContent = '';
            title.style.borderRight = '2px solid currentColor';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                title.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        title.style.borderRight = 'none';
                    }, 1000);
                }
            }, speed);
        });
    }

    // =================== UTILITY FUNCTIONS ===================
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // =================== EVENT LISTENERS ===================
    setupEventListeners() {
        // Resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));

        // Scroll handler for navbar
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 16));

        // Focus/blur for better performance
        window.addEventListener('focus', () => {
            this.isLoaded && this.resumeAnimations();
        });

        window.addEventListener('blur', () => {
            this.pauseAnimations();
        });
    }

    handleResize() {
        // Recalculate positions if needed
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
            this.setupScrollAnimations();
        }
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        
        // Add class to body for scroll-based styling
        if (scrolled > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    }

    pauseAnimations() {
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animation) {
                el.style.animationPlayState = 'paused';
            }
        });
    }

    resumeAnimations() {
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animation) {
                el.style.animationPlayState = 'running';
            }
        });
    }

    // =================== PUBLIC API ===================
    destroy() {
        // Cleanup observers
        this.observers.forEach(observer => observer.disconnect());
        this.scrollObserver && this.scrollObserver.disconnect();
        
        // Remove event listeners
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        
        this.isLoaded = false;
    }
}

// =================== CSS ANIMATIONS (добавляем в head) ===================
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.5) !important;
    }
    
    .scrolled .header {
        transform: translateY(-10px);
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// =================== AUTO-INITIALIZE ===================
let offerSystem;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        offerSystem = new OfferSystem();
    });
} else {
    offerSystem = new OfferSystem();
}

// Make it globally accessible for debugging
window.OfferSystem = OfferSystem;
window.offerSystem = offerSystem;quired]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        return isValid;
    }

    showFormErrors(form) {
        const errorInputs = form.querySelectorAll('.error');
        if (errorInputs.length > 0) {
            errorInputs[0].focus();
            errorInputs[0].style.animation = 'shake 0.5s ease-in-out';
        }
    }

    // =================== TYPING EFFECT ===================
    setupTypingEffect() {
        const titles = document.querySelectorAll('[data-typing]');
        titles.forEach(title => {
            const text = title.textContent;
            const speed = parseInt(title.dataset.typing) || 50;
            title.textContent = '';
            title.style.borderRight = '2px solid currentColor';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                title.textContent += text.charAt(i);
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        title.style.borderRight = 'none';
                    }, 1000);
                }
            }, speed);
        });
    }

    // =================== UTILITY FUNCTIONS ===================
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // =================== EVENT LISTENERS ===================
    setupEventListeners() {
        // Resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));

        // Scroll handler for navbar
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 16));

        // Focus/blur for better performance
        window.addEventListener('focus', () => {
            this.isLoaded && this.resumeAnimations();
        });

        window.addEventListener('blur', () => {
            this.pauseAnimations();
        });
    }

    handleResize() {
        // Recalculate positions if needed
        if (this.scrollObserver) {
            this.scrollObserver.disconnect();
            this.setupScrollAnimations();
        }
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        
        // Add class to body for scroll-based styling
        if (scrolled > 100) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
    }

    pauseAnimations() {
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animation) {
                el.style.animationPlayState = 'paused';
            }
        });
    }

    resumeAnimations() {
        document.querySelectorAll('*').forEach(el => {
            if (el.style.animation) {
                el.style.animationPlayState = 'running';
            }
        });
    }

    // =================== PUBLIC API ===================
    destroy() {
        // Cleanup observers
        this.observers.forEach(observer => observer.disconnect());
        this.scrollObserver && this.scrollObserver.disconnect();
        
        // Remove event listeners
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        
        this.isLoaded = false;
    }
}

// =================== CSS ANIMATIONS (добавляем в head) ===================
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .error {
        border-color: #e74c3c !important;
        box-shadow: 0 0 5px rgba(231, 76, 60, 0.5) !important;
    }
    
    .scrolled .header {
        transform: translateY(-10px);
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);

// =================== AUTO-INITIALIZE ===================
let offerSystem;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        offerSystem = new OfferSystem();
    });
} else {
    offerSystem = new OfferSystem();
}

// Make it globally accessible for debugging
window.OfferSystem = OfferSystem;
window.offerSystem = offerSystem;
