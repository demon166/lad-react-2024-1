import classes from "./Product.module.scss";
import { FC } from "react";
import { IProduct } from "../../types/products.ts";

interface ProductProps {
  product: IProduct;
  onAddCart: () => void;
  onToggleFavorite: () => void;
}

const Product: FC<ProductProps> = ({
  product,
  onAddCart,
  onToggleFavorite,
}) => {
  return (
    <div>
      <div className={classes.img}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <strong>{product.name}</strong>
      <div>{product.price}</div>
      <div>{product.discount}</div>
      <div>{product.rating}</div>
      <div>
        <button onClick={onToggleFavorite}>
          {product.isFavorite
            ? "Удалить из избранного"
            : "Добавить в избранное"}
        </button>
      </div>
      <button onClick={onAddCart}>Купить</button>
    </div>
  );
};

export default Product;
