import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import ProdCard from "../components/homePage/ProdCard";
import "./styles/homePage.css";
import FilterSelect from "../components/homePage/FilterSelect";

const HomePage = () => {
  const products = useSelector((store) => store.products);
  const [categoryValue, setCategoryValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const cbFilter = (prod) => {
    const categoryFilter =
      categoryValue === "" ? true : prod.category === categoryValue;
    return categoryFilter;
  };
  // console.log(products)

  return (
    <div className="homepage">
      <div className="homepage__filter">
        <FilterSelect setCategoryValue={setCategoryValue} />
      </div>
      <div className="homepage__search"></div>
      <div className="homepage__container">
        {products?.filter(cbFilter).map((prod) => (
          <ProdCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
