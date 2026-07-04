import fs from 'fs/promises';
import Task from './Task.js';

export default async function addTask(description){
    if(!description || description.trim().length === 0){
        console.log(`name should be not empty`);
        return;
    }
    let task = new Task(1, description, 'TO_DO', new Date().toISOString(), new Date().toISOString());
    let tasks = [];
    let tasksJson;
    try {
        //read file contents before : 
        tasksJson = await fs.readFile('./tasks.json', 'utf-8');
        tasks = JSON.parse(tasksJson);
        if(!Array.isArray(tasks)){
            tasks = [];
        }
        tasks.push(task);
        let currentId = 0;
        for(task of tasks){
            currentId = Math.max(currentId, task._id);
        }
        task._id = currentId + 1;
        await fs.writeFile('./tasks.json', JSON.stringify(tasks,null,2));
        return task;
    }
    catch(err){
        console.log(`error writing Task`, err);
    }
}