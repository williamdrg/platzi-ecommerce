import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/productid.css'

const ProductId = () => {

  const {id} = useParams()

  const [ product, getProduct ] = useFetch();

  useEffect(() => {
    const path = `/products/${id}`;
    getProduct(path)
  }, []);

  console.log(product)

  return (
    <div className='productid'>
      <div>
        <figure>
          <img src={product?.image} alt={product?.title} className='productid__img' />
        </figure>
      </div>
    </div>
  )
}

export default ProductId