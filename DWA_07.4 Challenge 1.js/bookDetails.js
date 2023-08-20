class BookDetailsDisplayer {
    constructor(activeBook, listActiveElement, listBlurElement, listImageElement, listTitleElement, listSubtitleElement, listDescriptionElement, authors) {
      this.activeBook = activeBook;
      this.listActiveElement = listActiveElement;
      this.listBlurElement = listBlurElement;
      this.listImageElement = listImageElement;
      this.listTitleElement = listTitleElement;
      this.listSubtitleElement = listSubtitleElement;
      this.listDescriptionElement = listDescriptionElement;
      this.authors = authors;
    }
  
    displayActiveBook() {
      if (this.activeBook) {
        this.listActiveElement.open = true;
        this.listBlurElement.src = this.activeBook.image;
        this.listImageElement.src = this.activeBook.image;
        this.listTitleElement.innerText = this.activeBook.title;
        const authorName = this.authors[this.activeBook.author];
        const publicationYear = new Date(this.activeBook.published).getFullYear();
        this.listSubtitleElement.innerText = `${authorName} (${publicationYear})`;
        this.listDescriptionElement.innerText = this.activeBook.description;
      }
    }
  }
  
  export { BookDetailsDisplayer };
  