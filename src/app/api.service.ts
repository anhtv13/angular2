import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Http, Response, Headers } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

const API_URL = environment.apiUrl;
let headers = new Headers({ 'Content-Type': 'application/json' });        

@Injectable()
export class ApiService {  
  option = { headers: new Headers({ 'Content-Type': 'application/json' }) };

  constructor(private http: Http) { }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public getAllTodos() {
    return this.http
      .get(API_URL + '/todos/')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Todo(todo));
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number) {
    return this.http
      .get(API_URL + '/todos/' + todoId)
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo) {    
    return this.http
      //.post(API_URL + '/todos/', JSON.stringify(todo), options)
      .post(API_URL + '/todos/', todo, {headers: headers})
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Todo) {
    return this.http
      .put(API_URL + '/todos/', todo)
      .map(res => {
        return res.json();
      })
  }

  public deleteTodoById(todoId: number) {
    return this.http
      .delete(API_URL + '/todos/' + todoId)
      .map(res => {
        return new Todo(res.json());
      })
      .catch(this.handleError);
  }
}
