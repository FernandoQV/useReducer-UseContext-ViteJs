import { createContext, ReactNode, useContext, useReducer } from "react";
import { reducerProduct } from "../reducer/reducerProduct";
import datosIniciales from "../data/data.json";
const Context = createContext({});
interface Props {
  children: any;
}
const ProductProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducerProduct, datosIniciales);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const productContext=()=>useContext(Context)
export {productContext,ProductProvider}