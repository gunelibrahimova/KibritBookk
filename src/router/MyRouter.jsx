import React from 'react'
import { Route, Routes } from 'react-router-dom';
import BookDetail from '../components/BookDetail/BookDetail';
import Cart from '../components/Cart/Cart';
import Auth from '../components/Auth/Auth';
import Home from '../Pages/Home';
import AllBook from '../components/AllBook/AllBook';
import PublisherDetail from '../components/PublisherDetail/PublisherDetail';
import LanguageDetail from '../components/LanguageDetail/LanguageDetail';
import GenreDetail from '../components/GenreDetail/GenreDetail';


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/book/:id' element={<BookDetail />}/>
      <Route path='/yayinevi/:id' element={<PublisherDetail />}/>
      <Route path='/dil/:id' element={<LanguageDetail />}/>
      <Route path='/janr/:id' element={<GenreDetail />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/allbook' element={<AllBook />}/>
    </Routes>
  )
}

export default MyRouter