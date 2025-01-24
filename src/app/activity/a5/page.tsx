"use client";
import Link from "next/link";
import "./a5.css";
import { addTask, removeTask } from "./action";
import { useState, useEffect } from "react";

type Task = {
    id: number;
    task: string;
};

export default function Activity5() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        async function fetchTasks() {
        try {
            const response = await fetch("https://67925710cf994cc68049aea6.mockapi.io/Tasks/");
            if (!response.ok) throw new Error("Failed to fetch tasks");
            const data = await response.json();
            setTasks(data);
        } catch (err) {
            setError("Failed to fetch tasks");
            if (err instanceof Error) {
            setError(`Failed to fetch tasks: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
        }
        fetchTasks();
    }, []);

    const handleLength = (text: string): string => {
        return text.length >= 10 ? text.slice(0, 25).concat("...") : text.concat("...");
    };

    return (
        <>
        <div className="filler"></div>
        <div className="scroll-lock">
            <div className="contain">
            <header>
                <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 5</h2>
            </header>

            <main className="a5-main">
                <h2 className="text-2xl">To-do List:</h2>
                <form id="form-add" action={addTask}>
                <input type="text" name="name" required />
                <button type="submit" className="button-style">
                    <i className="bx bx-plus"></i>
                </button>
                </form>
                <form id="form-list" action="">
                {tasks.length && !loading ? (
                    tasks.map((taskData: Task) => (
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
                    ))
                ) : loading ? (
                    <p>Loading... {error}</p>
                ) : (
                    <p>No tasks yet...</p>
                )}
                </form>
            </main>

            <footer>
                <Link href="/" className="a5-button button-style">
                <i className="bx bx-home"></i>
                </Link>
            </footer>
            </div>
        </div>
        </>
    );
}
