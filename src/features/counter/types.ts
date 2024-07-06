import { ProductItem } from "@/types";

export interface CounterState {
  items: Array<ProductItem>;
  isLoading: boolean;
  error: string;
}
