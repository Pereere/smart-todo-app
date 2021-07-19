import React, {useState} from "react";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const allTodos = useSelector((state: any) => state.todoReducer.todos);

    const [search, setSearch] = useState('');

    const displayTodos = allTodos.filter( (elem: any) => elem.title.includes(search)).map((item: any) => {
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
    const toggleData = useSelector( (state:any) => state.toggleReducer);

    const verify = () => {
        if (allTodos.length < 1) {
            return <div className="no-todo-left">
                 <p className="message"> <span> <i className="smile outline icon"></i> </span> You've no Todos Left </p>
            </div>
        }

        if (displayTodos.length > 1){
            return displayTodos
        }else{
            return (
                <div className="no-todo-left">
                    <p> <span> <i className="smile outline icon"> </i> </span>No Search Match </p>
                </div>
            )
        }
    };

    return (
        <div className="todo-list-display">
            <div className={toggleData ? "search-on" : "search-off"}>
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search Todo"
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                />
            </div>
            {verify()}
        </div>
    );
};

export default TodoList;