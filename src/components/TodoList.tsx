import React from "react";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const allTodos = useSelector((state: any) => state.todoReducer.todos);
    const displayTodos = allTodos.map((item: any) => {
        return (
            <div key={item.id}>
                <TodoItem
                    id={item.id}
                    title={item.title}
                    done={item.done}
                />
            </div>
        )
    })

    const verify = () => {
        if (allTodos.length < 1) {
            return <div className="no-todo-left">
                 <p className="message"> <span> <i className="smile outline icon"></i> </span> You've no Todos Left </p>
            </div>
        } else {
            return displayTodos
        }
    };

    return (
        <div>
            {verify()}
        </div>
    );
};

export default TodoList;