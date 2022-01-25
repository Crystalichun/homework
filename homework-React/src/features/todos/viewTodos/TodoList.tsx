import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import TodoListItem from './TodoListItem';
import Filter from '../../filters/Filter';
import { StatusFilters } from '../../filters/filtersSlice';
import { initCurrentTodo, tabTypeChanged } from '../../creators/creators';
import { initialTodo } from '../updateTodos/updateTodoSlice';
import { TabTypes } from '../../tab/tabSlice';
import { StoreState, TodoItem } from '../../../interface/todoInterface';

const selectFilterTodoIds = (state: StoreState) => {
  let filterTodos: TodoItem[];
  if (state.filter === StatusFilters.All) {
    filterTodos = state.todos;
  } else {
    filterTodos = state.todos.filter((todo) => state.filter === todo.status);
  }
  return filterTodos.map((todo) => todo.id);
};

function TodoList() {
  const dispatch = useDispatch();
  const todoIds = useSelector(selectFilterTodoIds);

  const renderedListItems = todoIds.map((todoId) => <TodoListItem key={todoId} id={todoId} />);

  const handleClickNew = () => {
    dispatch(tabTypeChanged(TabTypes.New));
    dispatch(initCurrentTodo(initialTodo));
  };

  return (
    <>
      <div className="todo-list-header">
        <Filter />
        <Button variant="primary" size="sm" type="button" onClick={handleClickNew}>New</Button>
      </div>
      <ul className="todo-list">
        {renderedListItems}
      </ul>
    </>
  );
}

export default TodoList;
