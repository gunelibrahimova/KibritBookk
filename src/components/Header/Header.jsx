import React from 'react'
import './header.scss'
import logo from "../../Image/logo.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from '../../redux/Reducer/cartSlice';
import { Link } from 'react-router-dom';

const Header = () => {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div id='header'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="col-lg-8 ">
            <div className="logo d-flex align-items-center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <h5 style={{ color: "black" }}>Əsas Səhifə</h5>
              </Link>
              <img width={100} height="100" src={logo} alt="" />
              <Link to="/allbook" style={{ textDecoration: "none", color:"black" }}>
                <h5>Bütün məhsullar</h5>
              </Link>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="icon">
              <Link to="/auth">
                <i class="fa-regular fa-user" style={{ color: "black" }}></i>
              </Link>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <i class="fa-solid fa-cart-shopping car price"></i>
                <span className='price'>{totalQuantity}məhsul</span><span className="price">/{totalPrice}₼</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header