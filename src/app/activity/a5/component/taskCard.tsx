"use client";
import { removeTask } from "./action";
interface TaskData {
    id: number;
    task: string;
}
interface TaskCardProps {
    taskData: TaskData;
}
export function TaskCard({ taskData }: TaskCardProps) {
    const handleLength = (text: string): string => {
        return text.length >= 10 ? text.slice(0, 25).concat("...") : text.concat("...");
    };

    return (
    <div key={taskData.id} className="task-card">
        <input type="checkbox" className="task-checkbox" />
            <p className="task-text">{handleLength(taskData.task)}</p>
        <button
            onClick={() => removeTask(taskData.id)}
            className="button-style"
            aria-label="Remove task"
        >
            <i className="bx bx-eraser"></i>
        </button>
    </div>
    );
}