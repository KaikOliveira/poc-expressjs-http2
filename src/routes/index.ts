import { Application, Router } from "express";
import { booksRouter } from "./books.routes";

export function useRoutes(app: Application) {
  const apiRouter = Router();

  apiRouter.use("/books", booksRouter);

  app.use("/", apiRouter);
}
