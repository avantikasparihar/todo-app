import React from "react"
import "./style.css"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.key)} 
            />
            <p style={props.item.completed ? completedStyle : null} >
                {props.item.text}
                <span>
                    <i className="fa fa-trash" onClick={() => props.deleteTask(props.item.key)} aria-hidden="true"></i>
                </span>
            </p>
            
        </div>
    )
}

export default TodoItem