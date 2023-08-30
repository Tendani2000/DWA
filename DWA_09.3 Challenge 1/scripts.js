import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";
import { handleSearchFormSubmit, handleSettingsFormSubmit, renderDropdownOptions, handleFilterAndRender } from "./eventHandlers.js";
import { createPreview, createPreviewFragment } from "./previewElement.js"

// Add submit event listeners to search and settings forms
document.querySelector('[data-search-form]').addEventListener('submit', handleSearchFormSubmit);
document.querySelector('[data-settings-form]').addEventListener('submit', handleSettingsFormSubmit);

//varible matches and assigns it the value of the books variable.
 matches = books;
let page = 1;
const range = [0, 10];

/*This line checks if the books variable is falsy/false or not an array. 
If either of these conditions is true, it throws an error with the message 'Source required'.*/
if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}
/*This line checks if the range variable is falsy or has a length less than 2. 
If either of these conditions is true, it throws an error with the message 'Range must be an array with two numbers'.*/
if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

const day = {
  dark: '10, 10, 20',
  light: '255, 255, 255',
};

const night = {
  dark: '255, 255, 255',
  light: '10, 10, 20',
};

const fragment = document.createDocumentFragment();
extracted = books.slice(0, 36);//This line creates a new array named extracted by slicing the first 36 elements from the books array.

// Render genres and authors dropdown options
renderDropdownOptions(genres, '[data-search-genres]', 'All Genres');
renderDropdownOptions(authors, '[data-search-authors]', 'All Authors');

// Add submit event listener to search form
document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  handleFilterAndRender(filters);
});

/*This clears the existing content inside the element with the attribute data-list-items
 and creates a new HTML fragment using the createPreviewFragment function, passing in the result data and a specified range.*/
  document.querySelector('[data-list-items]').innerHTML = '';
  fragment = createPreviewFragment(result, range[0], range[1]);
  document.querySelector('[data-list-items]').appendChild(fragment);
  const initial = Math.max(0, result.length - page * BOOKS_PER_PAGE);
  const remaining = result.length > page * BOOKS_PER_PAGE ? initial : 0;

  document.querySelector('[data-list-button]').disabled = initial > 0;

  document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining">(${remaining})</span>
  `;

  window.scrollTo(0, 0);
  document.querySelector('[data-search-overlay]').open() = false;
;

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  /*Handles the form submission by extracting form data, 
  updating the CSS variables based on the selected theme, and closing the settings overlay.*/
  document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', css[result.theme].light);
  document.querySelector('[data-settings-overlay]').open() === false;
});
//Adds a click event listener to an element with the attribute data-list-items.
document.querySelector('[data-list-items]').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;
//The code loops through the pathArray to find the first element with a preview attribute in its dataset and assigns its value to previewId.
  for (const node of pathArray) {
    const previewId = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === previewId) {
        active = singleBook;
        break;
      }
    }

    if (active) {
      break;
    }
  }

  if (!active) {
    return;
  }

  document.querySelector('[data-list-active]').showModal();
document.querySelector('[data-list-blur]').src = active.image;
document.querySelector('[data-list-title]').textContent = active.title;
/*This line of code sets the text content of the element with the attribute 
data-list-subtitle to the author's name followed by the publication year of the active book.*/
document.querySelector('[data-list-subtitle]').textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
document.querySelector('[data-list-description]').textContent = active.description;

});

// Loop to create and append previews to fragment
for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id } = extracted[i];
  const preview = createPreview({
    author,
    id,
    image,
    title
  });
  fragment.appendChild(preview);
}