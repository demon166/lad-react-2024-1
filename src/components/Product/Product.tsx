import { FC, useContext, useState } from "react";
import { Updater } from "use-immer";
import { ProductItem, CartType } from "@/types";
import ChangeCount from "./ChangeCount/ChangeCount";
import { CounterContext, ThemeContext } from "@/context";
import { increment } from "@/context/Counter";

interface ProductProps {
  product: ProductItem;
  onAddCart?: () => void;
  onToggleFavorite: () => void;
  updateCart: Updater<CartType>;
}

const Product: FC<ProductProps> = ({
  product,
  onToggleFavorite,
  updateCart,
}) => {
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(CounterContext);
  const { theme } = useContext(ThemeContext);

  const discount = product.discount && <div>product.discount.value</div>;

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);

    updateCart((draft) => {
      const findProduct = draft.items.find((item) => item.id === product.id);
      if (findProduct) {
        findProduct.count += 1;
      } else {
        draft.items.push({ ...product, count: 1 });
      }
    });
  };

  const handleDecrement = () => {
    setCount((value) => value - 1);
    updateCart((draft) => {
      const findProduct = draft.items.find((item) => item.id === product.id);
      if (findProduct) {
        findProduct.count -= 1;
      }
    });
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <p>Сейчас используется: {theme}</p>
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
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        Прибавить 5
      </button>
    </div>
  );
};

export default Product;
