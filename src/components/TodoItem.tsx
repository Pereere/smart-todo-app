import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {delTodo, doneTodo, updateTodo} from "../redux/todoSlice";

const TodoItem = (props: any) => {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(props.title);

    const handleDel = (e: any) => {
        e.preventDefault();
        dispatch(delTodo(props.id));
    }

    const handleDone = () => {
        dispatch(doneTodo(props.id))
    }

    const handleUpdate = (e:any) => {
        e.preventDefault();
        dispatch(updateTodo({
            id: props.id,
            title: newText,
        }));
    };

    return (
        <div className={ props.done ? "todo-list-div-checked" : "todo-list-div" }>
            <input
                type="checkbox"
                className="todo-list-check"
                onChange={handleDone}
                checked={props.done}
            />
            <p className="todo-list-text">
                <input
                    type="text"
                    className="input-list"
                    value={newText}
                    onChange={(e:any) => setNewText(e.target.value)}
                />
            </p>
            <div className="del-update">
                <button className="update-todo" onClick={handleUpdate}>
                    <span> <i className="check square icon"></i> </span>
                </button>
                <button className="trash-todo" onClick={handleDel}>
                    <span> <i className="trash icon"></i> </span>
                </button>
            </div>
        </div>
    );
};

export default TodoItem;