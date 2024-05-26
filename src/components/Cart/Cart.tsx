import { CartType } from "../../types/cart.ts";
import { FC } from "react";

interface CartProps {
  cart: CartType;
}

const Cart: FC<CartProps> = (props) => {
  const {
    cart: { totalPrice, items },
  } = props;
  return (
    <div>
      <h3>Корзина</h3>
      <ul>
        {items.length > 0 ? (
          items.map((product) => (
            <li>
              {product.name} - {product.count}
            </li>
          ))
        ) : (
          <p>Корзина пуста</p>
        )}
      </ul>
      <p>Общая стоимость: {totalPrice} р.</p>
    </div>
  );
};

export default Cart;
