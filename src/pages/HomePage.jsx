import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import ProdCard from "../components/homePage/ProdCard";
import "./styles/homePage.css";

const HomePage = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  // console.log(products)

  return (
    <div className="homepage">
      <div className="homepage__filter"></div>
      <div className="homepage__search"></div>
      <div className="homepage__container">
        {products?.map((prod) => (
          <ProdCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
