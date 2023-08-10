import { generateId } from "../utils/generate-id";
import { booksMock } from "../mocks/books";
import { Book } from "./books.entity";

const books: Book[] = booksMock;

function findAll() {
  return books;
}

function findOne(id: number) {
  const book = books.find((book) => book.id === id);

  if (!book) {
    throw new Error("Book not found");
  }

  return book;
}

function deleteOne(id: number) {
  const book = findOne(id);

  books.splice(books.indexOf(book), 1);
  return books;
}

function create(title: string, author: string) {
  const newBook = {
    id: generateId(),
    title,
    author,
  };

  books.push(newBook);

  return newBook;
}

export const booksServices = {
  findAll,
  deleteOne,
  findOne,
  create,
};
