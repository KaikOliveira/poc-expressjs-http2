import { Request, Response } from "express";
import { booksServices } from "./books.service";

function findAll(req: Request, res: Response) {
  const books = booksServices.findAll();

  return res.json(books);
}

function deleteOne(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const books = booksServices.deleteOne(Number(id));

    return res.json(books);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

function findOne(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const book = booksServices.findOne(Number(id));

    return res.json(book);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

function create(req: Request, res: Response) {
  try {
    const { title, author } = req.body;

    const book = booksServices.create(title, author);

    return res.status(201).json(book);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export const booksController = {
  findAll,
  deleteOne,
  findOne,
  create,
};
