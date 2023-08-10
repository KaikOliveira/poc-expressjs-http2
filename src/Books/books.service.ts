import { booksMock } from "../mocks/books";
import { Book } from "./books.entity";

const books: Book[] = booksMock;

function findAll() {
  return books;
}

function deleteOne(id: number) {
  const book = books.find((book) => book.id === id);

  if (!book) {
    throw new Error("Book not found");
  }

  books.splice(books.indexOf(book), 1);
  return books;
}

export const booksServices = {
  findAll,
  deleteOne,
};
