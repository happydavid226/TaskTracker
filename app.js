import addTask from './addTask.js'
async function main(){
    let args = process.argv;
    console.log(args);
    if(!args || args.length < 4){
        console.log(`There must be at least 2 arguments`);
        return;
    }
    if(args[2].toLowerCase() != 'add'){
        console.log("The command should be add");
        return;
    }
    args.splice(0,3);
    const description = args.join(" ");
    const data = await addTask(description);
    if(!data){
        console.error(`Error adding task`);
    } else {
        console.log(`STATUS CODE : 201, added : \n`, data);
    }
}

main();