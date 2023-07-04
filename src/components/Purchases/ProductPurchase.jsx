import React from "react";
import "./styles/productPurchase.css";

const productPurchase = ({ prodPurchase }) => {
  return (
    <article className="prodcart">
      <header className="prodcart__header">
        <img
          className="productPurchase__img"
          src={prodPurchase.product?.productImgs[0].url}
          alt=""
        />
      </header>
      <h3 className="prodcart__title">{prodPurchase.product.title}</h3>
      <footer className="prodcart__footer">
        <span>{prodPurchase.createdAt.slice(0, 10)}</span>
        <div className="prodcart__subtotal">
          <span className="prodcart__quantity">{prodPurchase.quantity} </span>
          <span className="prodcart__subtotal-label">
            ${prodPurchase.quantity * prodPurchase.product.price}
          </span>
        </div>
      </footer>
    </article>
  );
};

export default productPurchase;
