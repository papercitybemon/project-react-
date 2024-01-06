import React from 'react'
import NewTodoForm from './NewTodoForm/index'

function Header() {
  return (
    <header className=''>
        <h1>todos</h1>
        <NewTodoForm/>
    </header>
  )
}

export default Header