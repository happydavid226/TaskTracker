export function checkId(id){
    id = Number(id);
    if(typeof id !== 'number'){
        throw new Error("Id must be a number");
    }
    return id;
}

export function checkDescription(description){
    if(!description || (typeof description === 'undefined') || (description.trim().length === 0)){
        throw new Error('description should not be empty');
    }
}