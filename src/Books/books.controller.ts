import { Request, Response } from "express";
import { booksServices } from "./books.service";

class BooksController {
  private bookService = booksServices;

  findAll(req: Request, res: Response) {
    const books = this.bookService.getBooks();

    return res.json(books);
  }
}

export const booksController = new BooksController();
