import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../Home/CardProduct";
import "./styles/SimiliarProducts.css";
const SimilarProducts = ({ product }) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_URL;

  const url = `${URL_BASE}/products?categoryId=${product?.categoryId}`;

  const [filterProducts, getProductByCategory] = useFetch(url);
  useEffect(() => {
    if (product) {
      getProductByCategory();
    }
  }, [product]);

  return (
    <section className="similiar__products">
      <h2 className="similiar__products-h2">Discover Similar products</h2>
      <div className="similiar__products-products">
        {filterProducts
          ?.filter((prod) => prod.id !== product.id)
          .map((prod) => {
            return <CardProduct key={prod.id} product={prod} />;
          })}
      </div>
    </section>
  );
};

export default SimilarProducts;
