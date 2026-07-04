export default class  Task {
    constructor(id, description, status, createdAt, updatedAt){
        this._id = id;
        this._description = description;
        this._status = status;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
    get id(){
        return this._id;
    }
    get description(){
        return this._description;
    }
    get status(){
        return this._status;
    }
    get createdAt(){
        return this._createdAt;
    }
    get updatedAt(){
        return this._updatedAt;
    }
}