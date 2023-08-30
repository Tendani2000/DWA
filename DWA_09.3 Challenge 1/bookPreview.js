class BookPreviewElement extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      const author = this.getAttribute('author');
      const id = this.getAttribute('id');
      const image = this.getAttribute('image');
      const title = this.getAttribute('title');
  
      this.shadowRoot.innerHTML = `
        <style>
          /* Component-specific styles */
          /* .preview { ... } */
          /* .preview__image { ... } */
          /* .preview__info { ... } */
          /* .preview__title { ... } */
          /* .preview__author { ... } */
        </style>
        <button class="preview" data-preview="${id}">
          <img class="preview__image" src="${image}" />
          <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
          </div>
        </button>
      `;
    }
  }
  
  customElements.define('book-preview', BookPreviewElement);
  