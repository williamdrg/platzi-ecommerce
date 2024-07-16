import React from "react";
import "./styles/prodCard.css";
import { useNavigate } from "react-router-dom";

const ProdCard = ({ prod }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`product/${prod.id}`);
  };
  //console.log(prod);

  return (
    <dir onClick={handleDetail} className="prodcard">
      <div className="prodcard__container">
        <figure className="prodcard__img">
          <img src={prod.image} alt="product image" />
        </figure>
        <div className="prodcard__data">
          <div className="prodcard__price">$ {prod.price}</div>
          <div className="prodcard__title">{prod.title}</div>
        </div>
        <div className="prodcard__button">
          <button>Agregar #</button>
        </div>
      </div>
    </dir>
  );
};

export default ProdCard;
