export function taskExists(id, tasks){
    for(const task of tasks){
        if(task._id == id){
            return true;
        }
    }
    return false;
}