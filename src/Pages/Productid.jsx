import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productinfo from '../components/Productid/Productinfo'
import SimilarProducts from '../components/Productid/SimilarProducts'

const Productid = () => {

  const [product, setProduct] = useState()
  

  const {id} = useParams()

 

  useEffect(() => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(url)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }, [id])

  
 

  

  return (
    <div>
      <Productinfo product={product}/>
      <SimilarProducts product={product}/>
    </div>
  )
}

export default Productid