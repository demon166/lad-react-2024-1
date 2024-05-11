import { FC } from "react";
import { IProduct } from "../../types/products.ts";
import Product from "../Product/Product.tsx";
import Row from "../Row/Row.tsx";

interface ProductCatalogProps {
  products: IProduct[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  return (
    <Row>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </Row>
  );
};

export default ProductCatalog;
