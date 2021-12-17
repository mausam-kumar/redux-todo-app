import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {fetchTodo} from '../redux/action.js'

function TodoList() {

    const data = useSelector(state => state.todos)
    const dispatch = useDispatch()
    
    async function refreshData(){
        const payload = {
            method:'get',
            url:`http://localhost:3001/posts`,
        }

        const value = await axios(payload)
        dispatch(fetchTodo(value.data))

    }

    React.useEffect(() => {
        refreshData()
    },[])

    return (
        <div>
            <Link to="/"><button>Home</button></Link>

            {
                data.map((ele) => {
                    return(
                        <div key={ele.id} style={{width:"300px",display:"flex",justifyContent:"space-around",marginTop:"15px"}}>
                            <span>{ele.title}</span>
                            <Link to={`/todo/${ele.id}`}><button>See Details</button></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoList
