import React from "react"
import "./style.css"

function Footer(props) {
    return (
        <footer>
            <h3>You have {props.totalTasks} tasks on your To-Do list</h3>
            <p> Wanderer &copy;2020</p>
        </footer>
    )
}

export default Footer