import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  todos: Todo[];

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  deleteTodo(id: number) {
    this.delete.emit(id);
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }
}
