import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "./types";

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const editProduct = (data) => {
  return {
    type: EDIT_PRODUCT,
    payload: data,
  };
};

export const deleteProduct = (data) => {
  return {
    type: DELETE_PRODUCT,
    payload: data,
  };
};
