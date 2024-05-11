import ProductCatalog from "./components/ProductCatalog/ProductCatalog.tsx";

function App() {
  const products = [
    {
      id: 1,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 2,
      name: "Наручные часы мужские SKMEI 1251",
      imageUrl:
        "https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg",
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
  ];
  return (
    <>
      <ProductCatalog products={products} />
    </>
  );
}

export default App;
