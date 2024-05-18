import { Dispatch, FC, SetStateAction, useState } from "react";
import { ProductItem } from "../../types/products.ts";
import ChangeCount from "./ChangeCount/ChangeCount.tsx";
import { CartType } from "../../types/cart.ts";

interface ProductProps {
  product: ProductItem;
  onAddCart?: () => void;
  onToggleFavorite: () => void;
  setCart: Dispatch<SetStateAction<CartType>>;
}

const Product: FC<ProductProps> = ({ product, onToggleFavorite, setCart }) => {
  const [count, setCount] = useState(0);

  const discount = product.discount && <div>product.discount.value</div>;

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);

    setCart((prevState) => {
      return {
        ...prevState,
        items: [...prevState.items, { ...product, count: newValue }],
      };
    });
  };

  const handleDecrement = () => {
    setCount((value) => value - 1);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <div>{product.price}</div>
        {discount}
        <div>{product.rating}</div>
        <div>
          <button onClick={onToggleFavorite} className="btn btn-info">
            {product.isFavorite
              ? "Удалить из избранного"
              : "Добавить в избранное"}
          </button>
        </div>

        <button className="btn btn-primary" onClick={handleIncrement}>
          Купить
        </button>
        {count > 0 && (
          <ChangeCount
            count={count}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
          />
        )}
      </div>
    </div>
  );
};

export default Product;
