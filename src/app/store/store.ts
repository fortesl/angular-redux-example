import { tassign } from 'tassign';
import { Todo } from '../todo';
import { ADD, REMOVE, REMOVE_ALL, TOGGLE } from './actions';
import { ITodosState, todosReducer, TODOS_INITIAL_STATE } from './todos-store';
import { IMessagesState, messagesReducer, MESSAGES_INITIAL_STATE } from './messages-store';
import { NgRedux } from 'ng2-redux';
import { combineReducers } from 'redux';

// tslint:disable-next-line:no-empty-interface
export interface IAppState {
  tasks: ITodosState;
  messages: IMessagesState;
}

export const INITIAL_STATE: IAppState = {
  tasks: TODOS_INITIAL_STATE,
  messages: MESSAGES_INITIAL_STATE
};

export const rootReducer = combineReducers({
  tasks: todosReducer,
  messages: messagesReducer
});
