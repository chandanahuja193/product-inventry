import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "../actions/types";

const initialState = {
  products: [
    { name: "Blue Shirt", price: 16, quantity: 3, imageUrl: "" },
    { name: "White Shirt", price: 10, quantity: 2, imageUrl: "" },
  ],
  currentProduct: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case EDIT_PRODUCT:
      let pro = state.products;
      let index = pro.findIndex(el => el.name === action.payload.name );
      pro[index] = action.payload 
      return {
        ...state,
        currentProduct: {},
        products: pro,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        products: state.products.filter(
          (product) => product.name !== action.payload.name
        ),
      };
    default:
      return state;
  }
}
