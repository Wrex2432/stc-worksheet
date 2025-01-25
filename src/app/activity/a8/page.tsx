import { Filler } from "@/app/component/filler";
import { Header } from "@/app/component/header";
import { Footer } from "@/app/component/footer";
import "./a8.css";
import { supabase } from "@/app/utils/supabaseClient";
import { addTask } from "./component/server-action";
import { TaskCard } from "./component/taskCard";

interface Task {
  id: number;
  task: string;
  isDone: boolean;
}

export default async function Activity8() {
    const fetchData = async (): Promise<Task[] | null> => {
        "use server";
        const { data, error } = await supabase.from("tasks").select("*");
        if (error) {
            console.error("Error fetching tasks:", error);
            return null;
        }
        return data as Task[];
    };

    const tasks = await fetchData();

    return (
        <>
        <Filler />
        <div className="scroll-lock">
            <div className="contain">
            <Header />
            <main className="a8-main">
                <h2 className="text-2xl">To-do List:</h2>
                <form id="form-add" action={addTask} method="post">
                    <input type="text" name="name" required placeholder="Add a new task" />
                    <button type="submit" className="button-style" aria-label="Add task">
                        <i className="bx bx-plus"></i>
                    </button>
                </form>
                <form id="form-list">
                    {tasks?.map((taskData) => (
                        <TaskCard key={taskData.id} taskData={taskData} />
                    ))}
                </form>
            </main>
            <Footer />
            </div>
        </div>
        </>
    );
}
