import { booksController } from "../Books/books.controller";
import { Router } from "express";

const booksRouter = Router();

booksRouter.get("/", booksController.findAll);
booksRouter.delete("/:id", booksController.deleteOne);

export { booksRouter };
