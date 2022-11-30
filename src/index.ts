import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
if (process.env.NODE_ENV !== "production") {
  logger("dev");
}

const app = express();
const port = 2000;

app.use(express());
app.use(express.json());
import todoRoutes from "./routes/todoRoutes";

app.use("/todo", todoRoutes);

mongoose.connect(process.env.DATABASE_URL!, () => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
