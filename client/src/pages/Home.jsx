import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import SummaryButton from "../components/SummaryButton";
import { getTodos } from "../services/api";

const Home = () => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <main className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todo Summary Assistant</h1>
            <TodoList todos={todos} refreshTodos={fetchTodos} />
            <SummaryButton />
        </main>
    );
}

export default Home;
