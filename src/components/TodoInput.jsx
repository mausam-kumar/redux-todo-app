import React from 'react'
import {v4 as uuid} from 'uuid'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {fetchTodo} from '../redux/action.js'

function TodoInput() {

    const [state,setState] = React.useState("")

    const dispatch = useDispatch()

    function handleChange(e){
        setState(e.target.value)
    }

    async function handleAdd(){
        const data = {
            id:uuid(),
            status:"false",
            title:state
        }

        const payload = {
            url:`http://localhost:3001/posts`,
            data:data,
            method: "POST",
        }

        await axios(payload)
        alert("Success")
    }
    return (
        <div>
            <Link to="/todo" >See Todo</Link>
            <br />
            <br />
            <br />
            <span>Enter Todo :</span>
            <input onChange={(e) => handleChange(e)} value={state} type="text" placeholder="Enter Something" />
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default TodoInput
