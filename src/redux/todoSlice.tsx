import {createSlice} from "@reduxjs/toolkit";
import {PayloadAddTodo, PayloadUpdate, TodoState} from "../models/todos";


const initialState = {
    todos: [
        {id: '1', title: 'Visit Machinep.com', done: true},
        {id: '2', title: 'Do some coding', done: false},
        {id: '3', title: 'Do some trading', done: false},
    ]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        saveTodo: (state: TodoState, action: PayloadAddTodo) => {
            state.todos.push(action.payload);
        },

        delTodo: (state: TodoState, action: { payload: string }) => {
            const delIndex = state.todos.findIndex((item: any) => item.id === action.payload);
            if (delIndex !== -1) {
                state.todos.splice(delIndex, 1);
            }
            return state;
        },

        doneTodo: (state: TodoState, action: { payload: string }) => {
            const doneIndex = state.todos.findIndex((item: any) => item.id === action.payload);
            state.todos[doneIndex].done = !state.todos[doneIndex].done;
        },

        updateTodo: (state: TodoState, action: PayloadUpdate) => {
            const updateIndex = state.todos.findIndex((item: any) => item.id === action.payload.id);
            state.todos[updateIndex].title = action.payload.title;
        },

        resetTodo: (state: TodoState) => {
            state.todos = [];
        }
    }
});

export const {saveTodo, delTodo, doneTodo, updateTodo, resetTodo} = todoSlice.actions;
export default todoSlice.reducer;