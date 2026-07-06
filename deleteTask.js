import { loadTasks, writeTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";
import { checkId } from "./validation.js";

export default async function deleteTask(id) {
    id = checkId(id);
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