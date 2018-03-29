import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});


it('test create object', () => {
  var todo = new Todo({
    title: 'hello',
    complete: true,
    id: 100
  });
  expect(todo.title).toEqual('hello');
  expect(todo.complete).toEqual(true);
  expect(todo.id).toEqual(100);
});