import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import { asynfetchUsers } from "../redux/users/userActions";

const Users = ({userData, fetchUsers}) => {
useEffect(()=>{
    fetchUsers()
},[])

    return  (
        <div>
       <h2>Async redux (Thunk)</h2>
        {userData.map(user=><p key={user.id}>{user.name}</p>)}
        </div>
    )
};

const mapStateToProps = state =>{
    return{
        userData : state.user.users
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers : () => dispatch(asynfetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);