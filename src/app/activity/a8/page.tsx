import { Filler } from "@/app/component/filler";
import { Header } from "@/app/component/header";
import { Footer } from "@/app/component/footer";
import "./a8.css"
import { supabase } from "@/app/utils/supabaseClient";
import { addTask, updateTask } from "./component/server-action";
import { TaskCard } from "./component/taskCard";

interface Tasks {
    id: number;
    task: string;
    isDone: boolean;
};
export default async function Activity8() {
    const fetchData = async () => {
        "use server"
        const {data, error} = await supabase.from('tasks').select("*");
        if(error){
            return error;
        }
        return data;

    }
    const task:any = await fetchData();
    return (
        <>
        <Filler/>
        <div className="scroll-lock">
            <div className="contain">
            <Header/>
            <main className="a8-main">
                <h2 className="text-2xl">To-do List:</h2>
                <form id="form-add" action={addTask}>
                    <input type="text" name="name" required />
                    <button type="submit" className="button-style">
                        <i className="bx bx-plus"></i>
                    </button>
                </form >
                <form id="form-list" action="">
                    {task.map((taskData:any) => (
                        <TaskCard taskData={taskData}/>
                    ))}
                </form>
            </main>
            <Footer/>
            </div>
        </div>
        </>
    )
}