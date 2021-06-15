import {createSlice} from "@reduxjs/toolkit";
import {PayloadAddTodo, PayloadUpdate, TodoState} from "../models/todos";


const initialState = {
    todos: [
        {id: '1', title: 'Do some coding', done: false},
        {id: '2', title: 'Do some trading', done: false},
        {id: '3', title: 'Get more Guitars', done: false},
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
            const delIndex = state.todos.findIndex((item:any)=>item.id === action.payload);
            state.todos.splice(delIndex, 1);
            return state;
        },

        doneTodo: (state: TodoState, action: {payload: string}) => {
            const doneIndex = state.todos.findIndex((item:any) => item.id === action.payload);
            state.todos[doneIndex].done = !state.todos[doneIndex].done;
        },

        updateTodo: (state: TodoState, action: PayloadUpdate) => {
            const updateIndex = state.todos.findIndex((item:any) => item.id === action.payload.id);
            state.todos[updateIndex].title = action.payload.title;
        }
    }
});

export const {saveTodo, delTodo, doneTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;