import { FC, useContext } from "react";
import { CartContext } from "@/context";

const Cart: FC = () => {
  const {
    cart: { items, totalPrice },
  } = useContext(CartContext);
  return (
    <div>
      <h3>Корзина</h3>
      <ul>
        {items.length > 0 ? (
          items.map((product) => (
            <li key={product.id}>
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
