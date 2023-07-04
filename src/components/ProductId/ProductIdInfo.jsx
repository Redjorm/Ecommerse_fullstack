import React, { useEffect, useRef, useState } from "react";
import "./styles/ProductIdInfo.css";
import useCrudCart from "../../hooks/useCrudCart";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useNavigate } from "react-router-dom";

const ProductIdInfo = ({ product }) => {
  const token = localStorage.getItem("token");

  const { addProductToCard } = useCrudCart();

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (token == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must login to add to cart",
      });

      navigate("/login");
    } else {
      const data = {
        quantity,
        productId: product.id,
      };
      addProductToCard(data);
    }
  };

  return (
    <section className="productidinfo__card">
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer className="productidinfo__footer">
        <div className="productidinfo__footer-options">
          <div className="productidinfo__footer-price">
            <span>Price</span>
            <span>{product?.price}</span>
          </div>
          <div>
            <span>Quantity</span>
            <div className="productinfo__buttons">
              <button onClick={handleMinus}>-</button>
              <div>{quantity}</div>
              <button onClick={handlePlus}>+</button>
            </div>
          </div>
        </div>
        <button onClick={handleAddToCart} className="productidinfo__btn-cart">
          Add to Cart <i className="bx bx-cart"></i>{" "}
        </button>
      </footer>
    </section>
  );
};

export default ProductIdInfo;
