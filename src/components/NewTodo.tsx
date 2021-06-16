import React, {useState} from "react";
import {saveTodo, resetTodo} from "../redux/todoSlice";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";

const NewTodo = () => {

    const [toggleForm, setToggleForm] = useState(true);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const allTodos = useSelector((state: any) => state.todoReducer.todos);
    const handleToggle = () => {

        if (toggleForm) {
            setToggleForm(false)
        }

        if (!toggleForm) {
            setToggleForm(true)
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (title && setTitle) {
            dispatch(saveTodo({
                id: nanoid(),
                title,
                done: false
            }))
        }

        setTitle('');
    };

    const handleReset = () => {
        if (allTodos.length < 1) {
            alert("Hey! No todo item to reset :)");
        }

        if (allTodos.length > 0) {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("By resetting, you delete all todo items")) {
                dispatch(resetTodo());
            } else {
                return;
            }
        }

    };

    return (
        <div className="input-con">
            <div className="new-reset">
                <div className="guide-toggle" onClick={handleToggle}>
                    <h4> New </h4>
                </div>

                <div className="guide-toggle" onClick={handleReset}>
                    <h4> Reset </h4>
                </div>

            </div>

            <div className={!toggleForm ? "form-todo-div" : "no-show"}>
                <form className="form-todo" onSubmit={handleSubmit}>
                    <input
                        placeholder="Add New Todo"
                        className="form-input"
                        type="text"
                        required
                        onChange={(e: any) => setTitle(e.target.value)}
                        value={title}
                    />
                    <input
                        type="submit"
                        value="Add Todo"
                        className="form-submit"
                    />
                </form>
            </div>

        </div>
    );
};

export default NewTodo;