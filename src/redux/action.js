export const REFRESH_TODO = "REFRESH_TODO"

export const fetchTodo = (payload) => {
    return{
        type:REFRESH_TODO,
        payload:payload
    }
}