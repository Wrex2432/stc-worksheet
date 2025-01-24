/* "use server"
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
} */


"use server"
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData): Promise<void> {
    const task = formData.get("name");

    if (typeof task !== "string") {
    throw new Error("Task name must be a string");
}

const resp = await fetch("https://67925710cf994cc68049aea6.mockapi.io/Tasks/", {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ task })
    });

    if (!resp.ok) {
        throw new Error("Failed to add task");
    }

    revalidatePath("/activity/a5");
}

export async function removeTask(id: string | number): Promise<void> {
    const resp = await fetch(`https://67925710cf994cc68049aea6.mockapi.io/Tasks/${id}`, {
    method: 'DELETE',
    });

    if (!resp.ok) {
        throw new Error("Failed to remove task");
    }

    revalidatePath("/activity/a5");
}
