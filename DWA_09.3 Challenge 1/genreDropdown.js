export function createGenreDropdown(genres) {
    const genreHtml = document.createDocumentFragment();

    // Create the 'All Genres' option
    const firstGenreElement = createDropdownOption('any', 'All Genres');
    genreHtml.appendChild(firstGenreElement);

    // Create options for each genre from the 'genres' object
    for (const [id, name] of Object.entries(genres)) {
        const element = createDropdownOption(id, name);
        genreHtml.appendChild(element);
    }

    // Append the generated HTML to the desired DOM element
    document.querySelector('[data-search-genres]').appendChild(genreHtml);
}

function createDropdownOption(value, text) {
    const element = document.createElement('option');
    element.value = value;
    element.innerText = text;
    return element;
}

export function createAuthorsDropdown(authors){
const authorsHtml = document.createDocumentFragment()
const firstAuthorElement = document.createElement('option')
firstAuthorElement.value = 'any'
firstAuthorElement.innerText = 'All Authors'
authorsHtml.appendChild(firstAuthorElement)

for (const [id, name] of Object.entries(authors)) {
    const element = document.createElement('option')
    element.value = id
    element.innerText = name
    authorsHtml.appendChild(element)
}
document.querySelector('[data-search-authors]').appendChild(authorsHtml)
}

