import { ChangeEventHandler, FC, useContext } from "react";
import { ProductItem } from "@/types";
import ChangeCount from "./ChangeCount/ChangeCount";
import { CartContext } from "@/context";
import { changeQuantity } from "@/context/Cart";
import { generatePath, Link } from "react-router-dom";
import { RouteVariable } from "@/router/constants";

interface ProductProps {
  product: ProductItem;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);
  const count = cart.items.find((item) => product.id === item.id)?.count || 0;
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
      <div className={"flex-grow-1"}>
        <img
          src={product.imageUrl}
          className="card-img-top"
          alt={product.name}
        />
      </div>
      <div className="card-body flex-grow-0">
        <Link
          to={generatePath(RouteVariable.productItem, {
            productId: product.id,
          })}
        >
          <h5 className="card-title">{product.name}</h5>
        </Link>
        <div>{product.price}</div>
        {discount}
        <div>{product.rating}</div>
        <div style={{ display: "flex", gap: "10px" }}>
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
      </div>
    </div>
  );
};

export default Product;
