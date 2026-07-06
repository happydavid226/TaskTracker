import { loadTasks } from "./fileOps.js";
import { taskExists } from "./utils.js";
import { checkId } from "./validation.js";

export default async function listToDo(){
    const tasks = await loadTasks();
    const toDoTasks = tasks.filter((task, index) => {
        if(task._status === "TO_DO"){
            return true;
        }
        return false;
    });
    return toDoTasks;
}