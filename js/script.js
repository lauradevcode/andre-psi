/* ============================================
   CONFIGURAÇÃO & CONSTANTES
   ============================================ */
const CONFIG = {
    HEADER_SCROLL_THRESHOLD: 100,
    OBSERVER_THRESHOLD: 0.1,
    OBSERVER_ROOT_MARGIN: '0px 0px -50px 0px',
    ANIMATION_DURATION: 600
};

const SELECTORS = {
    navbarToggler: '#navbarToggler',
    navbarNav: '#navbarNav',
    navLinks: '.nav-link',
    header: '.header',
    anchorLinks: 'a[href^="#"]',
    animatedCards: '.service-card, .article-card, .teste-card'
};


/* ============================================
   MOBILE NAVIGATION
   ============================================ */
class MobileNavigation {
    constructor() {
        this.toggler = document.getElementById('navbarToggler');
        this.nav = document.getElementById('navbarNav');
        this.links = document.querySelectorAll(SELECTORS.navLinks);
        
        if (this.toggler && this.nav) {
            this.init();
        }
    }
    
    init() {
        this.toggler.addEventListener('click', () => this.toggle());
        this.links.forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
    }
    
    toggle() {
        this.nav.classList.toggle('active');
        this.toggler.classList.toggle('active');
    }
    
    close() {
        this.nav.classList.remove('active');
        this.toggler.classList.remove('active');
    }
    
    handleOutsideClick(event) {
        if (!this.toggler.contains(event.target) && !this.nav.contains(event.target)) {
            this.close();
        }
    }
}


/* ============================================
   SMOOTH SCROLL
   ============================================ */
class SmoothScroll {
    constructor() {
        this.header = document.querySelector(SELECTORS.header);
        this.init();
    }
    
    init() {
        document.querySelectorAll(SELECTORS.anchorLinks).forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e));
        });
    }
    
    handleClick(e) {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute('href'));
        
        if (target) {
            const headerHeight = this.header?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}


/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector(SELECTORS.header);
        if (this.header) {
            this.init();
        }
    }
    
    init() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            this.header.style.boxShadow = currentScroll > CONFIG.HEADER_SCROLL_THRESHOLD
                ? '0 2px 10px rgba(0,0,0,0.1)'
                : 'none';
            
            lastScroll = currentScroll;
        });
    }
}


/* ============================================
   INTERSECTION OBSERVER (ANIMAÇÕES)
   ============================================ */
class CardAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        const options = {
            threshold: CONFIG.OBSERVER_THRESHOLD,
            rootMargin: CONFIG.OBSERVER_ROOT_MARGIN
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCard(entry.target);
                }
            });
        }, options);
        
        document.querySelectorAll(SELECTORS.animatedCards).forEach(card => {
            this.prepareCard(card);
            observer.observe(card);
        });
    }
    
    prepareCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity ${CONFIG.ANIMATION_DURATION}ms ease, transform ${CONFIG.ANIMATION_DURATION}ms ease`;
    }
    
    animateCard(card) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }
}


/* ============================================
   INICIALIZAÇÃO
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    new MobileNavigation();
    new SmoothScroll();
    new HeaderScrollEffect();
    new CardAnimations();
    
    console.log('✓ Site carregado com sucesso');
});