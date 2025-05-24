import { Router } from "express";
const summarizeRoutes = Router();
import { postToSlack } from "../controllers/slackController.js";
import { summarizeWithMistral } from "../controllers/summarizeMistral.js";

summarizeRoutes.post("/summarize", async (req, res) => {
    const todos = req.body.todos;

    try {
        if (!todos || !Array.isArray(todos) || todos.length === 0) {
            return res.status(400).json({ success: false, error: "No todos provided for summarization" });
        }

        const summary = await summarizeWithMistral(todos);
        await postToSlack(summary);

        res.status(200).json({ success: true, summary });
    } catch (err) {
        console.log("Error during summarization or posting to Slack:", err);
        console.error("Summarization Error:", err.message);
        console.error("Error status:", err.response?.status);
        console.error("Error data:", err.response?.data);

        res.status(500).json({ success: false, error: "Failed to summarize or post to Slack" });
    }
});

export default summarizeRoutes;
