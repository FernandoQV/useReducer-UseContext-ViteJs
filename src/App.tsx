import { useState } from "react";
import CounterApp from "./CounterApp";
import Product from "./product";
import { ProductProvider } from "./product/context/productContext";
import TodoApp from "./TodoApp";

function App() {
  return (
    <>
      <ProductProvider>
        <Product />
      </ProductProvider>
    </>
  );
}

export default App;
