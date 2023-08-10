import { booksMock } from "../mocks/books";
import { Book } from "./books.entity";

const books: Book[] = booksMock;

function findAll() {
  return books;
}

export const booksServices = {
  findAll,
};
