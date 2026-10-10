// Document Viewer Module - Shows a PDF in a dialog with download and new-tab options

export class DocumentViewer {
  constructor() {
    this.viewer = document.getElementById('documentViewer');
    this.body = this.viewer?.querySelector('.viewer__body');
    this.title = this.viewer?.querySelector('.viewer__title');
    this.downloadLink = this.viewer?.querySelector('.viewer__download');
    this.openLink = this.viewer?.querySelector('.viewer__open');
    this.closeBtn = this.viewer?.querySelector('.viewer__close');
    this.triggers = document.querySelectorAll('[data-document]');
    this.lastTrigger = null;
  }

  init() {
    if (!this.viewer || !this.body) return;

    this.bindEvents();
  }

  bindEvents() {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        // Phones and tablets cannot show a PDF inside the page: the link opens it in a new tab instead
        if (!this.canEmbed()) return;

        e.preventDefault();
        this.open(trigger);
      });
    });

    this.closeBtn?.addEventListener('click', () => this.close());

    this.viewer.addEventListener('click', (e) => {
      if (e.target === this.viewer) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.viewer.classList.contains('viewer--open')) {
        this.close();
      }
    });
  }

  canEmbed() {
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    return hasMouse && navigator.pdfViewerEnabled !== false;
  }

  open(trigger) {
    const src = trigger.getAttribute('href');
    const title = trigger.dataset.documentTitle || trigger.textContent.trim();

    this.lastTrigger = trigger;
    this.title.textContent = title;
    this.downloadLink.href = src;
    this.downloadLink.setAttribute('download', trigger.dataset.documentDownload || '');
    this.openLink.href = src;

    // A fresh iframe per document keeps the PDF out of the browser's back/forward history
    const frame = document.createElement('iframe');
    frame.className = 'viewer__frame';
    frame.title = title;
    frame.src = src;
    this.body.replaceChildren(frame);

    this.viewer.classList.add('viewer--open');
    this.viewer.setAttribute('aria-hidden', 'false');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    this.closeBtn?.focus();
  }

  close() {
    this.viewer.classList.remove('viewer--open');
    this.viewer.setAttribute('aria-hidden', 'true');
    this.body.replaceChildren();

    // Restore body scroll
    document.body.style.overflow = '';

    this.lastTrigger?.focus();
  }
}
