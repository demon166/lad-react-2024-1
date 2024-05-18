import ProductCatalog from "./components/ProductCatalog/ProductCatalog.tsx";
import MyButton from "./components/MyButton/MyButton.tsx";
import { ProductItem } from "./types/products.ts";

function App() {
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
  return (
    <>
      <ProductCatalog products={products} />
      <MyButton />

      <div
        onClick={() => {
          alert("Клик на ДИВ");
        }}
        onClickCapture={() => {
          alert("Клик на ДИВ Capture");
        }}
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid red",
        }}
      >
        <button
          onClick={(event) => {
            alert("Клик на кнопку");
            event.stopPropagation();
          }}
        >
          Кнпока
        </button>
      </div>
    </>
  );
}

export default App;
