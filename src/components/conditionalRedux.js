import React from 'react';
import {connect} from 'react-redux';
import {buyCake, buyIce} from '../redux/shop/shopActions'

const ConditionalRedux = (props) => {
    return (
        <div>
        <h2> conditional redux</h2>
            items = {props.item} <br></br>
            <button onClick={props.buyItems}>Buy items</button>
        </div>
    );
};

const mapStateToProps =(state, ownProps) =>{
    const itemState = ownProps.cake ?  state.cake.numOfCakes : state.iceCream.numOfIcecreams

    return{
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
const dispatchFunction = ownProps.cake ? 
    () => dispatch(buyCake())
  : () => dispatch(buyIce())
  return{
      buyItems : dispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConditionalRedux)