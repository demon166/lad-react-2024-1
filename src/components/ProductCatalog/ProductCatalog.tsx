import { FC } from "react";
import { IProduct } from "../../types/products.ts";
import Product from "../Product/Product.tsx";
import Row from "../Row/Row.tsx";

interface ProductCatalogProps {
  products: IProduct[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  const handleAddCart = () => {
    alert("Добавлено в корзину");
  };
  const handleToggleFavorite = () => {
    alert("Изменено избранное");
  };
  return (
    <Row>
      {products.map((product) => (
        <Product
          product={product}
          onAddCart={handleAddCart}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </Row>
  );
};

export default ProductCatalog;
