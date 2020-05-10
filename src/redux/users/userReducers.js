

const initialState = {
    loading : false,
    users : [],
    error : ''
}


export const userReducers = (state = initialState, action) =>{
    switch(action.type){
        case 'Fetch_users' : return{
            ...state,
            loading : true
        }

        case 'Success_users' : return {
            loading : false,
            users : action.payload,
            error : ''
        }

        case 'Fail_users' : return {
            loading : false,
            users : [], 
            error : action.payload
        }
        default : 
        return  state
    }
}

