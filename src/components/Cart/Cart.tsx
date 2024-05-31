import { FC, useContext } from "react";
import { CartContext } from "@/context";

const Cart: FC = () => {
  const {
    cart: { items },
  } = useContext(CartContext);

  const totalPrice = () => {
    if (items) {
      return items.reduce((previousValue, currentValue) => {
        let value = previousValue;
        if (currentValue.count) {
          value = previousValue + currentValue.price * currentValue.count;
        }
        return value;
      }, 0);
    }
  };
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
      <p>Общая стоимость: {totalPrice()} р.</p>
    </div>
  );
};

export default Cart;
