import { storeProduct } from "@/services/products";
import { ProductStoreRequest } from "@/types/products";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CreateProductForm from "@/components/CreateProduct/CreateProductForm";

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
      <CreateProductForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateProduct;
