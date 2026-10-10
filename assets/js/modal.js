// Modal Module - Gallery modal functionality

export class GalleryModal {
  constructor() {
    this.modal = document.getElementById('galleryModal');
    this.modalImage = document.getElementById('modalImage');
    this.modalCaption = document.getElementById('modalCaption');
    this.closeBtn = this.modal?.querySelector('.modal__close');
    // Gallery paintings plus any other photo opted in with data-lightbox
    this.galleryImages = document.querySelectorAll('.gallery__image, [data-lightbox]');
    this.currentImageIndex = 0;
    this.imagesList = [];
  }
  
  init() {
    if (!this.modal || !this.modalImage) return;
    
    this.bindEvents();
    this.createImagesList();
  }
  
  createImagesList() {
    // Create array of images for navigation
    this.galleryImages.forEach((img, index) => {
      this.imagesList.push({
        src: img.dataset.src || img.src,
        alt: img.alt,
        caption: img.dataset.caption || '',
        index: index
      });
    });
  }
  
  bindEvents() {
    // Open modal when clicking gallery images
    this.galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => this.openModal(img, index));
      
      // Keyboard accessibility
      img.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openModal(img, index);
        }
      });
      
      // Make images focusable
      img.setAttribute('tabindex', '0');
      img.style.cursor = 'pointer';
    });
    
    // Close modal events
    this.closeBtn?.addEventListener('click', () => this.closeModal());
    
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.modal?.classList.contains('modal--open')) return;
      
      switch(e.key) {
        case 'Escape':
          this.closeModal();
          break;
        case 'ArrowLeft':
          this.navigateImage(-1);
          break;
        case 'ArrowRight':
          this.navigateImage(1);
          break;
      }
    });
  }
  
  openModal(image, index) {
    this.currentImageIndex = index;
    
    // Use data-src if available (for lazy loaded images), otherwise use src
    const imageSrc = image.dataset.src || image.src;
    
    this.modalImage.src = imageSrc;
    this.modalImage.alt = image.alt;
    this.setCaption(image.dataset.caption);

    this.modal.classList.add('modal--open');
    this.modal.setAttribute('aria-hidden', 'false');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus close button for accessibility
    setTimeout(() => {
      this.closeBtn?.focus();
    }, 100);
  }
  
  closeModal() {
    this.modal?.classList.remove('modal--open');
    this.modal?.setAttribute('aria-hidden', 'true');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Clear image src to prevent flash on next open
    setTimeout(() => {
      this.modalImage.src = '';
    }, 300);
  }
  
  navigateImage(direction) {
    // Calculate new index
    this.currentImageIndex += direction;
    
    // Wrap around
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.imagesList.length - 1;
    } else if (this.currentImageIndex >= this.imagesList.length) {
      this.currentImageIndex = 0;
    }
    
    // Update modal image
    const newImage = this.imagesList[this.currentImageIndex];
    this.modalImage.src = newImage.src;
    this.modalImage.alt = newImage.alt;
    this.setCaption(newImage.caption);
  }

  setCaption(caption) {
    // Optional text shown under the photo (data-caption on the image)
    if (this.modalCaption) {
      this.modalCaption.textContent = caption || '';
    }
  }
}
