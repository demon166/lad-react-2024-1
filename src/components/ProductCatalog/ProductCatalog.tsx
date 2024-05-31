import { FC } from "react";
import { ProductItem } from "@/types";
import { Product, Row } from "@/components";

interface ProductCatalogProps {
  products: ProductItem[];
}

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  return (
    <Row direction="row">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Row>
  );
};

export default ProductCatalog;
