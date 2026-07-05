import fs from 'fs/promises';
import Task from './Task.js';
import {loadTasks, writeTasks} from './fileOps.js';
import { write } from 'fs';

export default async function addTask(description){
    if(!description || description.trim().length === 0){
        console.log(`name should be not empty`);
        return;
    }
    let tasks = [];
    let tasksJson;
    try {
        const tasks = await loadTasks();
        if(!tasks){
            tasks = [];
        }
        let currentId = 0;
        for(const task of tasks){
            currentId = Math.max(currentId, task._id);
        }
        const task = new Task(currentId + 1, description, 'TO_DO', new Date().toISOString(), new Date().toISOString());
        tasks.push(task);
        await writeTasks(tasks);
        return task;
    }
    catch(err){
        console.log(`error writing Task`, err);
    }
}