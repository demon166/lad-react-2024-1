import product from "@/components/Product/Product";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/services/sklad/productEndpoints";
import CreateProductForm from "@/components/CreateProduct/CreateProductForm";
import { ProductStoreRequest } from "@/types/products";

const Counter = () => {
  const [createProduct] = useCreateProductMutation();

  const { isLoading, data, error } = useGetProductsQuery({
    _per_page: 3,
    _page: 1,
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const dataRequest = {
      ...data,
      price: +data.price,
    };

    createProduct(dataRequest as ProductStoreRequest);
    event.currentTarget.reset();
  };

  if (error) {
    return <h1>ОШИБКА</h1>;
  }

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (!product) {
    return null;
  }

  return (
    <div>
      <h1>Продукты</h1>
      <CreateProductForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Counter;
