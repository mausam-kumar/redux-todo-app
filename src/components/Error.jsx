import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <div>
            Page Not Found....
            <Link to="/">Back To Home</Link>
        </div>
    )
}

export default Error
