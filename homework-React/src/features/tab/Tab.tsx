import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../interface/todoInterface';

const selectCurrentTab = (state: StoreState) => state.tab;

function Tab() {
  const currentTab = useSelector(selectCurrentTab);
  const activeKey: string = currentTab === 'list' ? currentTab : 'update';

  return (
    <Nav className="todo-nav" variant="tabs" activeKey={activeKey}>
      <Nav.Item>
        <Nav.Link eventKey="list" disabled>List</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="update" disabled>Update</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Tab;
