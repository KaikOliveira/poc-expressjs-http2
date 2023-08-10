import { Request, Response } from "express";
import { booksServices } from "./books.service";

function findAll(req: Request, res: Response) {
  const books = booksServices.findAll();

  return res.json(books);
}

export const booksController = {
  findAll,
};
