import React from 'react'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'
import {Route,Routes} from 'react-router-dom'
import TodoDetails from './TodoDetails.jsx'
import EditTodo from './EditTodo.jsx'
import Error from './Error.jsx'

function Todo() {
    return (
        <div>
            
            <Routes>
                <Route path="/" element={<TodoInput />} />
                <Route path="/todo" element={<TodoList />} />
                <Route path="/todo/:id" element={<TodoDetails />} />
                <Route path="/todo/:id/edit" element={<EditTodo />} />
                <Route path='*' element={<Error />} />
            </Routes>
            
            
        </div>
    )
}

export default Todo
