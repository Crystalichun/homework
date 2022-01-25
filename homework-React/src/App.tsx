import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from './features/todos/viewTodos/TodoList';
import UpdateTodo from './features/todos/updateTodos/UpdateTodo';
import Tab from './features/tab/Tab';
import { TabTypes } from './features/tab/tabSlice';

const selectTab = (state) => state.tab;

function App() {
  const currentTab = useSelector(selectTab);

  return (
    <div className="App">
      <nav>
        <section className="title">
          <h1>Crystal Todo List</h1>
        </section>
      </nav>
      <main>
        <section className="todo">
          <Tab />
          <div className="todo-container">
            {currentTab === TabTypes.List ? <TodoList /> : <UpdateTodo />}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
