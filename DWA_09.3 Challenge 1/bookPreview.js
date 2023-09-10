/*What problems did you encounter converting the book preview to a component?
What other elements make sense to convert into web components? Why?
Why does keeping your HTML, CSS and JavaScript in a single file sometimes make sense?*/

class bookPreview extends HTMLElement{
    constructor() {
    super()
    const shadow =  this.attachShadow({ mode : "closed"})
    
    connectedCallback(){
        this.render(;)
    }
}
}
customElements.define("book-preview", bookPreview)

export { createBookPreviews };

function createBookPreviews(matches, BOOKS_PER_PAGE, authors) {
    const starting = document.createDocumentFragment();

    for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);

        element.innerHTML = `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
        `;
        starting.appendChild(element);
    }

    document.querySelector('[data-list-items]').appendChild(starting);
}
