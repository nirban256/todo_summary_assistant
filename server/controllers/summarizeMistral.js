/*
This file is used for summarizing the to-do list using the Mistral model.
It filters out completed tasks and sends the remaining tasks to the Mistral model for summarization.
It uses the OpenRouter API to interact with the Mistral model.
*/

import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const summarizeWithMistral = async (todos) => {
    // Filter only the incomplete todos
    const incompleteTodos = todos.filter((t) => !t.isDone);

    if (incompleteTodos.length === 0) {
        return "All tasks are completed. Nothing to summarize.";
    }

    const prompt = `Summarize the following to-do list:\n\n${incompleteTodos
        .map((t, i) => `\n${i + 1}. ${t.task}`)
        .join("")}`;

    const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
            model: "mistralai/mistral-7b-instruct",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "HTTP-Referer": "http://localhost:3000",
                "Content-Type": "application/json",
            },
        }
    );

    return response.data.choices[0].message.content.trim();
};

export { summarizeWithMistral };
