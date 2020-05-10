import React from 'react';
import {connect} from 'react-redux'
import {buyCake, buyIce} from '../redux/shop/shopActions'

const CakeContainer = (props) => {
    return (
        <div>
        <h2>without hooks</h2>
           <h3> No. of Cakes - {props.numOfCakes}</h3>
            <button onClick={props.buyCake}>Buy Cake</button>

            <h3> No. of IceCreams - {props.numOfIce}</h3>
            <button onClick={props.buyIce}>Buy IceCreams</button>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        numOfCakes : state.cake.numOfCakes,
        numOfIce : state.iceCream.numOfIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : () => dispatch(buyCake()),
        buyIce : () => dispatch(buyIce())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (CakeContainer);
