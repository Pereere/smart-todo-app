import React, {useState} from "react";
import { saveTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const NewTodo = () => {

    const [toggleForm, setToggleForm] = useState(true);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleToggle = () => {

        if(toggleForm){
            setToggleForm(false)
        }

        if(!toggleForm){
            setToggleForm(true)
        }
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(title && setTitle){
            dispatch(saveTodo({
                id: nanoid(),
                title,
                done: false
            }))
        }

        setTitle('');
    }

    return (
        <div className="input-con">

            <div className="guide-toggle" onClick={handleToggle}>
                <h4> New Todo </h4>
            </div>

            <div className={toggleForm ? "form-todo-div" : "no-show" }>
                <form className="form-todo" onSubmit={handleSubmit}>
                    <input
                        placeholder="Add New Todo"
                        className="form-input"
                        type="text"
                        required
                        onChange={(e:any)=>setTitle(e.target.value)}
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