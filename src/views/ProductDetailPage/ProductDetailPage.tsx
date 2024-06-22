import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/services/products";
import ButtonBack from "@/components/ButtonBack/ButtonBack";

const ProductDetailPage = () => {
  const { productId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(productId),
  });

  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  if (isError || !data) {
    return <h1>Ошибка</h1>;
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="../.." relative="path">
              Главная
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to=".." relative="path">
              Каталог
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Товар
          </li>
        </ol>
      </nav>
      <ButtonBack />
      <h1>Информация о товаре - {data.name}</h1>
      <img src={data.imageUrl} alt="" />
    </div>
  );
};

export default ProductDetailPage;
