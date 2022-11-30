import express, { Request, Response } from "express";
import Todo from "../model/todoModel";

export const createTodo = async (req: Request, res: Response) => {
  const createdBy = req.body;
  try {
    const doc = await Todo.create(req.body);
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (e) {
    res.status(500).send();
  }
};
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedDoc = await Todo.findOneAndUpdate({ id: id }, req.body, {
      new: true,
    });

    if (!updatedDoc) {
      return res.status(400).end("");
    }
    res.status(200).json({ data: updatedDoc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      res.status(404).send("No todo found");
    }
    res.send(todo);
  } catch (e) {
    res.status(500).json({
      Error: "Internal server Error",
      route: "/todos/delete",
    });
  }
};
