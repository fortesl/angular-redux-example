import { tassign } from 'tassign';
import { Todo } from '../todo';
import { ADD, REMOVE, REMOVE_ALL, TOGGLE } from './actions';

// tslint:disable-next-line:no-empty-interface
export interface ITodosState {
  todos: Todo[];
  lastUpdated: number;
}

export const TODOS_INITIAL_STATE: ITodosState = {
  todos: [],
  lastUpdated: 0
};

class ActionHandlers {
  private items: Todo[];
  constructor(private state: ITodosState, private action: any) {
    this.items = state.todos.filter((item) => true);
  }

  addTodos() {
    this.action.todo.id = this.state.todos ? this.state.todos.length + 1 : 1;
    this.items.unshift(this.action.todo);
    return tassign(this.state, { todos: this.items, lastUpdated: Date.now()});
  }

  removeTodos() {
    this.items.splice(this.items.indexOf(this.action.todo), 1);
    return tassign(this.state, { todos: this.items, lastUpdated: Date.now()});
  }

  toggleTodos() {
    this.items[this.items.indexOf(this.action.todo)].selected = !this.items[this.items.indexOf(this.action.todo)].selected;
    return tassign(this.state, { todos: this.items, lastUpdated: this.state.lastUpdated});
  }
}

export function todosReducer(state: ITodosState = TODOS_INITIAL_STATE, action: any): ITodosState {
  const actionHandlers = new ActionHandlers(state, action);
  switch (action.type) {
    case ADD: return actionHandlers.addTodos();
    case REMOVE: return actionHandlers.removeTodos();
    case REMOVE_ALL:
      return tassign(state, { todos: [], lastUpdated: Date.now()});
    case TOGGLE: return actionHandlers.toggleTodos();
  }
  return state;
}
