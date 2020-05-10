const cakes = {
    numOfCakes : 10
}

export const cakeReducer = (state = cakes, action)=>{
    switch(action.type){
        case 'BUY_CAKE' : return{
            ...state,
            numOfCakes : state.numOfCakes - action.payload
        }
        default : return state;
    }
}


const iceCream = {
    numOfIcecreams : 30
}

export const iceReducer = (state = iceCream, action)=>{
    switch(action.type){
        case 'BUY_ICECREAM' : return{
            ...state,
            numOfIcecreams : state.numOfIcecreams - action.payload
        }
        default : return state;
    }
}
