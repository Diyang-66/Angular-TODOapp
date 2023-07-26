

export class Model {
    user;
    items;
    constructor() {
        this.user = "Reeves";
        this.items = [new TodoItem("Buy Flowers", true),
                    new TodoItem("Get Shoes", false),
                    new TodoItem("Collect Tickets", false),
                    new TodoItem("Call Joe", false)]
    }
}


export class TodoItem {
    action;
    done;
    constructor(action:string, done:boolean) {
        this.action = action;
        this.done = done;
    }
}
