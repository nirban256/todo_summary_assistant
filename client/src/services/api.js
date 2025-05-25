import axios from "axios";

const API_BASE = "http://localhost:5000";

export const getTodos = async () => {
    const res = await axios.get(`${API_BASE}/todos`);
    return res.data;
};

export const addTodo = async (todo) => {
    await axios.post(`${API_BASE}/todos`, todo);
};

export const deleteTodo = async (id) => {
    await axios.delete(`${API_BASE}/todos/${id}`);
};

export const generateSummary = async (todos) => {
    console.log("Generating summary for todos:", todos);
    try {
        await axios.post(`${API_BASE}/api/summarize`, todos);
    } catch (error) {
        console.error("Error generating summary:", error);
        throw error;
    }
};