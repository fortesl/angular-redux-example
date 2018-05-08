import { INCREMENT, DECREMENT } from './actions';
import { tassign } from 'tassign';

export interface IMessagesState {
  counter: number;
}

export const MESSAGES_INITIAL_STATE: IMessagesState = {
  counter: 0
};

export function messagesReducer(state: IMessagesState = MESSAGES_INITIAL_STATE, action): IMessagesState {
  switch (action.type) {
    case INCREMENT:
      return tassign(state, {counter: state.counter + 1 });
    case DECREMENT:
      return tassign(state, {counter: state.counter ? state.counter - 1 : 0 });
  }
  return state;
}
