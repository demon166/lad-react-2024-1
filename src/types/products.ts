export interface ProductItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount?: {
    type: "percent" | "fix";
    value: number;
  };
  rating?: number;
  isFavorite?: boolean;
  count?: number;
}

export type ProductStoreRequest = Omit<
  ProductItem,
  "id" | "discount" | "rating" | "isFavorite" | "count"
>;

export type ProductItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount?: {
    type: "percent" | "fix";
    value: number;
  };
  rating: number;
  isFavorite: boolean;
};

export type ProductItemInCartType = {
  count: number;
} & ProductItemType;

export interface ProductResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  products: ProductItem[];
}
