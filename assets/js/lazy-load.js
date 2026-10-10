// Lazy Load Module - Lazy loading de imagens usando Intersection Observer

export class LazyLoader {
  constructor(selector = '.lazy-load') {
    this.selector = selector;
    this.images = document.querySelectorAll(selector);
    this.observer = null;
    this.options = {
      root: null, // viewport
      rootMargin: '50px', // Start loading 50px before entering viewport
      threshold: 0.01 // Trigger when 1% of image is visible
    };
  }
  
  observe() {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: load all images immediately
      this.loadAllImages();
      return;
    }
    
    // Create observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
        }
      });
    }, this.options);
    
    // Observe each image
    this.images.forEach(image => {
      this.observer.observe(image);
    });
  }
  
  loadImage(image) {
    const src = image.dataset.src;
    
    if (!src) {
      this.observer?.unobserve(image);
      return;
    }
    
    // Create a temporary image to preload
    const tempImage = new Image();
    
    tempImage.onload = () => {
      // Replace placeholder with actual image
      image.src = src;
      image.classList.add('loaded');
      
      // Stop observing this image
      this.observer?.unobserve(image);
      
      // Remove data-src attribute
      delete image.dataset.src;
    };
    
    tempImage.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      // Keep the placeholder visible when the real image is missing
      image.classList.add('loaded');
      this.observer?.unobserve(image);
    };
    
    // Start loading
    tempImage.src = src;
  }
  
  loadAllImages() {
    // Fallback for browsers without Intersection Observer
    this.images.forEach(image => {
      const src = image.dataset.src;
      if (src) {
        image.src = src;
        image.classList.add('loaded');
        delete image.dataset.src;
      }
    });
  }
  
  disconnect() {
    // Clean up observer
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  
  // Add new images to be observed (useful for dynamically added content)
  observeNewImages(selector = this.selector) {
    const newImages = document.querySelectorAll(selector);
    newImages.forEach(image => {
      if (!image.classList.contains('loaded') && image.dataset.src) {
        this.observer?.observe(image);
      }
    });
  }
}
