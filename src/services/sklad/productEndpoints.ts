import { skladApi } from "@/services/sklad";
import { ProductItem } from "@/types";
import { ProductStoreRequest } from "@/types/products";

const extendedApi = skladApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      Array<ProductItem>,
      { _page: number; _per_page: number }
    >({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: () => ["products"],
    }),
    createProduct: builder.mutation<ProductItem, ProductStoreRequest>({
      query: (body) => ({
        url: "/products",
        method: "post",
        body,
      }),
      invalidatesTags: ["products"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateProductMutation, useGetProductsQuery } = extendedApi;
