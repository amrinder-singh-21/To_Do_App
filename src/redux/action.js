import { ADD, DELETE,EDIT } from "./actionTypes";

export const dataEntry = (data) => {
  return {
    type: ADD,
    payload: data
  };
};

export const  removeData = (data) => {
  return {
    type: DELETE,
    payload: data
  };
};

export const editData= (data) => {
  return {
    type: EDIT,
    payload: data
  };
};

