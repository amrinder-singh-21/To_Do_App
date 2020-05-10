
export const buyCake = (number = 1) => {
    console.log("buying num of cakes",number )
    return {
        type : 'BUY_CAKE',
        payload : number,
        
    }
    
};


export const buyIce = (number = 1) => {
    return {
        type : 'BUY_ICECREAM',
        payload : number
    }
};
