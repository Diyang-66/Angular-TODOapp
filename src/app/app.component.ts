import { Component } from '@angular/core';
import { Model,TodoItem } from './model';

@Component({
  selector: 'todo',
  templateUrl: 'app.Component.html'
})

export class AppComponent {    //dependency - observable ---> state change --> publish....   C + RL
model = new Model();

getName(){
  return this.model.user;
}

getTodoItems(){
  return this.model.items.filter(item=>!item.done);
}

addItem(newItem:string){
  if(newItem!=''){
    this.model.items.push(new TodoItem(newItem,false))
  }
}
}