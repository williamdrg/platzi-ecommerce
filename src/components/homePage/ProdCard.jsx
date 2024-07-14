import "./styles/prodCard.css";

const ProdCard = ({ prod }) => {
  return (
    <dir className="prodcard">
      <div className="prodcard__container">
        <figure className="prodcard__img">
          <img src={prod.image} alt="product image" />
        </figure>
        <div className="prodcard__data">
          <div className="prodcard__price">{prod.price}</div>
          <div className="prodcard__title">{prod.title}</div>
          <div className="prodcard__category">{prod.category}</div>
        </div>
      </div>
    </dir>
  );
};

export default ProdCard;
