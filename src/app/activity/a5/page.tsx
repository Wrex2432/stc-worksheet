"use client"
import "./a5.css";
import {addTask, removeTask} from "./action";
import { useState, useEffect } from "react";

type mockTasks = {
    id: number,
    task: string,
};

export default function Activity5() {
    const [tasks, setTasks] = useState<mockTasks[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=> {
        async function fetchTasks() {
            try {
                const response = await fetch(
                    "https://67925710cf994cc68049aea6.mockapi.io/Tasks/"
                );
                if (!response.ok) throw new Error("Failed to fetch tasks");
                const data = await response.json();
                setTasks(data);
            } catch (err) {
                setError("Failed to fetch Tasks");
                if (err instanceof Error){
                    setError(`Failed to fetch Tasks: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchTasks();
    },[]);

    return (
        <>
        <div className="filler"></div>
        <div className="scroll-lock">
            <div className="contain ">
            
            <header>
                <h2 className="text-2xl font-bold">Miguel Mangahas | Activity 5</h2>
            </header>
        
            <main className="a5-main">
                <h2 className="text-2xl">To-do List:</h2>
                <form action={addTask}>
                    <input type="text" name="name"/>
                    <button type="submit" className="button-style"><i className='bx bx-plus' ></i></button>
                </form>
                <form action="">
                    {tasks.map((task:mockTasks)=>(
                    <div key={task.id}>
                        <input type="checkbox"/>
                        <p>{task.task}</p>
                        <button onClick={()=>removeTask(task.id)} className="button-style"><i className='bx bx-eraser'></i></button>
                   </div> 
                    ))}
                </form>
            </main>
    
            <footer>
                <a href="/" 
                className='a5-button button-style'>
                    <i className='bx bx-home'></i>
                </a>
            </footer>
    
            </div>
        </div>
        </>
    )
}