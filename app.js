import addTask from "./addTask.js";
import  updateTask  from "./updateTask.js";
import  list  from "./list.js";
import  listDone  from "./listDone.js";
import  listToDo  from "./listTodo.js";
import listInProgress from "./listInProgress.js";
import deleteTask from "./deleteTask.js";
import markInProgress from "./markInProgress.js";
import markDone from "./markDone.js";

const help = `
                help
                ====
                # Adding a new task
                node app.js add "Buy groceries"
                # Updating and deleting tasks
                node app.js update 1 "Buy groceries and cook dinner"
                task-cli delete 1
                # Marking a task as in progress or done
                node app.js mark-in-progress 1
                node app.js mark-done 1
                # Listing all tasks
                node app.js list
                # Listing tasks by status
                node app.js list done
                node app.js list todo
                node app.js list in-progress
`;

const fallback = `type node app.js help' for help`;
async function main(){
    try {
        let args = process.argv;
        if(args.length < 4){
            if(args.length ===3 && args[2].toLowerCase() === "help"){
                console.log(help);
                return;
            }
            if(args.length === 3 && args[2] === "list"){
                const tasks = await list();
                console.log(`the tasks are : \n`, tasks);
                return;
            }
            console.log("too few arguments, type ", fallback);
            throw new Error("too few arguments ", fallback);
        }
        if(args.length > 5){
            throw new Error("too much arguments ", fallback);
        }
        if(args.length === 5){
            if(args[2] !== "update"){
                console.log("wrong command ", fallback);
            }
            let id = args[3];
            let description =  args[4];
            let updatedTasks = await updateTask(id, description);
            console.log(`updated tasks are : \n`, updatedTasks);
            return;
        }
        if(args[2] === "add"){
            let description = args[3];
            let addedTasks = await addTask(description);
            console.log(`added tasks are : \n`, addedTasks);
            return;
        }
        if(args[2] === "delete"){
            let id = args[3];
            let deletedTasks = await deleteTask(id);
            console.log(`deleted tasks : \n`, deletedTasks);
            return;
        }
        if(args[2] === "mark-in-progress"){
            let id = args[3];
            let updatedTasks = await markInProgress(id);
            console.log(`updated tasks : \n`, updatedTasks);
            return;
        }
        if(args[2] === "mark-done"){
            let id = args[3];
            let updatedTasks = await markDone(id);
            console.log(`updated tasks : \n`, updatedTasks);
            return;
        }
        if(args[2] === "list"){
            if(args[3] === "done"){
                const tasks = await listDone();
                console.log(`done tasks : \n`, tasks);
                return;
            } 
            if(args[3] === "in-progress"){
                const tasks = await listInProgress();
                console.log(`in progress tasks are : \n`, tasks);
                return;
            }
            if(args[3] === "todo"){
                const tasks = await listToDo();
                console.log(`to do tasks are : \n`, tasks);
                return;
            }
        }
        if(args[3] === "update"){
            throw new Error("update should have 3 arguments : update <id> <description>")
        }
        console.log(`incorrect command, ` , fallback);
    } catch(err){
        console.log(`error happened : ${err.message}`);
    }
}

main();