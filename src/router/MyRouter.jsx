import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BookDetail from '../components/BookDetail/BookDetail';
import Cart from '../components/Cart/Cart';
import Auth from '../components/Auth/Auth';
import Home from '../Pages/Home';
import AllBook from '../components/AllBook/AllBook';


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/book' element={<BookDetail />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/allbook' element={<AllBook />}/>
    </Routes>
  )
}

export default MyRouter