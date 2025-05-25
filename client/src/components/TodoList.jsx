import { useState } from "react";
import TodoItem from "./TodoItem";
import { addTodo } from "../services/api";
import { Button } from "./ui/Button.jsx";
import { Input } from "./ui/input.jsx";
import { Checkbox } from "./ui/checkbox.jsx";
import { toast } from "sonner";

const TodoList = ({ todos, refreshTodos }) => {
    const [task, setTask] = useState("");
    const [isDone, setIsDone] = useState(false);

    const handleAdd = async () => {
        if (!task.trim()) {
            toast.error("Task cannot be empty.");
            return;
        }

        if (task.length > 100) {
            toast.error("Task cannot exceed 100 characters.");
            return;
        }
        if (todos.some(todo => todo.task === task.trim())) {
            toast.error("Task already exists.");
            return;
        }

        await addTodo({ task, isDone });
        setTask("");
        setIsDone(false);
        toast.success("Task added successfully!");
        refreshTodos();
    };

    return (
        <div>
            <div className="flex gap-2 mb-4">
                <Input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <div className="flex items-center gap-2">
                    <Checkbox
                        id="isDone"
                        checked={isDone}
                        onChange={(val) => setIsDone(val)}
                    />
                    <label htmlFor="isDone" className="ml-2 text-sm">
                        Mark as done
                    </label>
                </div>
                <Button variant="primary" onClick={handleAdd}>Add</Button>
            </div>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} refreshTodos={refreshTodos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;