import {
  ActionEnum,
  ActionProduct,
  InitialState,
  Product,
  ProductCart,
} from "../types/product";

export const reducerProduct = (
  state: InitialState,
  action: ActionProduct
): InitialState => {
  switch (action.type) {
    case ActionEnum.addCart: {
      const { product } = action.payload;
      const cart = [...state.cart];
      const verifedProduct = cart.find((p) => p.id == product?.id);
      const newCart = verifedProduct
        ? [
            ...cart.map((p) =>
              p.id == product?.id
                ? ({ ...product, quantity: ++p.quantity } as ProductCart)
                : { ...p }
            ),
          ]
        : [...cart, ...[{ ...product, quantity: 1 } as ProductCart]];
      return { ...state, cart: [...newCart] };
    }
    case ActionEnum.deleteCart: {
      const idToDeleted = action.payload.id;
      const newCart = state.cart.filter((product) => product.id != idToDeleted);
      return {
        ...state,
        cart: [...newCart],
      };
    }
    case ActionEnum.updateCart: {
      const productEdited = action.payload.productToCart as ProductCart;
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === productEdited?.id ? productEdited : product
        ),
      };
    }
    case ActionEnum.activeProduct: {
      const product = action.payload.product as Product;
      return { ...state, activeProduct: product };
    }
    //return state;
  }
};
