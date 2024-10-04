import { useRef, useState } from 'react'
import './App.css'


function App () {
  
  const [todo , setTodo] = useState([])
  const inputValue = useRef()
  const [num , setNum] = useState(0)
  
  const Addtodo = (event) => {
    event.preventDefault()
    todo.push(inputValue.current.value)
    setTodo([...todo])
    inputValue.current.value = ''
  }
  
  const deleteTodo = (index) => {
    todo.splice (index , 1)
    setTodo ([...todo])
    setNum (0)
  }

  const editTodo = (index) => {
    const editValue = prompt('enter input')
    todo.splice (index , 1 , editValue)
    setTodo([...todo])
  }

  return (
  <>
  <h1>Welcome to TodoApp</h1>
  <form className='form' onSubmit={Addtodo}>
    <input type="text" ref={inputValue}/>
    <button type='submit'>Add Todo</button>
  </form>
  <div>
    {todo.length > 0 && num === 0 ? todo.map ((items , index) => {
      return <div key={index}>
      
      <div>
        <p>{index + 1}. {items}</p>
      </div>
      
      <div>
          <button onClick={()=> editTodo(index)}>Edit</button>
          <button onClick={()=> deleteTodo(index)}>Delete</button>
      </div>
      </div>
    }) : <h1>No items found......</h1>}
  </div>
  </>
  )
  
}

export default App

