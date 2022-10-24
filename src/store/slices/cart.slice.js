import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getconfig from "../../utils/getconfig";

const cartSlice = createSlice({
    name: "cart",
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload 
    } 
})



export const {setCartGlobal} = cartSlice.actions

export default cartSlice.reducer

export const getAllCartItems = () => dispatch => {
    const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    return axios.get(url, getconfig())
            .then(res => dispatch(setCartGlobal(res.data.data.cart)))
            .catch(err => console.log(err))
                
}

