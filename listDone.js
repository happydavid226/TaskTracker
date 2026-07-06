import { loadTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";
import { checkId } from "./validation.js";

export default async function listDone(){
    const tasks = await loadTasks();
    const doneTasks = tasks.filter((task, index) => {
        if(task._status === "DONE"){
            return true;
        }
        return false;
    });
    return doneTasks;
}