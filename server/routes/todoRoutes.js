import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const todoRoutes = Router();
const prisma = new PrismaClient();

todoRoutes.get("/todos", async (req, res) => {
    const todos = await prisma.findMany({
        orderBy: { createdAt: "desc" },
    });

    res.status(200).send(todos);
});

export default todoRoutes;