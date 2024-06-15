import { storeProduct } from "@/services/products";
import { ProductStoreRequest } from "@/types/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateProduct = () => {
  const queryClient = useQueryClient();
  const mutator = useMutation({
    mutationFn: storeProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const dataRequest = {
      ...data,
      price: +data.price,
    };

    mutator.mutate(dataRequest as ProductStoreRequest);
    event.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Название</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="">Изображение</label>
          <input type="text" name="imageUrl" />
        </div>
        <div>
          <label htmlFor="">Цена</label>
          <input type="number" name="price" />
        </div>
        <div>
          <button className="btn btn-success" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
