import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITodo } from './interfaces/itodo';
import { ModalComponent } from './modal/modal.component';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number = 0;
  
  constructor(private todoService: TodoService, private modalService: NgbModal){

  }
  ngOnInit() {
    this.todoList = this.todoService.GetList()
  }
  addTodo():void {
    this.todoService.addTodo(this.todoTitle)
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }
 async deleteTodo(todo:ITodo) {
   const modal = this.modalService.open(ModalComponent)
   modal.componentInstance.modalInstance = modal
   let result = await modal.result
   if(result === 'yes') {
    this.todoService.deleteTodo(todo);
   }
  }
}
