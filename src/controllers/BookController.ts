import { Request, Response } from "express";

function listBooks(req: Request, res: Response) {
  const mockBooks = [
    {
      id: 1,
      title: "bla bla",
      author: "xixiix",
    },
    {
      id: 2,
      title: "bla bla two",
      author: "xixiix two",
    },
  ];

  res.json(mockBooks);
}

export const bookController = {
  listBooks,
};
