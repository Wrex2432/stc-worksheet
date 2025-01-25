"use server"
import { revalidatePath } from "next/cache";
import { supabase } from "@/app/utils/supabaseClient";

export async function addTask(formData: FormData): Promise<void> {
    const task = formData.get("name");
    const {error} = await supabase.from('tasks').insert([{task}]).single();
    if (error) console.error(error);
    revalidatePath("/activity/a8");
}
export async function updateTask(updatedTask: string, id: string | number): Promise<void> {
    const {error} = await supabase.from('tasks').update({task:updatedTask}).eq('id', id);
    if (error) console.error(error);
    revalidatePath("/activity/a8");
}
export async function updateStatus(updatedStatus: boolean, id: string | number): Promise<void> {
    const {error} = await supabase.from('tasks').update({isDone:updatedStatus}).eq('id', id);
    if (error) console.error(error);
    revalidatePath("/activity/a8");
}

export async function removeTask(id: string | number): Promise<void> {
    const {error} = await supabase.from('tasks').delete().eq('id',id);
    if (error) console.error(error);
    revalidatePath("/activity/a8");
}
