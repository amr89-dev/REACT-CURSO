import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "producto 1",
      price: 100,
    },
    {
      id: 2,
      name: "producto 2",
      price: 200,
    },
    {
      id: 3,
      name: "producto 3",
      price: 300,
    },
    {
      id: 4,
      name: "producto 4",
      price: 400,
    },
    {
      id: 5,
      name: "producto 5",
      price: 500,
    },
    {
      id: 6,
      name: "producto 6",
      price: 600,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART:
      return {};
    case TYPES.REMOVE_ONE_FROM_CART:
      return {};
    case TYPES.REMOVE_ALL_FROM_CART:
      return {};
    case TYPES.CLEAR_CART:
      return {};

    default:
      return state;
  }
}
