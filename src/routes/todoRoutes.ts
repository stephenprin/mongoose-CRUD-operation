import express, { Request, Response } from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controller/todoController";


const router = express.Router();

router.post("/create", createTodo);
router.get("/getAll", getTodos);
router.patch("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);


export default router;