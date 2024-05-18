import { ProductItemInCart } from "./products.ts";

export interface CartType {
  items: ProductItemInCart[];
  totalPrice: number;
}
