import express, { Request, Response } from "express";
const indexRouter = express.Router();

// define the home page route
indexRouter.get("/", (req: Request, res: Response) => {
  res.json({ msg: "WE ARE LIVE" });
});

export default indexRouter;
