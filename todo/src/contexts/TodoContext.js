import React from 'react';
import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos :[
        {
            id: 1,
            todo: "todo msg",
            completed: false
        },
    ],
        addTodo: (todo) => {},
        updatetodo: (id, todo) => {},
        deletetodo: (id) => {},
        togglecomplete: (id) => {}
    
});

// Custom hook to use the TodoContext
const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;