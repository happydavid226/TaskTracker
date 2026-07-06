import { markDone } from "./markDone.js";

async function main(){
    let args = process.argv;
    console.log(args);
    if(!args || args.length != 4){
        console.log(`There must be only 2 arguments. the last argument should be an integer`);
        return;
    }
    if(args[2].toLowerCase() != 'mark-done'){
        console.log("The command should be mark-in-done <id>");
        return;
    }
    args.splice(0,3);
    let id = Number(args.splice(0,1)[0]);
    try {
        let updatedTasks = await markDone(id);
        console.log(`the updated tasks are : `, updatedTasks);
    } catch(err){
        console.log(`an error happened `, err);
    }
}

main();