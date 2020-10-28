import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './TodoItem'
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  //when app load we need to connect the database and fetch the new todos entry from database
  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().todo))
      console.log(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const addtodo = (e) => {
    e.preventDefault()

    //add to firestore
    db.collection('todos').add({
      todo: input,
    })
    //for locally store data
    //setTodos([...todos, input])
    console.log(todos[0])

    setInput('')
  }
  return (
    <div className='App'>
      <h1>Todo App</h1>
      <form>
        <input
          placeholder='input todos..'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addtodo} disabled={!input}>
          Add
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem item={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
