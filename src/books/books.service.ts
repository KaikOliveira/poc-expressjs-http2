import { Injectable } from '@nestjs/common';
import { Book } from './books.entitiy';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
  ];

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find((book) => book.id === id);
  }

  create(book: Book): Book {
    this.books.push(book);
    return book;
  }

  update(id: number, book: Book): Book {
    const bookToUpdate = this.findOne(id);
    const index = this.books.indexOf(bookToUpdate);
    this.books[index] = book;
    return book;
  }

  remove(id: number): Book[] {
    const indexBook = this.books.findIndex((book) => book.id === id);

    this.books.splice(indexBook, 1);
    return this.findAll();
  }
}
