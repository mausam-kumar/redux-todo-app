import {REFRESH_TODO} from './action.js'

const initState = {
    todos:[]
}

export const reducer = (state=initState, {type,payload}) =>{
    switch (type) {
        case REFRESH_TODO:
            return{
                ...state,
                todos:[...payload]
            }
    
        default:
            return state
    }
}