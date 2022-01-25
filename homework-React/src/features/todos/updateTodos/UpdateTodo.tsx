import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { TabTypes } from '../../tab/tabSlice';
import UpdateTodoInputItem from './UpdateTodoInputItem';
import {
  todoAdded, todoEdited, tabTypeChanged, statusFilterChanged,
} from '../../creators/creators';
import { StatusFilters } from '../../filters/filtersSlice';
import { InputItem } from '../../../interface/todoInterface'

const selectCurrrentTodo = (state) => state.currentTodo;
const selectCurrentTab = (state) => state.tab;

function UpdateTodo() {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrrentTodo);
  const currentTab = useSelector(selectCurrentTab);

  const [todoPayload, setTodoPayload] = useState({ ...currentTodo });

  useEffect(() => {setTodoPayload(currentTodo)},[currentTodo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentTab === TabTypes.New) {
      dispatch(todoAdded(todoPayload));
    } else {
      dispatch(todoEdited(todoPayload));
    }
    dispatch(statusFilterChanged(todoPayload.status));
  };

  const handleChange = (attr: string, e) => {
    setTodoPayload({
      ...todoPayload,
      [attr]: e.target.value,
    });
  };

  const handleCancel = () => {
    dispatch(tabTypeChanged(TabTypes.List));
  };

  const handleStatusChange = (e) => {
    setTodoPayload({
      ...todoPayload,
      status: e.target.value,
    });
  };

  const inputAttrs: InputItem[] = [
    {
      name: 'Title',
      type: 'text',
      placeholder: 'Please Input Title',
      value: todoPayload.title,
      attr: 'title',
    },
    {
      name: 'Text',
      type: 'text',
      placeholder: 'Please Input Text',
      value: todoPayload.text,
      attr: 'text',
    },
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Please Input Email',
      value: todoPayload.email,
      attr: 'email',
    },
  ];

  const inputItems = inputAttrs.map((item) => {
    const {
      name, type, placeholder, value, attr,
    } = item;
    return <UpdateTodoInputItem key={name} name={name} type={type} placeholder={placeholder} value={value} inputChange={(e) => handleChange(attr, e)} />;
  });

  return (
    <Form className="todo-add" onSubmit={handleSubmit} validated>
      {inputItems}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Status
        </Form.Label>
        <Col sm={10}>
          <Form.Select value={todoPayload.status} onChange={handleStatusChange}>
            {
              Object.keys(StatusFilters).slice(1).map((key) => <option key={key} value={StatusFilters[key]}>{StatusFilters[key]}</option>)
            }
          </Form.Select>
        </Col>
      </Form.Group>
      {currentTab === TabTypes.Edit &&
      <>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Create Time
          </Form.Label>
          <Col sm={10}>
            <Form.Control  disabled readOnly value={todoPayload.createdTime} />
          </Col>
        </Form.Group>
      </>
      }
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
          {' '}
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        </Col>
      </Form.Group>

    </Form>
  );
}

export default UpdateTodo;
