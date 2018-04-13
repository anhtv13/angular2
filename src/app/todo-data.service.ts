import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor(private api: ApiService) { }

  // POST
  addTodo(todo: Todo): number {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this.lastId;
  }

  //DELETE
  deleteTodoById(id: number): TodoDataService {
    //Return array without item to be deleted
    this.todos = this.todos.filter(todo => todo.id !== id);

    // //Delete item from array
    // let todo = this.getTodoById(id);
    // let index = this.todos.indexOf(todo);
    // this.todos.splice(index,1);

    return this;
  }

  //PUT
  updateTodoById(id: number, values: Object): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  //GET By ID
  getTodoById(id: number): Todo {
    return this.todos.filter(m => m.id === id).pop();
  }

  //GET All
  getAllTodos(): Todo[] {
    return this.todos;
  }

  //GET Count
  getCount() {
    debugger
    return this.todos.length;
  }

  toggleTodoComplete(todo: Todo) {
    // let updatedTodo = this.updateTodoById(todo.id, {
    //   complete :!todo.complete
    // });
    // return updatedTodo;
    todo.complete = !todo.complete;
    return todo;
  }


  //REST API
  addTodoAPI(todo:Todo):Observable<Todo>{
    return this.api.createTodo(todo);
  }
  
  deleteTodoByIdAPI(id: number):Observable<Todo>{
    return this.api.deleteTodoById(id);
  }

  updateTodoAPI(todo:Todo):Observable<Todo>{
    return this.api.updateTodo(todo);
  }

  getAllTodosAPI(): Observable<Todo[]> {  
    return this.api.getAllTodos();    
  }

  getCountAPI(){
    return this.getAllTodos().length;
  }

  getTodoByIdAPI(todoId:number):Observable<Todo>{
    return this.api.getTodoById(todoId);
  }

  toggleTodoCompleteAPI(todo:Todo):Observable<Todo>{
    return this.api.updateTodo(todo);
  }
}
