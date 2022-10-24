import React, { useEffect, useState } from 'react'

const Productinfo = ({product}) => {

  const [counter, setCounter] = useState(1)
  const [price, setprice] = useState(product?.price)
  
  const handlePlus = e => {
      setCounter(counter + 1)
  }

  const handleMinus = e => {
    setCounter(counter - 1)
    if (counter == 1) {
      setCounter(1)
    }
}

  return (
    <article className='product-info'>
        <h2 className='product-info-tittle'>{product?.title}</h2>
        <p className='product-info-description'>{product?.description}</p>
        <div>
          <div>
              <p>Price:</p>
              <p>${price * counter}</p>
          </div>
          <div>
            <p>Quantity:</p>
            <div>
              <i onClick={handlePlus} className="fa-thin fa-plus"></i>
              <p>{counter}</p>
              <i onClick={handleMinus} className="fa-sharp fa-solid fa-minus"></i>
            </div>
          </div>
          <button>
          Add to cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
    </article>
  )
}

export default Productinfo