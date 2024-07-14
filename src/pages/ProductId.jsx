import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/productid.css'

const ProductId = () => {

  const [counter, setCounter] = useState(1)

  const {id} = useParams()

  const [ product, getProduct ] = useFetch();

  useEffect(() => {
    const path = `/products/${id}`;
    getProduct(path)
  }, []);

  const handleLess = () => {
    if (counter > 1) {
      return setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    return setCounter(counter + 1)
  }

  console.log(product)

  return (
    <div className='productid'>
      <div className='productid__picture'>
        <span className='productid__routes'>
          <a href="/">Home</a> 
          {'>'}
          {product?.title}</span>
        <figure>
          <img src={product?.image} alt={product?.title} className='productid__img' />
        </figure>
      </div>
      <div className='productid__info'>
        <h1 className='productid__title'>{product?.title}</h1>
        <p className='productid__description'>{product?.description}</p>
        <div className='productid__details'>
          <div className='productid__price'>
            <span className='productid__text-price'>Price</span>
            <span className='productid__cost-price'>
              ${(product?.price * counter).toFixed(2)}
            </span>
          </div>
          <div className='productid__quantity'>
            <span className='productid__text-price'>Quantity</span>
            <div className='productid__buttons'>
              <button onClick={handleLess} className='productid__btn'>
                -
              </button>
              <span className='productid__count'>
                {counter}
              </span>
              <button onClick={handlePlus} className='productid__btn'>
                +
              </button>
            </div>
          </div>
          <div className='productid__buy-section'>
            {/* Addition button buy */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductId