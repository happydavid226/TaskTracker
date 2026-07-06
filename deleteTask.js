import { loadTasks, writeTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";

export async function deleteTask(id) {
    id = Number(id);
    if(isNaN(id)){
        throw new Error("Id should be an integer");
    }
    try {
        const tasks = await loadTasks();
        if(!taskExists(id, tasks)){
            throw new Error("task does not exist");
        }
        const remaining = tasks.filter((task, index) => {
            if(tasks[index]._id === id){
                return false;
            } else {
                return true;
            }
        });
        const removed = tasks.filter((task, index) => {
            if(tasks[index]._id == id){
                return true;
            } else {
                return false;
            }
        });
        await writeTasks(remaining);
        return removed;
    } catch(err){
        console.log(`error : ${err.message}`);
    }
}