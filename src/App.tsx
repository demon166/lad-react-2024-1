import { ProductItem } from "@/types";
import {
  Cart,
  ProductCatalog,
  TestComponent,
  ThemesChanger,
} from "@/components";

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
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ThemesChanger />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TestComponent />
            <ProductCatalog products={products} />
            <hr />
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
