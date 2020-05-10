const initState = {
    data :[],
    isInc : '',
    sortedData:[],
    filteredData :[]
}



export const loopReducer = (state=initState, action) => {
switch(action.type){
    case "Fetch_Data": return{
        ...state,
        data : action.payload
    }
    case "Find_Match": return{
        ...state,
        isInc : action.payload
    }
    case "Sort_Data" : return{
        ...state,
        sortedData : action.payload
    }
    case "Filter_Data" : return{
        ...state,
        filteredData : action.payload
    }
    default : return state
}
}