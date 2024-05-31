import { ProductItemInCart } from "./products";

export interface CartType {
  items: ProductItemInCart[];
  totalPrice?: number;
}
