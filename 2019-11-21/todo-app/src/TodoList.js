import React from 'react'

import styles from './TodoList.module.css'

import NewTodo from "./components/NewTodo.js";
import Todo from "./components/Todo.js";

const API = 'http://localhost:3001'
const URL = `${API}/todos`

function createStore(reducer,initialState) { 
  let state = initialState 
  let subscribers = {}

  return {
    getState: () => state ,
    dispatch: (action) => {
      state = reducer(state,action)  
      Object.values(subscribers).forEach(value => {
          value()
      }) 
    },
    subscribe: (callback) =>{
      let index =  Object.keys(subscribers).length
      index = index > 0 ? +Object.keys(subscribers)[index-1] + 1 : 0 
      subscribers[index] = callback  
      return index
    },
    unsubscribe: (id) => {  
      delete subscribers[id] 
    }
  }
}

let initialState = {
  todos : [], // {id:'test1', ticked : true, name : "test1" }
  textValue : ''
}

const todoReducer = (state,action) => {
  const {type, item, text, todosData } = action
  switch(type){
    case "TICK": 
      item.ticked = !item.ticked 
      saveTodo(item)
      return { ...state, todos : state.todos.map(todo => item.id === todo.id ? item : todo) }
    case "ADD":
      const newTodo = {
        id : Math.random().toString(36).substr(2, 5),
        ticked : false,
        name : state.textValue
      }
      addTodo(newTodo)
      return {
        todos : state.todos.concat(newTodo),
        textValue : ''
      }
    case "DELETE":
      deleteTodo(item)
      return { ...state, todos : state.todos.filter( todo =>  todo.id !== item.id ) } 
    case "TEXTCHANGE":
      return {...state , textValue : text }
    case "GETDATA": 
      const temp = {...state , todos :JSON.parse(JSON.stringify(todosData))  } 
      return temp
    default :
      return state; 
  }
}

const eventTicked = todo => ({ type: "TICK", item: todo})
const eventAdd = () => ({ type: "ADD"})
const eventDelete = todo => ({ type: "DELETE", item: todo})
const eventTextChange = textChange => ({ type: "TEXTCHANGE", text: textChange})
const eventGetData = data => ({ type: "GETDATA", todosData: data}) 

const getData = async () => {
  const response = await fetch(URL)
  const data = await response.json()   
  store.dispatch(eventGetData(data))  
} 

let store =  createStore(todoReducer,initialState) 

const saveTodo = async (item) => { 
  await fetch(`${URL}/${item.id}` ,
  {
    method: 'PUT',
    headers:  { 'content-type': 'application/json' },
    body: JSON.stringify(item) 
  })
}
const addTodo = async (item) => { 
  await fetch(URL,
    {
      method : 'POST',
      headers:  { 'content-type': 'application/json' },
      body: JSON.stringify(item)
    })
}
const deleteTodo = async (item) => await fetch(`${URL}/${item.id}`, { method : 'DELETE'})

class TodoList extends React.Component { 

  componentDidMount() {   
    getData()
    store.subscribe(() => {
      this.forceUpdate()
    })  
  } 

  handleTick = item => () => store.dispatch(eventTicked(item)) 
  handleAdd = () => store.dispatch(eventAdd())
  handleDelete = item => () => store.dispatch(eventDelete(item))
  handleValue = e => store.dispatch(eventTextChange(e.target.value)) 

  render = () => {
    const {textValue ,todos } = store.getState()
    return <div className={styles.Root}>
        <NewTodo 
          onValue = { this.handleValue } 
          onAdd = { this.handleAdd } 
          value = { textValue } 
          onEnter = { e => { if ( e.key === "Enter" ){ this.handleAdd(e) }  }}
        />  
        { todos.map((todo,idx) => ( 
          <Todo  
            key = { todo.id }
            ticked = { todo.ticked } 
            name = { todo.name } 
            onTick = { this.handleTick(todo) } 
            onDelete = { this.handleDelete(todo) } 
          /> 
          ) 
        )} 
    </div>
  }
}

export default TodoList
