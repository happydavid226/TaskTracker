import { loadTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";
import { checkId } from "./validation.js";

export default async function listInProgress(){
    const tasks = await loadTasks();
    const inProgressTasks = tasks.filter((task, index) => {
        if(task._status === "DOING"){
            return true;
        }
        return false;
    });
    return inProgressTasks;
}