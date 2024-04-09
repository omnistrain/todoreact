import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content){
    const todo = {
      id: crypto.randomUUID(),
      content,
      done:false,
      edit:false,
      selected:false
    }
    setTodoList([...todoList, todo])

  }

  function deleteTodo(id){
    setTodoList( todoList.filter(todo => todo.id != id));
  }

  function toggleTodo(id){

    setTodoList(todoList.map(todo => todo.id === id ? 
      ({
        ...todo,
        done: !todo.done
    }) 
    : 
        todo 
    ));

  }

  function selectedTodo(id){
    setTodoList(todoList.map(todo => todo.id === id ? 
      ({
        ...todo,
        selected: true
    }) 
    : {
      ...todo,
        selected:false
      } 
    ));
  }

  function toggleTodoEdit(id){
    setTodoList(todoList.map(todo => todo.id === id ? 
      ({
        ...todo,
        edit: !todo.edit
    }) 
    : 
        todo 
    ));

  }

  function editTodo(id, content){
    setTodoList(todoList.map(todo => todo.id === id ? 
      ({
        ...todo,
        edit:false,
        content: content
    }) 
    : 
        todo 
    ));

  }
  return (
    <div className="container">
      <div className="card p-20">
        <h1 className="mb-20">Todo List</h1>
        <AddTodo addTodo={addTodo}></AddTodo>
        <TodoList 
          todoList={todoList} 
          toggleTodo={toggleTodo} 
          toggleTodoEdit={toggleTodoEdit}
          selectedTodo={selectedTodo} 
          editTodo = {editTodo}
          deleteTodo={deleteTodo}></TodoList>
      </div>

    </div>
  )
}

export default App
