import { FC, useState } from "react";
import { Product, Row } from "@/components";
import { getProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";
import Pagination from "@/components/Pagination/Pagination";

const ProductCatalog: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(3);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", currentPage, perPage],
    queryFn: () => getProducts(currentPage, perPage),
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isError || !data) {
    return <h1>Ошибка</h1>;
  }

  const { first, prev, next, last, pages } = data;

  return (
    <>
      <Row>
        <select
          className="form-control"
          onChange={(event) => {
            setPerPage(+event.target.value);
          }}
          value={perPage}
        >
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
        </select>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          first={first}
          prev={prev}
          next={next}
          last={last}
          pages={pages}
        />
      </Row>
    </>
  );
};

export default ProductCatalog;
