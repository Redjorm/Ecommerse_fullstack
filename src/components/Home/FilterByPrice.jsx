import React from "react";
import { useForm } from "react-hook-form";
import "./styles/filterByPrice.css";
const FilterByPrice = ({ setFromTo }) => {
  const { reset, register, handleSubmit } = useForm();

  const submit = (data) => {
    setFromTo(data);
    reset({
      from: "",
      to: "",
    });
  };

  return (
    <details className="filter__price">
      <summary>Filter by price</summary>
      <form className="filterprice__form" onSubmit={handleSubmit(submit)}>
        <div className="filterprice__content-input">
          <label htmlFor="from">Form</label>
          <input {...register("from")} type="number" id="from" />
        </div>
        <div className="filterprice__content-input">
          <label htmlFor="to">To</label>
          <input {...register("to")} type="number" id="to" />
        </div>
        <button className="filter__price-btn">Filter Prices</button>
      </form>
    </details>
  );
};

export default FilterByPrice;
