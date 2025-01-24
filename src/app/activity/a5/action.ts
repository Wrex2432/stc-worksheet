"use server"
import { revalidatePath } from "next/cache";

export async function addTask(formData:FormData){
    const task = formData.get("name");
    const resp = await fetch("https://67925710cf994cc68049aea6.mockapi.io/Tasks/", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({task})
    });
    revalidatePath("/activity/a5");
    
}

export async function removeTask(id:any) {
    const resp = await fetch(`https://67925710cf994cc68049aea6.mockapi.io/Tasks/${id}`, {
        method: 'DELETE',
    });
    revalidatePath("/activity/a5");
}