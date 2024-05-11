import classes from "./Product.module.scss";
import { FC } from "react";
import { IProduct } from "../../types/products.ts";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
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
        {product.isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
      </div>
    </div>
  );
};

export default Product;
