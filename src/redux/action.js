import { ADD, DELETE,EDIT, REMOVE_ALL } from "./actionTypes";

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

export const removeAll= (data) => {
  return {
    type: REMOVE_ALL,
    payload: data
  };
};
