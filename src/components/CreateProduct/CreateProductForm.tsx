import { FC } from "react";

interface CreateProductFormProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

const CreateProductForm: FC<CreateProductFormProps> = ({ handleSubmit }) => {
  return (
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
  );
};

export default CreateProductForm;
