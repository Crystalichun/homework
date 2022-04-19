import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  todoToggled, todoDeleted, updateCurrentTodo, tabTypeChanged,
} from '../../creators/creators';
import { TabTypes } from '../../tab/tabSlice';
import { StoreState } from '../../../interface/todoInterface';


const selectTodoById = (state: StoreState, todoId: number) => state.todos.find((todo) => todo.id === todoId);

function TodoListItem({ id }) {
  const todo = useSelector((state: StoreState) => selectTodoById(state, id));
  const { title, status } = todo;
  const done: boolean = status === 'done';
  const className: string = `todo-text todo-status-${status}`;

  const dispatch = useDispatch();
  const handleStatusChanged = () => {
    dispatch(todoToggled(id));
  };

  const handleClickEdit = () => {
    dispatch(updateCurrentTodo(todo));
    dispatch(tabTypeChanged(TabTypes.Edit));
  };

  const handleClickDelete = () => {
    dispatch(todoDeleted(id));
  };

  return (
    <li>
      <div className="todo-item">
        <div className="todo-content">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            disabled={status === 'expired'}
            onChange={handleStatusChanged}
          />
          <span className={className}>{title}</span>
        </div>
        <div className="todo-operator">
          <span className="mdi mdi-square-edit-outline todo-edit"  onClick={handleClickEdit}/>
          <span className="mdi mdi-trash-can-outline todo-delete"  onClick={handleClickDelete}/>
        </div>
      </div>
    </li>
  );
}

export default TodoListItem;
