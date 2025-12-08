import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Sample Todo'
        }
    ]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("ADD GOT:", action.payload);
            state.todos.push({
                id: nanoid(),
                text: action.payload.text
            });
        },

        removeTodo: (state, action) => {
            console.log("REMOVE GOT:", action.payload);
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },

        updateTodo: (state, action) => {
            state.todos.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text;
                }
            });
        }
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
