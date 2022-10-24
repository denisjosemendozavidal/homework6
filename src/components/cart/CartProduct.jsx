import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllCartItems } from '../../store/slices/cart.slice'
import getconfig from '../../utils/getconfig'

const CartProduct = ({product}) => {

  const dispatch = useDispatch()

  const [istrue, setistrue] = useState(false)

  const handleDescription = () => {
    setistrue(!istrue)
  }

  /*https://ecommerce-api-react.herokuapp.com/api/v1/cart/1*/ 

  const handleDelete = id => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`

    axios.delete(url, getconfig())
      .then(res => {console.log(res.data)
                    dispatch(getAllCartItems())})
      .catch(err => console.log(err))
  }
  

  return (
    <article>
        <h3>{product.title}</h3>
        <ul>
          <li>{`Quantity: ${product.productsInCart.quantity}`}</li>
          <li>{`Price: $ ${product.price} `}</li>
          <li onClick={handleDescription}>{`Description:  ${istrue? product.description : "Click here to read description."}`}</li>
        </ul>
        <button onClick={handleDelete}>Delete item <i className="fa-solid fa-trash"></i></button>
    </article>
  )
}

export default CartProduct