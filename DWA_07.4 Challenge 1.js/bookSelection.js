class BookSelector {
    constructor(books) {
      this.books = books;
    }
  
    selectActiveBook(event) {
      const pathArray = Array.from(event.path || event.composedPath());
      let active = null;
  
      for (const node of pathArray) {
        if (active) break;
  
        if (node?.dataset?.preview) {
          const bookId = node.dataset.preview;
          active = this.books.find(book => book.id === bookId);
        }
      }
  
      return active;
    }
  }
  
  export { BookSelector };
  