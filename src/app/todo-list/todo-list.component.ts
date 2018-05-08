import { Component } from '@angular/core';
import { Todo } from '../todo';
import { ADD, REMOVE, TOGGLE } from '../store/actions';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../store/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  constructor(private ngRedux: NgRedux<IAppState>) {}
  title = 'Todos List';
  @select((s) => s.tasks.todos) todos;

  addTodo(input: HTMLInputElement) {
    if (input.value) {
      const todo: Todo = {
        id: 0,
        title: input.value,
        selected: false
      };
      this.ngRedux.dispatch({type: ADD, todo: todo});
      input.value = '';
      input.focus();
    }
  }

  removeTodo(todo: Todo) {
    this.ngRedux.dispatch({type: REMOVE, todo: todo});
  }

  toggleTodo(todo: Todo) {
    this.ngRedux.dispatch({type: TOGGLE, todo: todo});
  }
}
