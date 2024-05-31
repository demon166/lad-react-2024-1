import { ImmerReducer } from "use-immer";
import { ActionType, CartAction } from "./types";
import { CartType } from "@/types";

export const cartReducer: ImmerReducer<CartType, CartAction> = (
  draftState,
  { type, payload },
) => {
  switch (type) {
    case ActionType.REMOVE_ITEM:
      draftState.items = draftState.items.filter(
        (product) => product.id !== payload,
      );
      break;
    case ActionType.REMOVE_ALL_ITEMS:
      draftState.items = [];
      break;
    case ActionType.CHANGE_QUANTITY: {
      console.log(payload);
      if (payload.quantity === 0) {
        draftState.items = draftState.items.filter(
          (product) => product.id !== payload.product.id,
        );
      }
      const findElement = draftState.items.find(
        (product) => product.id === payload.product.id,
      );
      if (findElement) {
        findElement.count = payload.quantity;
      } else {
        draftState.items.push({ ...payload.product, count: payload.quantity });
      }
      break;
    }
    default:
      break;
  }
};
