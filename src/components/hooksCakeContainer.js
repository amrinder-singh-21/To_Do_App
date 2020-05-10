import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { buyCake,buyIce } from '../redux/shop/shopActions';

const HooksCakeContainer = () => {
   const numOfCakes =  useSelector(state=>state.cake.numOfCakes);
   const numOfIce = useSelector(state=>state.iceCream.numOfIcecreams);
   const dispatch = useDispatch();
   const [number, setNumber] = useState(1);

    return (
        <div>
       <h2> with hooks</h2>
            <h3>No. of Cakes - {numOfCakes}</h3>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyCake(number))}>Buy{number} Cake</button>

            <h3>No. of IceCreams - {numOfIce}</h3>
            <button onClick={()=>dispatch(buyIce())}>Buy IceCreams</button>
        </div>
    );
};

export default HooksCakeContainer;