import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal, removeItem, decreaseItemQuantity, increaseItemQuantity, } from '../../redux/Reducer/cartSlice'
import './cart.scss'

const Cart = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);


    return (
        <div>
            <div id='cart'>
                <div className="box">
                    <div className="image">
                        <div className="d-flex">
                            <Link to="/" style={{ textDecoration: "none" }}><p style={{ cursor: "pointer" }}>Home / </p></Link>
                            <p style={{ marginLeft: "10px" }}>Cart</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <h1>Cart</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
            </div>
            <div id="cartTotal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 box">
                            <table>
                                <thead>
                                    <tr>
                                        <th>PICTURE</th>
                                        <th>PRODUCT</th>
                                        <th className="product">PRICE</th>
                                        <th>QUANTITY</th>
                                        <th className="product">SUBTOTAL</th>
                                        <th>REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.length > 0
                                        ? cart.map((product) => (
                                            <tr>
                                                <td>
                                                    <img
                                                        src={product.photoURL}
                                                        alt=""
                                                    />
                                                </td>
                                                <td>{product.name}</td>
                                                <td className="product">{product.price} £</td>


                                                <td className='incDecButton'>
                                                    <button className="fas fa-minus" onClick={() => dispatch(decreaseItemQuantity(product.id))} ></button>
                                                    {product.quantity &&
                                                        product.quantity < 0 ? 0 : product.quantity}
                                                    <button className="fas fa-plus" onClick={() => dispatch(increaseItemQuantity(product.id))}></button>
                                                </td>


                                                <td className="product">{
                                                    product.price * product.quantity &&
                                                        product.price * product.quantity < 0 ? 0 : product.price * product.quantity} £</td>
                                                <td>
                                                    <i class="fa-solid fa-x" style={{ cursor: "pointer" }} onClick={() => dispatch(removeItem(product.id))}></i>
                                                </td>
                                            </tr>
                                        ))
                                        : (
                                            <>
                                                <p>Your cart is currently empty.</p>
                                                <div className="deneme">
                                                    <span className="shop">
                                                        <Link to='/shop' style={{ textDecoration: "none", color: "black" }}>RETURN TO SHOP</Link>
                                                    </span>
                                                </div>
                                            </>
                                        )}

                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="collaterals">
                                <div className="cart_totals">
                                    <h2>Cart totals</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Total Quantity</th>
                                                <td>{totalQuantity && totalQuantity < 0 ? 0 : totalQuantity}</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td style={{ fontWeight: "700" }}>£{totalPrice && totalPrice < 0 ? 0 : totalPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="deneme">
                                        <span className='shop' >Proceed to checkout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default Cart