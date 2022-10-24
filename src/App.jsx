import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import LoginScreen from './Pages/LoginScreen'
import Productid from './Pages/Productid'
import ProtectedRoutes from './Pages/ProtectedRoutes'
import Purchases from './Pages/Purchases'



function App() {
  /*
  useEffect(() => {
    const url = `https://ecommerce-api-react.herokuapp.com/api/v1/users`

    const data = {
      firstName: "Denis",
      lastName: "Mendoza",
      email: "denis@gmail.com",
      password: "pass1235",
      phone: "1234567892",
      role: "admin",
  }

    axios.post(url, data)
      .then( res => console.log(res.data))
      .catch( err => console.log(err))
  }, [])

  '
  */



  return (
    <div className="App">
    <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Productid/>} />
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes/>}>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/purchases" element={<Purchases/>}/>
        </Route>


      </Routes>
    </div>
  )
}

export default App
