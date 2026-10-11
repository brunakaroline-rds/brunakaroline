// Main.js - Entry point e orquestrador da aplicação

// Keep the ?v= in sync with index.html so browsers never mix old and new files
import { Navigation } from './navigation.js?v=20261011';
import { GalleryModal } from './modal.js?v=20261011';
import { LazyLoader } from './lazy-load.js?v=20261011';
import { Carousel } from './carousel.js?v=20261011';
import { ExperienceDetails } from './experience.js?v=20261011';
import { DocumentViewer } from './document-viewer.js?v=20261011';

class App {
  constructor() {
    this.navigation = null;
    this.galleryModal = null;
    this.documentViewer = null;
    this.lazyLoader = null;
    this.educationCarousel = null;
    this.experienceDetails = null;
  }
  
  init() {
    console.log('🎨 Portfólio Bruna Karoline - Inicializando...');
    
    // Initialize navigation
    const navElement = document.querySelector('.hero__nav');
    if (navElement) {
      this.navigation = new Navigation(navElement);
      this.navigation.init();
      console.log('✅ Navigation initialized');
    }
    
    // Initialize gallery modal
    this.galleryModal = new GalleryModal();
    this.galleryModal.init();
    console.log('✅ Gallery modal initialized');

    // Initialize PDF viewer (links marked with data-document)
    this.documentViewer = new DocumentViewer();
    this.documentViewer.init();
    console.log('✅ Document viewer initialized');
    
    // Initialize lazy loading
    this.lazyLoader = new LazyLoader('.lazy-load');
    this.lazyLoader.observe();
    console.log('✅ Lazy loading initialized');

    // Initialize education carousel
    const carouselElement = document.getElementById('educationCarousel');
    if (carouselElement) {
      this.educationCarousel = new Carousel(carouselElement);
      this.educationCarousel.init();
      console.log('✅ Education carousel initialized');
    }

    // Initialize expandable experience details
    const experienceElement = document.getElementById('experienceGrid');
    if (experienceElement) {
      this.experienceDetails = new ExperienceDetails(experienceElement);
      this.experienceDetails.init();
      console.log('✅ Experience details initialized');
    }

    // Expand/collapse the full "about" text
    this.initAboutToggle();

    // Expand/collapse the gallery beyond its first row
    this.initGalleryToggle();

    // Update current year in footer
    this.updateCurrentYear();
    
    // Add scroll reveal animations
    this.initScrollReveal();
    
    console.log('✨ Aplicação inicializada com sucesso!');
  }
  
  initAboutToggle() {
    const toggle = document.querySelector('.about__toggle');
    const more = document.getElementById('aboutMore');
    if (!toggle || !more) return;

    const label = toggle.querySelector('.about__toggle-label');

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

      more.hidden = isExpanded;
      toggle.setAttribute('aria-expanded', (!isExpanded).toString());
      if (label) {
        label.textContent = isExpanded ? 'Mais Sobre Mim' : 'Mostrar Menos';
      }
    });
  }

  initGalleryToggle() {
    const toggle = document.querySelector('.gallery__more');
    const grid = document.getElementById('galleryGrid');
    if (!toggle || !grid) return;

    const label = toggle.querySelector('.gallery__more-label');

    toggle.addEventListener('click', () => {
      const isExpanded = grid.classList.toggle('gallery__grid--expanded');

      toggle.setAttribute('aria-expanded', isExpanded.toString());
      if (label) {
        label.textContent = isExpanded ? 'Ver Menos' : 'Ver Mais Trabalhos';
      }
    });
  }

  updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }
  
  initScrollReveal() {
    // Add fade-in animation to sections when they come into view
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section--visible');
        }
      });
    };
    
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      
      // Observe all sections except hero (already visible)
      const sections = document.querySelectorAll('.section:not(.hero)');
      sections.forEach(section => {
        section.classList.add('section--hidden');
        observer.observe(section);
      });
    }
  }
  
  // Cleanup method (if needed)
  destroy() {
    this.lazyLoader?.disconnect();
    console.log('🧹 App cleanup completed');
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
  });
} else {
  // DOM is already ready
  const app = new App();
  app.init();
}

// Export for potential external use
export default App;
