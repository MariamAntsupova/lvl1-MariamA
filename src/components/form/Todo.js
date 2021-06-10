import React from "react";


function Todo({text , todo , todos , setTodos , setIputText}){
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    }
    const completeHandler = (e) =>{
        e.preventDefault();
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item , completed: !item.complited
                };
            }
            return item;
        })
        );
    }   

    const editHandler = (e) => {
        e.preventDefault();
        setTodos(todos.map(el => {
            if(el.id === todo.id){
                setIputText(text);
            }
            return el;
        })
        );
        deleteHandler();
    }
    return(
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className='checked'><i className='fas fa-check'></i></button>
            <button onClick={editHandler} className='edit'><i className='fas fa-edit'></i></button>
            <button onClick={deleteHandler} className='delete'><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;