import React from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'

function EditTodo() {

    const id = useParams()

    const [state,setState] = React.useState({
        title:"",
        status:""
    })

    

    async function fetchData(){
        const payload = {
            url:`http://localhost:3001/posts/${id.id}`,
            method: 'GET'
        }

        const value = await axios(payload)
        const {data} = value
        setState({
            ...state,
            title:data.title,
            status:data.status
        })
    }

    React.useEffect(() => {
        fetchData()
    },[])


    async function handleToggle(id){
        const payload = {
            url: `http://localhost:3001/posts/${id}`,
            method:"patch",
            data:{
                status: !state.status
            }
        }
        await axios(payload)

        setState({
            ...state,
            status: state.status==="true"?"false":"true"
        })

    }

    return (
        <div>
            <Link to="/todo"><button>Back to todo list</button></Link>
            <br />
            <br />
            <div style={{width:"400px",display:"flex",justifyContent:"space-around"}}>

            <span>{state.title}</span>
            <span>{state.status}</span>
            <button onClick={() => handleToggle(id.id)}>Toggle</button>
            </div>
            
        </div>
    )
}

export default EditTodo
