// Navigation Module - Menu e smooth scroll

export class Navigation {
  constructor(navElement) {
    this.nav = navElement;
    this.toggle = navElement?.querySelector('.hero__nav-toggle');
    this.menu = navElement?.querySelector('.hero__nav-menu');
    this.links = navElement?.querySelectorAll('.hero__nav-link');
    this.isOpen = false;
    this.scrollOffset = 100;
  }
  
  init() {
    if (!this.nav) return;
    
    this.bindEvents();
    window.addEventListener('scroll', () => this.updateActiveLink());
  }
  
  bindEvents() {
    // Toggle menu (mobile)
    this.toggle?.addEventListener('click', () => this.toggleMenu());
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.nav.contains(e.target)) {
        this.closeMenu();
      }
    });
    
    // Smooth scroll to sections
    this.links?.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const targetPosition = targetSection.offsetTop;
          
          // Use native smooth scroll if supported
          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          } else {
            // Fallback for browsers without smooth scroll support
            this.smoothScrollTo(targetPosition, 500);
          }
          
          // Close mobile menu after click
          if (window.innerWidth < 1024) {
            this.closeMenu();
          }
          
          // Update active link
          this.setActiveLink(link);
        }
      });
    });
  }
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menu?.classList.toggle('hero__nav-menu--open', this.isOpen);
    this.toggle?.classList.toggle('hero__nav-toggle--active', this.isOpen);
    this.toggle?.setAttribute('aria-expanded', this.isOpen.toString());
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
  
  closeMenu() {
    this.isOpen = false;
    this.menu?.classList.remove('hero__nav-menu--open');
    this.toggle?.classList.remove('hero__nav-toggle--active');
    this.toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  
  handleScroll() {
    // Update active link based on scroll position
    this.updateActiveLink();
  }
  
  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + this.scrollOffset;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.links?.forEach(link => {
          link.classList.remove('hero__nav-link--active');
          const linkHref = link.getAttribute('href');
          if (linkHref === `#${sectionId}`) {
            link.classList.add('hero__nav-link--active');
          }
        });
      }
    });
    
    // Special case: if at top of page, make first link active
    if (window.scrollY < 100) {
      this.links?.forEach(link => {
        link.classList.remove('hero__nav-link--active');
      });
      if (this.links?.[0]) {
        this.links[0].classList.add('hero__nav-link--active');
      }
    }
  }
  
  setActiveLink(activeLink) {
    this.links?.forEach(link => {
      link.classList.remove('hero__nav-link--active');
    });
    activeLink.classList.add('hero__nav-link--active');
  }
  
  // Fallback smooth scroll for older browsers
  smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    const startTime = performance.now();
    
    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };
    
    const animation = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      
      window.scrollTo(0, start + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  }
}
