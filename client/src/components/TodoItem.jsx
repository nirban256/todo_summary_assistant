import { toast } from "sonner";
import { deleteTodo } from "../services/api";
import { Button } from "./ui/Button.jsx";

const TodoItem = ({ todo, refreshTodos }) => {

    const handleDelete = async () => {
        await deleteTodo(todo.id);
        toast.success("Task deleted successfully!");
        refreshTodos();
    };

    return (
        <li className="flex justify-between items-center border p-2 rounded">
            <div className="flex items-center">
                <span className={todo.isDone ? "line-through text-muted-foreground" : ""}>
                    {todo.task}
                </span>
            </div>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
        </li>
    );
}

export default TodoItem;
