import { generateSummary, getTodos } from "../services/api";
import { Button } from "./ui/Button.jsx";
import { toast } from "sonner";

const SummaryButton = () => {
    const fetchTodos = async () => {
        const data = await getTodos();
        return data;
    };

    const handleSummarize = async () => {
        try {
            const todos = await fetchTodos();
            const pendingTodos = todos.filter((todo) => !todo.isDone);
            console.log(pendingTodos);

            if (pendingTodos.length === 0) {
                toast("No pending todos to summarize.");
                return;
            }
            await generateSummary(pendingTodos);
            toast.success("Summary sent to Slack!");
        } catch (err) {
            toast.error("Failed to generate or send summary.");
        }
    };

    return (
        <Button onClick={handleSummarize} className="mt-6" variant="outline">
            Generate & Send Summary
        </Button>
    );
}

export default SummaryButton;