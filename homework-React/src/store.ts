import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { rootSaga } from './sagas';
import { StoreState, TodoItem } from "./interface/todoInterface";
import { StatusFilters } from "./features/filters/filtersSlice";
import { TabTypes } from "./features/tab/tabSlice";
import { initialTodo} from "./features/todos/updateTodos/updateTodoSlice";

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

const initialTodos: TodoItem[] = [
  {
    id: 0,
    title: 'Learn React',
    text: 'Learn React',
    status: 'new',
    createdTime: '2022/1/25 下午1:55:20',
    email: 'abc@example.com',
  },
  {
    id: 1,
    title: 'Learn React',
    text: 'Learn Redux',
    status: 'new',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 2,
    title: 'Build something fun!',
    text: 'Build something fun!',
    status: 'done',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 3,
    title: 'Practice Dance',
    text: 'Practice Dance',
    status: 'expired',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 4,
    title: 'Practice Dance',
    text: 'Practice Dance',
    status: 'new',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 5,
    title: 'Build something fun!',
    text: 'Build something fun!',
    status: 'done',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 6,
    title: 'Play',
    text: 'Practice Dance',
    status: 'expired',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 7,
    title: 'Learn Redux',
    text: 'Learn Redux',
    status: 'new',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 8,
    title: 'Learn Redux',
    text: 'Practice Dance',
    status: 'expired',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 9,
    title: 'Learn JavaScript',
    text: 'Practice JavaScript',
    status: 'expired',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 10,
    title: 'Learn SCSS',
    text: 'Practice SCSS',
    status: 'expired',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 11,
    title: 'Learn Redux',
    text: 'Practice Dance',
    status: 'done',
    createdTime: '2022/1/25 下午1:55:20',
  },
  {
    id: 12,
    title: 'Build something fun!',
    text: 'Practice Dance',
    status: 'expired',
    createdTime: '2022/1/25 下午1:55:20',
  }
];
const preloadedState: StoreState = {
  todos: initialTodos,
  filter: StatusFilters.All,
  tab: TabTypes.List,
  currentTodo: initialTodo,
}

const store = createStore(rootReducer, preloadedState, composedEnhancer);
sagaMiddleware.run(rootSaga);
export default store;
