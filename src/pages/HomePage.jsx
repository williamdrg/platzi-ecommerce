import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import ProdCard from "../components/homePage/ProdCard";
import "./styles/homePage.css";
import FilterSelect from "../components/homePage/FilterSelect";
import FilterPrice from "../components/homePage/FilterPrice";

const HomePage = () => {
  const products = useSelector((store) => store.products);
  const [categoryValue, setCategoryValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputPrice, setInputPrice] = useState({
    min: 0,
    max: Infinity,
  })
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);
  
  const textInput = useRef();
 
  const handleChange = () => {
    setInputValue(textInput.current.value.trim().toLowerCase());
  } 

  const cbFilter = (prod) => {
    const nameFilter = prod.title.toLowerCase().includes(inputValue);
    const priceFilter = prod.price >= inputPrice.min && prod.price <= inputPrice.max;
    const categoryFilter =
    categoryValue === "" ? true : prod.category === categoryValue;
    return  nameFilter && priceFilter && categoryFilter;
  };
   console.log(products)
  
  return (
    <div className="homepage">
      <div className="homepage__filter">
        <FilterPrice setInputPrice={setInputPrice}/>
      </div>
      <div className="homepage__search">
        <input ref={textInput} onChange={handleChange} type="text" />
        <FilterSelect setCategoryValue={setCategoryValue} />
      </div>
      <div className="homepage__container">
        {products?.filter(cbFilter).map((prod) => (
          <ProdCard key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
