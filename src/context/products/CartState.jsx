import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "../Types";

export const cardInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 10 },
    { id: 2, name: "Producto 2", price: 100 },
    { id: 3, name: "Producto 3 ", price: 1000 },
  ],
  cart: [],
};

export function CartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
        return {
            ...state,
            cart:state.cart.filter(item=>item.id!==action.payload),
        };
    }
    case CLEAR_CART:
      return cardInitialState;
    default:
      return state;
  }
}
