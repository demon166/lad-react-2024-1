import { FC } from "react";
import { Product, Row } from "@/components";
import { getProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";

const ProductCatalog: FC = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
    status,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(status);

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  return (
    <>
      <button onClick={() => refetch()}> Получить сново </button>
      <Row>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </>
  );
};

export default ProductCatalog;
