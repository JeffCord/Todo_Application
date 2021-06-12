import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import ContactCard from './ContactCard.js';
import todosData from './TodosData.js';
import styles from './styles.css';
import Greeting from './Greeting.js';

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("Handling change " + id)
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {

    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
      handleChange={this.handleChange}/>)

    return (
      <div>
        <header className="navbar">TO-DO APP</header>

        <Greeting/>

        <div className="todo-list">
          {todoItems}
        </div>
      </div>
    )
  }
}

export default App;




