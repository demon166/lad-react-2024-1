import { ProductItem } from "@/types";

export enum ActionType {
  CHANGE_QUANTITY = "CHANGE_QUANTITY",
  REMOVE_ITEM = "REMOVE_ITEM",
  REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS",
}

export type CartAction =
  | {
      type: ActionType.CHANGE_QUANTITY;
      payload: { product: ProductItem; quantity: number };
    }
  | { type: ActionType.REMOVE_ITEM; payload: number }
  | { type: ActionType.REMOVE_ALL_ITEMS; payload: undefined };
