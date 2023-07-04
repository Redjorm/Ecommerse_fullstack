import { useNavigate } from "react-router-dom";
import "./styles/CardProduct.css";
import useCrudCart from "../../hooks/useCrudCart";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const CardProduct = ({ product }) => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { addProductToCard } = useCrudCart();

  const handleSelectProductId = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBtnClick = (e) => {
    e.stopPropagation();
    if (token == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must login to add to cart",
      });

      navigate("/login");
    } else {
      const data = {
        quantity: 1,
        productId: product.id,
      };
      addProductToCard(data);
    }
  };

  return (
    <article className="product" onClick={handleSelectProductId}>
      <header className="product__header">
        <img
          className="product__img"
          src={product?.productImgs[0].url}
          alt={product.title}
        />
      </header>

      <section className="product__section">
        <h4 className="product__subtitle">{product.brand}</h4>
        <h3 className="product__title">{product.title}</h3>
      </section>
      <div className="product__price">
        <span className="product__label">price</span>
        <span className="product__price-value">${product.price}</span>
      </div>
      <button onClick={handleBtnClick} className="product__btn">
        <i className="bx bx-cart-alt"></i>
      </button>
    </article>
  );
};

export default CardProduct;
