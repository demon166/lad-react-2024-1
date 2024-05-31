export interface ProductItem {
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
  count?: number;
}

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
