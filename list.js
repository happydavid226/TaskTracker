import { loadTasks } from "./fileOps.js";

export default async function list(){
    return await loadTasks();
}