import db from './firebase'

function TodoItem({ item }) {
  return (
    <>
      <li>{item.todo}</li>
      <button onClick={(e) => db.collection('todos').doc(item.id).delete()}>
        Delete
      </button>
    </>
  )
}

export default TodoItem
