import { loadTasks, writeTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";

export async function markDone(id){
    id = Number(id);
    if(typeof id !== 'number'){
        throw new Error('id must be a number');
    }
    let tasks = await loadTasks();
    if(!taskExists(id, tasks)){
        throw new Error('task does not exist');
    }
    let updatedTasks = [];
    tasks.forEach((task, index) => {
        if(tasks[index]._id === id){
            tasks[index]._status = "DONE";
            updatedTasks.push(task);
        }
    });
    await writeTasks(tasks);
    return updatedTasks;
}