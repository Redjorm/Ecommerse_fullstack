import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import "./styles/filterCategory.css";

const FilterCategory = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_URL;
  const dispatch = useDispatch();

  const url = `${URL_BASE}/categories`;
  const [categories, getAllCategories] = useFetch(url);

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClickCategories = (id) => {
    const url = `${URL_BASE}/products?categoryId=${id}`;

    dispatch(getAllProductsThunk(url));
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };
  /* console.log(categories); */

  return (
    <details className="filter__category">
      <summary>Category</summary>
      <ul className="filter__category-ul">
        <li className="filter__category-li" onClick={handleClickAllProducts}>
          All Products
        </li>
        {categories?.map((category) => (
          <li
            className="filter__category-li"
            onClick={() => handleClickCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </details>
  );
};

export default FilterCategory;
