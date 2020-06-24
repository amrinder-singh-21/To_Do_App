import {ADD, DELETE, EDIT, REMOVE_ALL} from './actionTypes'

const initialState = {
    data :[]
}

export const messageReducer = (state=initialState, action) =>{
    switch(action.type){
        case ADD : return{
            ...state,
            data : action.payload
        }
        case DELETE : return{
            ...state,
            data : action.payload
        }
        case EDIT : return{
            ...state,
            data : action.payload
        }
        case REMOVE_ALL : return{
            ...state,
            data : action.payload
        }
        default : return state
    }

}