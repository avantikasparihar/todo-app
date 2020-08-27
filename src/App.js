import React from "react"
import Footer from "./Footer"
import TodoItem from "./TodoItem"
import "./style.css"
import todosData from "./todosData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData,
      currentItem : {
        key : '',
        text : '',
        completed : false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }

  handleChange(id) {
    this.setState(addTask => {
      let updatedTodos = this.state.todos.map(todo => {
        if (todo.key === id)
          todo.completed = (todo.completed === true) ? false : true
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  handleChange2(event) {
    this.setState({
      currentItem: {
        key : Date.now(),
        text : event.target.value
      }
    })
  }

  addTask(event) {
    const newTask = this.state.currentItem
    if(newTask.text !== '') {
      const newTasks = [...this.state.todos, newTask]
      this.setState({
        todos : newTasks,
        currentItem : {
          key : '',
          text : '',
          completed : false
        }
      })
    }
  }

  deleteTask(id) {
    const filteredTasks = this.state.todos.filter(item => 
      item.key !== id)
      this.setState({
        todos : filteredTasks
      })
  }

  render() {
    let todoItems = this.state.todos.map(item => <TodoItem key={item.key} item={item} handleChange={this.handleChange} deleteTask={this.deleteTask}/>)
    return (
    <div>
      <div className="todo-list">
        {todoItems}
        <form>
          <input 
            type="text" 
            placeholder="Enter a new task here..." 
            value={this.state.currentItem.text}
            onChange={this.handleChange2}
          />
          <button type="button" onClick={this.addTask} >Add</button>
        </form>
      </div>
      <Footer totalTasks={this.state.todos.length}/> 
    </div>
  )
  }
}

export default App

