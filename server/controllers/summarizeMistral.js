import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const summarizeWithMistral = async (todos) => {
    const prompt = `Summarize the following to-do list:\n\n${todos
        .map((t, i) => { t.isDone === false ? `\n${i + 1}. ${t.task}` : "" })
        .join("\n")}`;

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
