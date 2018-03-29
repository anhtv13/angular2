import { TestBed, inject } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';

import { Todo } from './todo'

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));


  it('Post Todo object', inject([TodoDataService], (service: TodoDataService) => {
    let todo1 = new Todo({ title: 'title 1', complete: true });
    let todo2 = new Todo({ title: 'title 2', complete: true });
    expect(service.addTodo(todo1)).toEqual(1);
  }));

  it('Update Todo object', inject([TodoDataService], (service: TodoDataService) => {
    var title3 = 'title 3';
    let todo1 = new Todo({ title: 'title 1', complete: true });
    service.addTodo(todo1);
    let todo2 = service.updateTodoById(1, { title: title3 });
    expect(todo2.title).toEqual(title3);
  }));

  it('Get All Todo Object', inject([TodoDataService], (service: TodoDataService) => {
    let todo1 = new Todo({ title: 'title 1', complete: true });
    let todo2 = new Todo({ title: 'title 2', complete: true });
    service.addTodo(todo1);
    service.addTodo(todo2);
    let todoArray = service.getAllTodos();
    expect(todoArray).toEqual([todo1, todo2]);
  }));


  it('test post todo object', inject([TodoDataService], (service: TodoDataService) => {
    let todo3 = new Todo({
      title:'title 3',
      complete:true
    });
    service.addTodo(todo3);
    expect(service.getCount()).toEqual(1);
  }))
});