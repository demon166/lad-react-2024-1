import { api } from "@/app/api";
import { ProductResponse } from "@/types/products";

export const getProducts = async () => {
  const { data } = await api.get<ProductResponse[]>("/products");
  return data;
};
