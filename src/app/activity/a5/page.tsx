"use client";
import Link from "next/link";
import "./a5.css";
import { addTask} from "./component/action";
import { useState, useEffect } from "react";
import { Filler } from "@/app/component/filler";
import { Header } from "@/app/component/header";
import { Footer } from "@/app/component/footer";
import { TaskCard } from "./component/taskCard";
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
    }, [tasks]);

    return (
        <>
        <Filler/>
        <div className="scroll-lock">
            <div className="contain">
            <Header/>
            <main className="a5-main">
                <h2 className="text-2xl">To-do List:</h2>
                <p className="text-xs">This is using MockAPI.io to store the list.</p>
                <form id="form-add" action={addTask}>
                <input type="text" name="name" required />
                <button type="submit" className="button-style">
                    <i className="bx bx-plus"></i>
                </button>
                </form>
                <form id="form-list" action="">
                {tasks.length && !loading ? (
                    tasks.map((taskData: Task) => (
                    <TaskCard key={taskData.id} taskData={taskData}/>
                    ))
                ) : loading ? (
                    <p>Loading... {error}</p>
                ) : (
                    <p>No tasks yet...</p>
                )}
                </form>
            </main>
            <Footer/>
            </div>
        </div>
        </>
    );
}
