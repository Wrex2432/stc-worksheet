"use client";
import {removeTask, updateStatus, updateTask } from "./server-action";
import { useState } from "react";
export function TaskCard({taskData}:any) {
    const [taskDescription, setTaskDescription] = useState(taskData.task);
    const [taskStatus, setTaskStatus] = useState(taskData.isDone);

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        updateTask(e.target.value,taskData.id);
        setTaskDescription(e.target.value);
    };
    const handleChaeckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        if (e.target.checked) {
            setTaskStatus(true);
            updateStatus(true,taskData.id)
            
        } else {
            setTaskStatus(false);
            updateStatus(false,taskData.id)
        }
        /* if (e.target.checked) {
            return (false);
        }else{
            updateStatus(e.target.checked,taskData.isDone)
            setTaskStatus(e.target.value);
            return (true);
        } */
    };
    return (
        <div id="task-card" key={taskData.id}>
            <input type="checkbox" checked={taskStatus} onChange={handleChaeckBox} />
            <input 
                value={taskDescription} 
                onChange={handleChangeText}
                type="text" 
            />
            <div id="edit-buttons">
                <button
                    onClick={(e) => { e.preventDefault(); updateTask(taskDescription,taskData.id); }}
                    className="button-style"
                    >
                    <i className='bx bx-edit-alt'></i>
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); removeTask(taskData.id) }}
                    className="button-style"
                >
                    <i className="bx bx-eraser"></i>
                </button>
            </div>
        </div>
                
    );
}
