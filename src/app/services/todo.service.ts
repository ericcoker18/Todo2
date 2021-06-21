import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo [] = [];
  todoId: number = 0
  constructor() {
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', id:0 , description:"",  },
    
    ];
   }

  addTodo(title:string):void {
    this.todoList.push({
      title: title,
      id:++this.todoId, description:""
    });
}
deleteTodo(todo:ITodo) {
  const index = this.todoList.findIndex(todoItem => todoItem === todo);
  this.todoList.splice(index, 1);
}

GetList() {

  return this.todoList

}
  }


