import React from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'


function TodoDetails() {

    const [state,setState] = React.useState({
        title:"",
        status:""
    })

    const [btnState,setBtnState] = React.useState(true)

    const id = useParams()
    
    async function fetchData(){
        const payload = {
            url:`http://localhost:3001/posts/${id.id}`,
            method: 'GET'
        }

        const value = await axios(payload)

        setState({
            ...state,
            status:value.data.status,
            title:value.data.title
        })
    }

    React.useEffect(() => {
        fetchData()
    },[])

    async function refreshData(){
        const payload = {
            method:'get',
            url:`http://localhost:3001/posts`,
        }

        const value = await axios(payload)
        setState([value.data])

    }

    async function handleDelete(id){
        const payload = {
            url:`http://localhost:3001/posts/${id}`,
            method: 'DELETE'
        }

        await axios(payload)
        refreshData()
        setBtnState(false)
    }
    
    return (
        <div>
            <Link to="/todo"><button>Back</button></Link>
            <br />
            <p>{state.title}</p>
            <p>{state.status}</p>
            {btnState && <button onClick={() => handleDelete(id.id)}>Delete</button>}
            {btnState && <Link to={`/todo/${id.id}/edit`}><button>EDIT</button></Link>}
        </div>
    )
}

export default TodoDetails
