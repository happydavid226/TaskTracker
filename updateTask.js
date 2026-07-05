import {loadTasks, writeTasks } from './fileOps.js'; 

function taskExists(id, tasks){
    for(const task of tasks){
        if(task._id == id){
            return true;
        }
    }
    return false;
}

export async function updateTask(id, description){
    if(typeof description === 'undefined' ||description.trim().length === 0){
        throw new Error("description is null, no update happened")
    }
    let tasks = [];
    let updatedTasks = [];
    try {
        tasks = await loadTasks();
        if(!taskExists(id, tasks)){
            throw new Error("task id does not exist");
        } else {
            tasks.forEach((task, index)=>{
                if(tasks[index]._id === id){
                    tasks[index]._description = description;
                    tasks[index]._updatedAt = new Date().toISOString();
                    updatedTasks.push(tasks[index]);
                }
            });
            await writeTasks(tasks);
            console.log(`finished updating tasks`);
        }
    } catch(err){
        console.log(`error : ${ err.message }`);
    }
    return updatedTasks;
}