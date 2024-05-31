import { ActionType, CartAction } from "./types";
import { ProductItem } from "@/types";

export const changeQuantity = (
  product: ProductItem,
  quantity: number,
): CartAction => ({
  type: ActionType.CHANGE_QUANTITY,
  payload: { product, quantity },
});

export const removeItem = (id: number): CartAction => ({
  type: ActionType.REMOVE_ITEM,
  payload: id,
});

export const removeAllItems = (): CartAction => ({
  type: ActionType.REMOVE_ALL_ITEMS,
  payload: undefined,
});
