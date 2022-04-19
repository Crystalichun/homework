import {
  TodosTypes, CurrentTodoTypes, TabEnumTypes, StatusFilterTypes,
} from './enumType';
import {TodoItem } from "../../interface/todoInterface";

export const todoAdded = (todo: TodoItem) => ({
  type: TodosTypes.TodoAdded,
  payload: todo,
});

export const todoToggled = (id: number) => ({
  type: TodosTypes.TodoToggled,
  payload: id,
});

export const todoDeleted = (id: number) => ({
  type: TodosTypes.TodoDeleted,
  payload: id,
});

export const todoEdited = (todo: TodoItem) => ({
  type: TodosTypes.TodoEdited,
  payload: todo,
});

export const initCurrentTodo = (todo: TodoItem) => ({
  type: CurrentTodoTypes.InitCurrentTodo,
  payload: todo,
});

export const updateCurrentTodo = (todo: TodoItem) => ({
  type: CurrentTodoTypes.UpdateCurrentTodo,
  payload: todo,
});

export const tabTypeChanged = (type: string) => ({
  type: TabEnumTypes.TabTypeChanged,
  payload: type,
});

export const statusFilterChanged = (status: string) => ({
  type: StatusFilterTypes.StatusFilterChanged,
  payload: status,
});
