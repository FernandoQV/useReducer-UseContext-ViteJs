export enum ActionEnum {
  addCart = "addCart",
  deleteCart = "deleteCart",
  updateCart = "updateCart",
  activeProduct = "activeProduct",
}
export type ActionProduct = {
  type: ActionEnum;
  payload: { id?: number; productToCart?: ProductCart; product?: Product };
};
export type Product = {
  id: number;
  title: string;
};
export type ProductCart = Product & {
  quantity: number;
};
export type InitialState = {
  products: Product[];
  cart: ProductCart[];
  activeProduct: Product;
};
