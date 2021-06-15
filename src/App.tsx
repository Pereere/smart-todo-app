import React from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
    return(
        <div className="con-div-todo">
            <div className="con-div-todo-inner">
                <div className="div-todo-head">
                    <h2 className="smart-todo-head"> SM<span className="a">A</span> <span className="r">R</span>
                        <span className="t">T </span> todos </h2>
                    <h5 className="tagline-head"> Do it the Smart Way </h5>

                    <div className="logo-head">
                        <div className="logo1"></div>
                        <div className="logo2"></div>
                        <div className="logo3"></div>
                    </div>
                </div>

                <NewTodo />
                <TodoList />
            </div>

            <div>
                <p> Designed by Smart Programmer </p>
            </div>
        </div>
    )
}

export default App;