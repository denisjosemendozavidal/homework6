import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../Home/CardProduct'

const SimilarProducts = ({product}) => {

    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    const [similarProducts, setSimilarProducts] = useState()

    useEffect(() => {
        const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
        axios.get(url)
          .then(res => setCategories(res.data.data.categories))
          .catch(err => console.log(err))
      }, [])
      
      

      useEffect(() => {
          if (categories && product) {
            setIdCategory(categories.filter(category => category.name === product.category)[0].id)
          }

      }, [categories, product])

      

      useEffect(() => {

        if (idCategory) {
            const url= `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
            axios.get(url)
                .then(res => setSimilarProducts(res.data.data.products))
                .catch(err => console.log(err))
            
        }

      }, [idCategory])

      

    return (
        <div>
            <h2>Similar products</h2>
            <div>
                {
                    similarProducts?.map(similarProduct => {
                        if(product.id !== similarProduct.id) {
                            return <CardProduct key={similarProduct.id} product={similarProduct}/>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SimilarProducts