import { api } from "@/app/api";
import { ProductResponse, ProductStoreRequest } from "@/types/products";

export const getProducts = async (page: number, per_page: number = 3) => {
  const { data } = await api.get<ProductResponse>("/products", {
    params: {
      _page: page,
      _per_page: per_page,
    },
    transformResponse: (data) => {
      const parseData = JSON.parse(data);

      const newData = {
        ...parseData,
        products: parseData.data,
      };

      delete newData.data;

      return newData;
    },
  });
  return data;
};

export const storeProduct = async (product: ProductStoreRequest) => {
  await api.post("/products", product);
};
