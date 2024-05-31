import { CartType } from "@/types";

export const initialState: CartType = {
  items: [
    {
      id: 1,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      rating: 4.7,
      isFavorite: true,
      count: 5,
    },
  ],
};
