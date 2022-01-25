import { TodosTypes } from '../../creators/enumType';
import { TodoItem, Action } from '../../../interface/todoInterface';
import { StatusFilters } from '../../filters/filtersSlice';
import update from 'immutability-helper';

const initialState = [];

function nextTodoId(todos: TodoItem[]) :number{
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state: TodoItem[] = initialState, action: Action) {
  switch (action.type) {
    case TodosTypes.TodoInit: {
      return [
        ...state,
        ...action.payload,
      ];
    }
    case TodosTypes.TodoAdded: {
      const newTodo = {
        ...action.payload,
        id: nextTodoId(state),
        createdTime: new Date().toLocaleString(),
      };
      return update(state, {$push: [newTodo]});
    }
    case TodosTypes.TodoDeleted: {
      const deleteIndex = state.findIndex((todo) => todo.id === action.payload);
      return update(state, { $splice: [[deleteIndex, 1]]});
    }
    case TodosTypes.TodoToggled: {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (state[index].status === StatusFilters.Expired) {
        return state;
      }
      const newStatus = state[index].status === StatusFilters.Done ? StatusFilters.New : StatusFilters.Done;
      return update(state, {[index]: { status: {$set: newStatus}}});
    }
    case TodosTypes.TodoEdited: {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      return update(state, {[index]: {$set: action.payload}});
    }
    default:
      return state;
  }
}
