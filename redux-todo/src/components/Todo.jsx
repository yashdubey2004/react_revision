import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Todos</h1>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span>{t.text}</span>
            <button onClick={() => dispatch(removeTodo({ id: t.id }))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
