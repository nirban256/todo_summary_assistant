import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const todoRoutes = Router();
const prisma = new PrismaClient();

todoRoutes.get("/", (req, res) => {
    res.status(200).send("Welcome to the Todo List API!");
});

todoRoutes.get("/todos", async (req, res) => {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: "desc" },
    });

    res.status(200).send(todos);
});

todoRoutes.post('/todos', async (req, res) => {
    const todoBody = req.body;
    const todo = await prisma.todo.create({
        data: {
            task: todoBody.task,
            isDone: todoBody.isDone || false
        },
    });
    res.status(201).send(todo);
});

todoRoutes.delete("/todos/:id", async (req, res) => {
    const todoId = parseInt(req.params.id, 10);
    if (isNaN(todoId)) {
        return res.status(400).send("Invalid ID format");
    }

    let deletedTodo;
    try {
        deletedTodo = await prisma.todo.delete({
            where: { id: todoId },
        });
    } catch (error) {
        return res.status(500).send("Error deleting todo");
    }

    res.status(200).send(deletedTodo);
});

export default todoRoutes;