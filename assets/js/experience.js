// Experience Module - Expandable details for each role (one panel open at a time)

export class ExperienceDetails {
  constructor(element) {
    this.element = element;
    this.toggles = Array.from(element?.querySelectorAll('.experience__toggle') ?? []);
  }

  init() {
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.handleToggle(toggle));
    });
  }

  handleToggle(toggle) {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';

    // Opening one role closes the others; clicking the open one collapses it
    this.toggles.forEach(item => this.setOpen(item, willOpen && item === toggle));

    if (willOpen) {
      this.reveal(toggle);
    }
  }

  getPanel(toggle) {
    return document.getElementById(toggle.getAttribute('aria-controls'));
  }

  setOpen(toggle, isOpen) {
    const card = toggle.closest('.experience__card');
    const panel = this.getPanel(toggle);
    const label = toggle.querySelector('.experience__toggle-label');

    toggle.setAttribute('aria-expanded', isOpen.toString());
    card?.classList.toggle('experience__card--open', isOpen);

    if (panel) {
      panel.hidden = !isOpen;
    }
    if (label) {
      label.textContent = isOpen ? 'Ver menos' : 'Ver mais';
    }
  }

  reveal(toggle) {
    const card = toggle.closest('.experience__card');
    const panel = this.getPanel(toggle);
    if (!card || !panel) return;

    // The layout has just changed: scroll only if the card or its panel ended up off screen
    const cardTop = card.getBoundingClientRect().top;
    const panelBottom = panel.getBoundingClientRect().bottom;
    if (cardTop >= 0 && panelBottom <= window.innerHeight) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: window.scrollY + cardTop - 24,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  }
}
