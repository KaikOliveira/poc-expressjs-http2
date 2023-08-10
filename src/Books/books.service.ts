import { books } from "../mocks/books";
import { Book } from "./books.entity";

class BooksServices {
  private books: Book[] = books;

  public async getBooks() {
    return this.books;
  }
}

export const booksServices = new BooksServices();
