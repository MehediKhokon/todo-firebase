import db from './firebase'

function TodoItem({ item }) {
  return (
    <>
      <div class='row'>
        <li className='list-group-item list-group-item-success col-md-10 font-weight-bold my-3'>
          {item.todo}
        </li>
        <button
          className='btn btn-danger col-md-2 my-3'
          onClick={(e) => db.collection('todos').doc(item.id).delete()}
        >
          Delete
        </button>
      </div>
    </>
  )
}

export default TodoItem
