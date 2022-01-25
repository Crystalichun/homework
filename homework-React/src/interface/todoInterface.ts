import { StatusFilters } from "../features/filters/filtersSlice";

export interface StoreState {
  todos: TodoItem[],
  filter: string,
  tab: string,
  currentTodo: TodoItem,
}

export interface Action {
  type: string,
  payload: any
}

export interface TodoItem {
  id: number,
  title: string,
  text: string,
  status: string,
  createdTime: string,
  email?: string,
}

export interface InputItem{
  name: string,
  type: string,
  placeholder: string,
  value: string,
  attr: string
}

export interface FilterItem {
  status: StatusFilters,
  type: string,
}
