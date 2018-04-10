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

  todos: Todo[] = [];

  // service:TodoDataService;
  // constructor(_service: TodoDataService) {
  //   this.service = _service;
  //   this.todos = this.service.getAllTodos();
  // }

  constructor(private service: TodoDataService) {
    this.service.getAllTodosAPI()
      .subscribe(res => this.todos = res);
  }

  onAddTodo(todo: Todo) {
    if (todo.title) {
      this.service.addTodoAPI(todo)
        .subscribe(
          (newtodo) => {
            this.todos.push(newtodo)
          });
    }
  }

  addTodo(todo) {
    this.service.addTodo(todo);
    this.newTodo = new Todo();
  }

  onToggleTodoComplete(todo) {
    // this.service.toogleTodoComplete(todo);
    todo.complete = !todo.complete;
    this.service.toggleTodoCompleteAPI(todo)
      .subscribe((res) => {
        Object.assign(this.todos.find(m => m.id == res.id), res);
      });
  }

  toggleTodoComplete(todo) {
    this.service.toggleTodoComplete(todo);
  }

  onDeleteTodo(id) {
    // this.todos = this.service.deleteTodoById(id).todos;
    this.service.deleteTodoByIdAPI(id)
      .subscribe((res) => {
        let index = this.todos.findIndex(x => x.id == res.id);
        if (index > 0) {
          this.todos.splice(index, 1);
        }
      });
  }

  deleteTodo(id) {
    this.todos = this.service.deleteTodoById(id).todos;
  }
}
