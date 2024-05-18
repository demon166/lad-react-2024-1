import ProductCatalog from "./components/ProductCatalog/ProductCatalog.tsx";
import { ProductItem } from "./types/products.ts";
import { CartType } from "./types/cart.ts";
import { useState } from "react";
import Cart from "./components/Cart/Cart.tsx";

const products: ProductItem[] = [
  {
    id: 1,
    name: "Наручные часы мужские SKMEI 1251",
    imageUrl:
      "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
    price: 8165,
    rating: 4.7,
    isFavorite: true,
  },
  {
    id: 2,
    name: "Наручные часы мужские SKMEI 1251",
    imageUrl:
      "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
    price: 8165,
    rating: 4.7,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Товар 2",
    price: 500,
    discount: {
      type: "percent",
      value: 10,
    },
    imageUrl: "",
    rating: 4.5,
    isFavorite: true,
  },
];
function App() {
  const [cart, setCart] = useState<CartType>({
    items: [],
    totalPrice: 0,
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ProductCatalog products={products} setCart={setCart} />
            <hr />
            <Cart cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
