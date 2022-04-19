import { put, takeEvery } from 'redux-saga/effects';
import {
  TodosTypes, CurrentTodoTypes, TabEnumTypes,
} from './features/creators/enumType';
import { TabTypes } from './features/tab/tabSlice';
import { initialTodo } from './features/todos/updateTodos/updateTodoSlice';

function* initTodoList() {
  yield put({ type: TabEnumTypes.TabTypeChanged, payload: TabTypes.List });
  yield put({ type: CurrentTodoTypes.InitCurrentTodo, payload: initialTodo });
}

export function* rootSaga() {
  yield takeEvery(TodosTypes.TodoAdded, initTodoList);
  yield takeEvery(TodosTypes.TodoEdited, initTodoList);
}
