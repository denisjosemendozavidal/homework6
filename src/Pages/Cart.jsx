import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartItems, setCartGlobal } from '../store/slices/cart.slice'
import getconfig from '../utils/getconfig'

const Cart = () => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(getAllCartItems())
  }, [])
  
  const handlePurchase = () => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`

    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
  }

    axios.post(url, data, getconfig())
      .then(res => {console.log(res.data)
                  dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err))
  }

  
    
   const total = cart?.products.map(product => {
      let totalTopay = Number(0);
      let arrayOfPrices = [];
      arrayOfPrices.push(Number(product.price))
        for (let i = 0; i < arrayOfPrices.length; i++) {
        totalTopay += arrayOfPrices[i]
        }
      return totalTopay
    }
    )

    let AmountToPay = 0;

    if (total) {
      for (let i = 0; i < total.length; i++) {
        AmountToPay += total[i]
      }
    }

  


return (
  <div>
      <div>
        <h1>Cart</h1>
          {
          cart?.products.map (product => (
            <CartProduct key={product.id} product={product} />
            
          ))
          }
      </div>
      <div>
      </div>
      <h4>{`Amount to pay: $ ${AmountToPay}`}</h4>
      <button onClick={handlePurchase}>Buy now</button>
    </div>
  )
}

export default Cart

