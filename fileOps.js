import fs from 'fs/promises';

export async function loadTasks(){
    try {
        const tasksString = await fs.readFile('./tasks.json', 'utf-8');
        const tasks = JSON.parse(tasksString);
        return tasks;
    } catch(err){
        console.log(`error reading data or parsing to json ${err.message}\ntry again once`);
        await writeTasks([]);
        return [];
    }
}

export async function writeTasks(tasks){
    try {
        await fs.writeFile('./tasks.json', JSON.stringify(tasks, null,2))
        console.log(`finished writing object`);
    } catch(err){
        console.log(`error writing tasks`, err);
    }
}
