import { combineReducers } from 'redux';
import todosReducer from './features/todos/viewTodos/todosSlice';
import filterReducer from './features/filters/filtersSlice';
import tabReducer from './features/tab/tabSlice';
import updateTodoReducer from './features/todos/updateTodos/updateTodoSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer,
  tab: tabReducer,
  currentTodo: updateTodoReducer,
});

export default rootReducer;
