import { ProductItem } from "./products";

export interface CartType {
  items: ProductItem[];
  totalPrice?: number;
}
