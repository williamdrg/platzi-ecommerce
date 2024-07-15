import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import ProdCard from "../components/homePage/ProdCard";
import "./styles/homePage.css";
import FilterSelect from "../components/homePage/FilterSelect";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const [categoryValue, setCategoryValue] = useState("");

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return products.filter(prod => 
      categoryValue === "" ? true : prod.category === categoryValue
    );
  }, [products, categoryValue]);

  console.log(products)

  return (
    <div className="homepage">
      <div className="homepage__filter">
        <FilterSelect setCategoryValue={setCategoryValue} />
      </div>
      <div className="homepage__search"></div>
      <div className="homepage__container">
        {filteredProducts?.map((prod) => (
          <ProdCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
