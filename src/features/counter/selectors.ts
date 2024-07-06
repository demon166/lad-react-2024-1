import { RootState } from "@/app/store";

export const selectProduct = (state: RootState) => state.counter;

export const selectProductItem = (state: RootState) => state.counter.items;
