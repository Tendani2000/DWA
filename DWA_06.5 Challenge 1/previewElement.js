/* function declaration for the createPreview function. It takes a parameter bookData and returns a preview element for a book.
 Inside the function, it creates and configures DOM elements (such as div, img, h2, and p) based on the bookData object and appends 
 them to the preview element.*/

export function createPreview(bookData) {
  const { author, image, title } = bookData;

  const preview = document.createElement('div');
  preview.classList.add('preview');

  const previewImage = document.createElement('img');
  previewImage.src = image;
  previewImage.alt = title;
  preview.appendChild(previewImage);

  const previewTitle = document.createElement('h2');
  previewTitle.textContent = title;
  preview.appendChild(previewTitle);

  const previewAuthor = document.createElement('p');
  previewAuthor.textContent = authors[author];
  preview.appendChild(previewAuthor);

  return preview;
  }
  
/*This is a loop that iterates over the extracted array. For each element, it extracts the author, image, title, and id properties, 
and calls the createPreview function to create a preview element. The preview element is then appended to the fragment.*/
 
export function createPreviewFragment(data, start, end) {
    const fragment = document.createDocumentFragment();
    for (let i = start; i < end && i < data.length; i++) {
    const { author, image, title, id } = data[i];
    
    const preview = createPreview({
        author,
        id,
        image,
        title
        });
    
        fragment.appendChild(preview);
      }
    
      return fragment;
    }
    
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
  