import { updateTask } from "./updateTask.js";
async function main(){
    let args = process.argv;
    console.log(args);
    if(!args || args.length < 4){
        console.log(`There must be at least 2 arguments`);
        return;
    }
    if(args[2].toLowerCase() != 'update'){
        console.log("The command should be add");
        return;
    }
    args.splice(0,3);
    let id = Number(args.splice(0,1)[0]);
    if(isNaN(id)){
        console.log(`id should be a number`);
        return;
    }
    const description = args.join(" ");
    const data = await updateTask(id, description);
    if(!data){
        console.error(`Error updating task`);
    } else {
        console.log(`STATUS CODE : 201, updated : \n`, data);
    }
}

main();