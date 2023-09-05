export function handleSearchFormSubmit(event, books, authors, BOOKS_PER_PAGE) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
        let genreMatch = filters.genre === 'any';

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) {
                genreMatch = true;
            }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
            (filters.author === 'any' || book.author === filters.author) &&
            genreMatch
        ) {
            result.push(book);
        }
    }

    resetPagination();
    updateBookList(result, authors, BOOKS_PER_PAGE);
}

export function resetPagination() {
    page = 1;
}

export function updateBookList(result, authors, BOOKS_PER_PAGE) {
    matches = result;
    const listMessageElement = document.querySelector('[data-list-message]');
    const listItemsElement = document.querySelector('[data-list-items]');
    const listButtonElement = document.querySelector('[data-list-button]');

    if (result.length < 1) {
        listMessageElement.classList.add('list__message_show');
    } else {
        listMessageElement.classList.remove('list__message_show');
    }

    listItemsElement.innerHTML = '';
    const newItems = document.createDocumentFragment();

    for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
        const element = createBookElement(id, image, title, authors[author]);
        newItems.appendChild(element);
    }

    listItemsElement.appendChild(newItems);
    listButtonElement.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;
    updateListButtonLabel();
    scrollToTop();
    closeSearchOverlay();
}

export function createBookElement(id, image, title, author) {
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
            <div class="preview__author">${author}</div>
        </div>
    `;

    return element;
}

export function updateListButtonLabel() {
    const listButtonElement = document.querySelector('[data-list-button]');
    listButtonElement.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `;
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function closeSearchOverlay() {
    const searchOverlayElement = document.querySelector('[data-search-overlay]');
    searchOverlayElement.open = false;
}