// Function to handle the search form submission
export function handleSearchFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    filterAndRenderBooks(filters);
    document.querySelector('[data-search-overlay]').close();
  }
  
  // Function to handle the settings form submission
  export function handleSettingsFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData);
    updateTheme(result.theme);
    document.querySelector('[data-settings-overlay]').close();
  }

// Function to render genres and authors dropdown options
export function renderDropdownOptions(data, containerSelector, defaultOptionText) {
    const fragment = document.createDocumentFragment();
    let element = document.createElement('option');
    element.value = 'any';
    element.innerText = defaultOptionText;
    fragment.appendChild(element);
  
    for (const [id, name] of Object.entries(data)) {
      element = document.createElement('option');
      element.value = id;
      element.innerText = name;
      fragment.appendChild(element);
    }
  
    document.querySelector(containerSelector).appendChild(fragment);
  }
  
  // Function to handle filtering and rendering based on user input
  export function handleFilterAndRender(filters) {
    const result = [];
  
    for (const book of books) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || book.author === filters.author;
        let genreMatch = false;
    
        if (filters.genre === 'any') {
          genreMatch = true;
        } else {
          for (const genre of book.genres) {
            if (genre === filters.genre) {
              genreMatch = true;
              break;
            }
          }
        }
  
      if (titleMatch && authorMatch && genreMatch) {
        result.push(book);
      }
    }
  
    if (result.length < 1) {
      document.querySelector('[data-list-message]').classList.add('list__message');
    } else {
      document.querySelector('[data-list-message]').classList.remove('list__message');
    }
  
    // Render filtered results
    
  }
    