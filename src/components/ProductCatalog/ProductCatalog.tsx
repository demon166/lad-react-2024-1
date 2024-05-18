import { Dispatch, FC, SetStateAction } from "react";
import { ProductItem } from "../../types/products.ts";
import Product from "../Product/Product.tsx";
import Row from "../Row/Row.tsx";
import { CartType } from "../../types/cart.ts";

interface ProductCatalogProps {
  products: ProductItem[];
  setCart: Dispatch<SetStateAction<CartType>>;
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products, setCart }) => {
  const handleAddCart = () => {};
  const handleToggleFavorite = () => {
    alert("Изменено избранное");
  };
  console.log("ProductCatalog");
  return (
    <Row direction="row">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddCart={handleAddCart}
          setCart={setCart}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </Row>
  );
};

export default ProductCatalog;
