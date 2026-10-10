// Carousel Module - Carrossel horizontal (scroll-snap) com indicadores

export class Carousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.track = carouselElement?.querySelector('.education__track');
    this.dotsContainer = carouselElement?.querySelector('.education__dots');
    this.cards = this.track ? Array.from(this.track.children) : [];
    this.dots = [];
  }

  init() {
    if (!this.track || !this.dotsContainer || this.cards.length === 0) return;

    this.buildDots();
    this.track.addEventListener('scroll', () => this.updateActiveDot(), { passive: true });
    window.addEventListener('resize', () => this.buildDots());
  }

  // Distance between the start of two consecutive cards
  getStep() {
    if (this.cards.length < 2) return this.track.clientWidth;
    return this.cards[1].offsetLeft - this.cards[0].offsetLeft;
  }

  // How many cards fit side by side in the visible area
  getVisibleCount() {
    const step = this.getStep();
    const gap = step - this.cards[0].offsetWidth;
    return Math.max(1, Math.round((this.track.clientWidth + gap) / step));
  }

  // One dot per page of visible cards
  getPageCount() {
    return Math.max(1, Math.ceil(this.cards.length / this.getVisibleCount()));
  }

  buildDots() {
    const pageCount = this.getPageCount();
    if (pageCount === this.dots.length) return;

    this.dotsContainer.innerHTML = '';
    this.dots = [];

    // No dots needed when every card is visible
    if (pageCount > 1) {
      for (let index = 0; index < pageCount; index++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'education__dot';
        dot.setAttribute('aria-label', `Ir para a página ${index + 1}`);
        dot.addEventListener('click', () => this.goTo(index));
        this.dotsContainer.appendChild(dot);
        this.dots.push(dot);
      }
    }

    this.updateActiveDot();
  }

  goTo(index) {
    this.track.scrollTo({
      left: index * this.getVisibleCount() * this.getStep(),
      behavior: 'smooth'
    });
  }

  updateActiveDot() {
    const maxScroll = this.track.scrollWidth - this.track.clientWidth;
    const pageWidth = this.getVisibleCount() * this.getStep();

    // The last page may be shorter, so reaching the end always means the last dot
    const activeIndex = this.track.scrollLeft >= maxScroll - 1
      ? this.dots.length - 1
      : Math.min(this.dots.length - 1, Math.round(this.track.scrollLeft / pageWidth));

    this.dots.forEach((dot, index) => {
      dot.classList.toggle('education__dot--active', index === activeIndex);
    });
  }
}
