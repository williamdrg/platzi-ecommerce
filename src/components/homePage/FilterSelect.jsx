import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";

const FilterSelect = ({ setCategoryValue }) => {
  const [categories, getCategories] = useFetch();

  useEffect(() => {
    getCategories("/products/categories");
  }, []);

  const itemSelect = useRef();
  const handleChange = () => {
    setCategoryValue(itemSelect.current.value);
  };

  // console.log(categories);

  return (
    <select ref={itemSelect} onChange={handleChange}>
      <option value=""> All products</option>
      {categories?.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
