import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './TodoItem'
import db from './firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  //when app load we need to connect the database and fetch the new todos entry from database
  //option orderBy(take two param, key and desc or asc) after collection
  useEffect(() => {
    db.collection('todos').onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      )
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
    //console.log(todos[0])

    setInput('')
  }
  return (
    <div className='container text-center'>
      <div className='jumbotron display-4'>Todo App</div>
      <form>
        <div className='row'>
          <div className='col-md-9'>
            <input
              className='form-control form-control-lg'
              placeholder='input todos..'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className='col-md-3'>
            <button
              className='btn btn-primary btn-lg px-5'
              onClick={addtodo}
              disabled={!input}
            >
              Add
            </button>
          </div>
        </div>
      </form>

      <ul className='list-group my-3'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} item={todo} />
        ))}
      </ul>
    </div>
  )
}

export default App
