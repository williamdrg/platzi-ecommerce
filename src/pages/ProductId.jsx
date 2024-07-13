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
      <div>
        <figure>
          <img src={product?.image} alt={product?.title} className='productid__img' />
        </figure>
        <span>{product?.category}</span>
      </div>
      <div>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
      </div>
      <div>
        <span>Price</span>
        <span>{product?.price}</span>
      </div>
      <div>
        <span>Quantity</span>
        <button onClick={handleLess}>-</button>
        <span>
          {counter}
        </span>
        <button onClick={handlePlus}>+</button>
      </div>
      <div>
        {/* Addition button buy */}
      </div>
    </div>
  )
}

export default ProductId