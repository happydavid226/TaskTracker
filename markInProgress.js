import { loadTasks, writeTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";
import { checkId } from "./validation.js";

export default async function markInProgress(id){
    id = checkId(id);
    try {
        let tasks = await loadTasks();
        if(!taskExists(id, tasks)){
            throw new Error("task does not exist");
        }
        let updatedTasks = [];
        tasks.forEach((task, index) => {
            if(tasks[index]._id === id){
                tasks[index]._status = "DOING";
                updatedTasks.push(task);
            }
        });
        await writeTasks(tasks);
        return updatedTasks;
    } catch(err){
        console.log(`error `, err);
    }
}