import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index";

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRouter);

app.listen(port, () => {
  console.log(`Listening to ${port}.`);
});
