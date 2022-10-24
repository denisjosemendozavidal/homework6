import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const productsSlice = createSlice ({
    name: "products",
    initialState: null,
    reducers: {
        setProductsGlobal: (state, action) => action.payload
    }
})


export const {setProductsGlobal} = productsSlice.actions

export default productsSlice.reducer


export const getAllProducts = () => dispatch => {
    const url ="https://ecommerce-api-react.herokuapp.com/api/v1/products"
    return axios.get(url)
        .then(res => dispatch(setProductsGlobal(res.data.data.products)))
        .catch(err => console.log(err))
}

