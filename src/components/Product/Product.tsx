import { ChangeEventHandler, FC, useContext } from "react";
import { ProductItem } from "@/types";
import ChangeCount from "./ChangeCount/ChangeCount";
import { CartContext, ThemeContext } from "@/context";
import { changeQuantity } from "@/context/Cart";

interface ProductProps {
  product: ProductItem;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const count = cart.items.find((item) => product.id === item.id)?.count || 0;
  const { theme } = useContext(ThemeContext);

  const discount = product.discount && <div>product.discount.value</div>;

  const handleIncrement = () => {
    dispatch(changeQuantity(product, count + 1));
  };

  const handleDecrement = () => {
    dispatch(changeQuantity(product, count - 1));
  };

  const handleChangeCount: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(changeQuantity(product, +event.target.value));
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

        <button className="btn btn-primary" onClick={handleIncrement}>
          Купить
        </button>
        {count > 0 && (
          <ChangeCount
            count={count}
            onDecrement={handleDecrement}
            onIncrement={handleIncrement}
            onChangeCount={handleChangeCount}
          />
        )}
      </div>
      <h1>{}</h1>
    </div>
  );
};

export default Product;
