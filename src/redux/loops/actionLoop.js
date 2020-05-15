import axios from "axios"
 
const fetchData = (data) => {
    return{
        type: "Fetch_Data",
        payload : data
    }
}

export const asynFetchData = () =>{
    return function(dispatch){
        axios.get('./data.json')
        .then(res=>{
            const data = res.data.data
            dispatch(fetchData(data))
        })
    }
}

const findMatch=(isFound) =>{
    return{
        type : "Find_Match",
        payload : isFound
    }
}

export const matchData =(data,serch) =>{
return function(dispatch){
   const isFound =  data.includes(serch);
   dispatch(findMatch(isFound))
    }
}

const sort =(sorted) =>{
    return{
        type:"Sort_Data",
        payload : sorted
    }
}

export const sortData=(name)=>{
    return function (dispatch){
        const sorted = name.sort();
        dispatch(sort(sorted))
    }
}

const filterdata =(filtered)=>{
    return{
        type:"Filter_Data",
        payload : filtered
    }
}

export const filterData = (data,category) => 
function (dispatch) {
    const filtered = data.filter((values) => values.category === category)
    dispatch(filterdata(filtered))
}