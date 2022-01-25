export enum TodosTypes {
  TodoInit= 'todos/todoInit',
  TodoDeleted= 'todos/todoDeleted',
  TodoAdded='todos/todoAdded',
  TodoToggled= 'todos/todoToggled',
  TodoEdited= 'todos/todoEdited',
}

export enum CurrentTodoTypes {
  InitCurrentTodo='todos/initCurrentTodo',
  UpdateCurrentTodo= 'todos/updateCurrentTodo',
}

export enum TabEnumTypes {
  TabTypeChanged= 'tab/tabTypeChanged',
}

export enum StatusFilterTypes  {
  StatusFilterChanged='filters/statusFilterChanged',
}
