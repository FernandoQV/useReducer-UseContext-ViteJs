import React, { useReducer, useState } from "react";
import {
  ActionEnum,
  InitialState,
  Product as IProduct,
  ProductCart,
} from "./types/product";
import data from "./data/data.json";
import { reducerProduct } from "./reducer/reducerProduct";
const datosIniciales: InitialState = data;
const Product = (): any => {
  const [inputText, setInputText] = useState<string>();
  const [datos, dispatch] = useReducer(reducerProduct, datosIniciales);
  const handleAddProductToCart = (product: IProduct) => {
    dispatch({ type: ActionEnum.addCart, payload: { product } });
  };
  const handleActiveProduct = (product: IProduct) => {
    dispatch({ type: ActionEnum.activeProduct, payload: { product } });
  };
  const deletedProductFromCart = (id: ProductCart["id"]) => {
    dispatch({ type: ActionEnum.deleteCart, payload: { id } });
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.currentTarget.value)}
        />
      </form>
      <div>
        <h2>Products</h2>
        <ul>
          {datos.products.map((product) => (
            <li key={product.id} style={{ display: "flex", gap: "1rem" }}>
              <span>{product.title}</span>
              <button onClick={() => handleAddProductToCart(product)}>
                Add Cart
              </button>
              <button onClick={() => handleActiveProduct(product)}>
                Active Product
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Cart</h2>
        <ul>
          {datos.cart.map((item) => (
            <li key={item.id} style={{ display: "flex", gap: "1rem" }}>
              <span>{`${item.title} => ${item.quantity}`}</span>
              <button>Edited</button>
              <button onClick={() => deletedProductFromCart(item.id)}>
                Deleted
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Product Active</h2>
        <li>
          <span>{datos.activeProduct.title}</span>
        </li>
      </div>
    </div>
  );
};

export default Product;
