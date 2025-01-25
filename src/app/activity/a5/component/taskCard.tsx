"use client";
import {removeTask} from "./action";
export function TaskCard({taskData}:any) {
    const handleLength = (text: string): string => {
        return text.length >= 10 ? text.slice(0, 25).concat("...") : text.concat("...");
    };
    return (
        <div key={taskData.id}>
            <input type="checkbox" />
            <p>{handleLength(taskData.task)}</p>
            <button
                onClick={() => removeTask(taskData.id)}
                className="button-style"
            >
            <i className="bx bx-eraser"></i>
            </button>
        </div>  
    );
}