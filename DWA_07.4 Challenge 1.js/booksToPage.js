export function addBooksToPage(matches, authors, page, BOOKS_PER_PAGE) {
    const fragment = document.createDocumentFragment();

    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
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

        fragment.appendChild(element);
    }

    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
}

/*This code listens for a button click. When the button is clicked, it shows more books on a web page, like flipping a 
page in a book. It uses data from a list of books and authors to display book covers, titles, and authors. Each time you
 click the button, it shows the next set of books.*/