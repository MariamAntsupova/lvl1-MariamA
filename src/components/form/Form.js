import React, { useState } from "react";
import "./Form.scss";
import Todo from "./Todo";
function Form() {
    const [inputText , setIputText] = useState("");
    const [todos , setTodos] = useState([]);

    const inputTextHendler = (e) => {
        setIputText(e.target.value);
    }
    const submitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos , {text: inputText , complited: false , id:Math.random() * 1000 }]);
        setIputText("");
    }

    return(
        <div className="main">
            <form>
                <div className="todos">
                    <p>Todos</p>
                </div>
                <div className="input">
                    <input name='title' placeholder="Enter Todo Here" value={inputText} onChange={inputTextHendler} />
                    <button onClick={submitTodo} className="todo-button" type="submit">
                        Submit
                    </button> 
                </div>
                <ul>
                    {todos.map(todo => (
                        <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id} text={todo.text} setIputText={setIputText}/>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default Form ;