"use client";

import { removeTask, updateStatus, updateTask } from "./server-action";
import { useState } from "react";

interface TaskData {
    id: number;
    task: string;
    isDone: boolean;
}

interface TaskCardProps {
    taskData: TaskData;
}

export function TaskCard({ taskData }: TaskCardProps) {
    const [taskDescription, setTaskDescription] = useState(taskData.task);
    const [taskStatus, setTaskStatus] = useState(taskData.isDone);

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const updatedText = e.target.value;
        updateTask(updatedText, taskData.id);
        setTaskDescription(updatedText);
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const isChecked = e.target.checked;
        setTaskStatus(isChecked);
        updateStatus(isChecked, taskData.id);
    };

    return (
        <div id="task-card" key={taskData.id} className="task-card">
        <input
            type="checkbox"
            checked={taskStatus}
            onChange={handleCheckboxChange}
            className="task-checkbox"
            aria-label="Mark task as done"
        />
        <input
            type="text"
            value={taskDescription}
            onChange={handleChangeText}
            className="task-input"
            aria-label="Edit task description"
        />
        <div id="edit-buttons" className="edit-buttons">
            <button
            onClick={(e) => {
                e.preventDefault();
                updateTask(taskDescription, taskData.id);
            }}
            className="button-style edit-button"
            aria-label="Save task"
            >
            <i className="bx bx-edit-alt"></i>
            </button>
            <button
            onClick={(e) => {
                e.preventDefault();
                removeTask(taskData.id);
            }}
            className="button-style delete-button"
            aria-label="Remove task"
            >
            <i className="bx bx-eraser"></i>
            </button>
        </div>
        </div>
    );
}
