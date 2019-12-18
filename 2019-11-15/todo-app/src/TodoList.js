import React from 'react'

import styles from './TodoList.module.css'

import NewTodo from "./components/NewTodo.js";
import Todo from "./components/Todo.js";

class TodoList extends React.Component {

  state = {
    todos : [
      {ticked : true, name : "test1" },
      {ticked : false, name : "test2" }
    ],
    textValue : ''
  }

  handleTick = item => {
    this.setState({todos : this.state.todos.map((todo,idx) => { 
          if (item === todo){ 
            item.ticked = !item.ticked 
            return item
          }else{
            return todo
          } 
      })
    })
  } 
  handleDelete = item => { 
    this.setState({
      todos : this.state.todos.filter((todo,idx) =>  todo !== item ) 
    })
  }  
  handleAdd = e => {
    if (this.state.textValue) {
      this.setState((state,props) => {
        return {
          todos : state.todos.concat({
            ticked : false,
            name : state.textValue
          }), 
          textValue : ''
        }
      } ) 
    } 
  }  
  handleValue = e => {
    this.setState({
      textValue : e.target.value
    })
  }
 
  render = () => {
    return <div className={styles.Root}>
        <NewTodo 
          onValue = { this.handleValue } 
          onAdd = { this.handleAdd } 
          value = { this.state.textValue } 
          onEnter = { e => { if ( e.key === "Enter" ){ this.handleAdd(e) }  }}
        />  
        { this.state.todos.map((todo,idx) => ( 
          <Todo  
            key = { idx }
            ticked = { todo.ticked } 
            name = { todo.name } 
            onTick = { () => this.handleTick(todo) } 
            onDelete = { () =>  this.handleDelete(todo) } 
          /> 
          ) 
        )} 
    </div>
  }
}

export default TodoList
