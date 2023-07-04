import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/Home/CardProduct";
import "./styles/Products.css";
import "./styles/home.css";
import FilterCategory from "../components/Home/FilterCategory";
import FilterByPrice from "../components/Home/FilterByPrice";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const { productsGlobal } = useSelector((state) => state);

  const input = useRef();

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim());
  };

  const productFilter = productsGlobal
    ?.filter((prod) => prod.title.toLowerCase().includes(inputValue))
    .filter((prod) => {
      const from = +fromTo.from;
      const to = +fromTo.to;
      const price = +prod.price;
      if (from && to) {
        return from <= price && price <= to;
      }
      if (from && !to) {
        return from <= price;
      }
      if (!from && to) {
        return price <= to;
      }
      if (!from && !to) {
        return true;
      }
    });

  return (
    <div className="home">
      <div className="home__filter">
        <input
          className="home__filter-input"
          ref={input}
          onChange={handleChangeInput}
          type="text"
        />
        <span className="home__filter-icon">
          <i className="bx bx-search-alt-2"></i>
        </span>
      </div>

      <div className="home__filter-components">
        <FilterCategory />
        <FilterByPrice setFromTo={setFromTo} />
      </div>

      <div className="products">
        {productFilter?.map((prod) => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
