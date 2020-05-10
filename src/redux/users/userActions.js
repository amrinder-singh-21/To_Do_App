import axios from "axios";

export const fetchUsers = () =>{
    return{
        type : 'Fetch_users'
    }
}

export const successUsers = users =>{
    return{
        type : 'Success_users',
        payload : users
    }
}

export const failUsers = error =>{
    return{
        type : 'Fail_users',
        payload : error
    }
}

export const asynfetchUsers = () =>{
    return (dispatch) => {
            dispatch(fetchUsers())
            axios.get('data.json')
            .then(
                response=> {
                    const users = response.data.data
                    dispatch(successUsers(users))
                })
            .catch(error => {
                    dispatch(failUsers(error.message))
            })
    }
}