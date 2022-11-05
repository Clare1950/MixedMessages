//A factory function for the book object

const bookFactory = (title, author, genre, pages) => {
  return {
    title: title,
    author: author,
    genre: genre,
    pages: pages,
    length() {
      if (this.pages <= 200) {
        return "short";
      } else if (this.pages > 500) {
        return "long";
      } else {
        return "medium length";
      }
    },
    bookSummary() {
      return `read ${this.title}, a ${this.genre} book by ${
        this.author
      }. \nIt is a ${this.length()} read with ${this.pages} pages.`;
    },
  };
};

let newBook = bookFactory(
  "Slime: A Natural History",
  "Susanne Wedlich",
  "popular science",
  272
);

console.log(newBook.bookSummary());
