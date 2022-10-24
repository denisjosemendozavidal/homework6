import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCartItems } from '../../store/slices/cart.slice'
import getconfig from '../../utils/getconfig'

const CardProduct = ({product}) => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleNavigation = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddToCart = e => {
    e.stopPropagation()
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
    const data = {
      id: product.id,
      quantity: 1, 
    }
    axios.post(url, data, getconfig())
      .then(res => {console.log(res.data) 
                  dispatch(getAllCartItems())})
      .catch(err => console.log(err))
  }

  return (
    <article className='prduct' onClick={handleNavigation}>
        <header className='product_header'>
            <img src={product?.productImgs[0]} alt="" />
        </header>
        <div className='product__body'>
            <h3 className='product__title'>{product.title}</h3>
            <div className='product__price'>
                <span>Price</span><p>{product.price}</p>
            </div>
            <button onClick={handleAddToCart} className='product__shopping__cart__container'>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </div>
    </article>
  )
}

export default CardProduct