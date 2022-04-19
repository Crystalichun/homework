import { CurrentTodoTypes } from '../../creators/enumType';
import { TodoItem, Action } from '../../../interface/todoInterface';
import update from 'immutability-helper';

export const initialTodo: TodoItem = {
  id: 0,
  title: '',
  text: '',
  status: 'new',
  email: '',
  createdTime: '',
};

export default function updateTodoReducer(state: TodoItem = initialTodo, action: Action) {
  switch (action.type) {
    case CurrentTodoTypes.InitCurrentTodo: {
      return {
        ...action
          .payload,
      };
    }
    case CurrentTodoTypes.UpdateCurrentTodo: {
      return update(state, {$set: action.payload});
    }
    default:
      return state;
  }
}
