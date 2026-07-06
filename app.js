import { markInProgress } from "./markInProgress.js";

async function main(){
    let args = process.argv;
    console.log(args);
    if(!args || args.length != 4){
        console.log(`There must be only 2 arguments. the last argument should be an integer`);
        return;
    }
    if(args[2].toLowerCase() != 'mark-in-progress'){
        console.log("The command should be mark-in-progress <id>");
        return;
    }
    args.splice(0,3);
    let id = Number(args.splice(0,1)[0]);
    if(isNaN(id)){
        console.log(`id should be a number`);
        return;
    }
    const data = await markInProgress(id);
    if(typeof data === 'undefined' || data.length === 0){
        console.error(`no thing was updated`);
    } else {
        console.log(`STATUS CODE : 200,  deleted : \n`, data);
    }
}

main();