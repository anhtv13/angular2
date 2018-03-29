import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoDataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'viet anh';
  newTodo: Todo = new Todo();

  todos: Todo[];

  // service:TodoDataService;
  // constructor(_service: TodoDataService) {
  //   this.service = _service;
  //   this.todos = this.service.getAllTodos();
  // }

  constructor(private service:TodoDataService){
    this.todos = service.getAllTodos();
  }

  onAddTodo(todo:Todo){
    this.service.addTodo(todo);
  }

  addTodo(todo) {
    this.service.addTodo(todo);
    this.newTodo = new Todo();
  }

  onToggleTodoComplete(todo) {
    this.service.toogleTodoComplete(todo);
  }

  toggleTodoComplete(todo) {
    this.service.toogleTodoComplete(todo);
  }

  onDeleteTodo(id){
    this.todos = this.service.deleteTodoById(id).todos;
  }

  deleteTodo(id) {
   this.todos = this.service.deleteTodoById(id).todos;
  }
}
