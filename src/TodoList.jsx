import React from "react";

const TodoList=(props)=>{
    
    return (
    <>
    <div className="todo_style">
    <span className="material-symbols-outlined" 
    onClick={()=>{
    props.onSelect(props.id)}}>
close
</span>
    <li>{props.text}</li>
    </div>
    </>
    );
};
export default TodoList;
