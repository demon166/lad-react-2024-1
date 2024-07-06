import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { api } from "@/app/api";
import { ProductItem } from "@/types";

export const fetchProduct = createAsyncThunk(
  "counter/fetchProduct",
  async () => {
    const { data } = await api.get<Array<ProductItem>>("/products");
    return data;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Array<ProductItem>>) => {
          state.items = action.payload;
          state.error = "";
          state.isLoading = false;
        },
      )
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.items = [];
        state.error = "ОШИБКА";
      });
  },
});

export default counterSlice.reducer;
