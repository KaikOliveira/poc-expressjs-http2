import { bookController } from "../controllers/BookController";
import { Router } from "express";

const booksRouter = Router();

booksRouter.get("/", bookController.listBooks);

export { booksRouter };
