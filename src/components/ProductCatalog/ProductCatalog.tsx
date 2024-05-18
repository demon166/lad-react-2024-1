import { FC } from "react";
import { ProductItem } from "../../types/products.ts";
import Product from "../Product/Product.tsx";
import Row from "../Row/Row.tsx";

interface ProductCatalogProps {
  products: ProductItem[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  const handleAddCart = () => {
    alert("Добавлено в корзину");
  };
  const handleToggleFavorite = () => {
    alert("Изменено избранное");
  };
  return (
    <Row direction="row">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddCart={handleAddCart}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </Row>
  );
};

export default ProductCatalog;
