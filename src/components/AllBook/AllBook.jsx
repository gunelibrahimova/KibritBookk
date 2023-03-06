import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "./allBook.scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, fetchBook } from "../../redux/Reducer/cartSlice";
import Pagination from "../Pagination/Pagination";

const AllBook = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.cart.data.message);
    const[query,setQuery] = useState("");
    useEffect(() => {
        dispatch(fetchBook())
    }, [])

    const notify = () =>
        toast(
            <Link to="/cart" style={{ textDecoration: "none" }}>
                "Product added to cart !"
            </Link>
        );


    return (
        <div id="allBook">
            <div className="container">
                <input type='text' placeholder="Search.." className="search" onChange={(e) => setQuery(e.target.value)}/>
                <div className="book">
                    <div className="row">
                        {data &&
                           data.filter((book) => book.name.toLowerCase().includes(query) || book.genreName.toLowerCase().includes(query) || book.authorName.toLowerCase().includes(query))
                            .map((book) => (
                                <div className="col-lg-4">
                                    <div className="box">
                                        <div className="image" key={book.id}>
                                            <Link to="/book">
                                                <img
                                                    src={book.photoURL} width="100%"
                                                    alt=""
                                                />
                                            </Link>
                                            <div className="icons">
                                                <Link to="/book">
                                                    <i className="fa-solid fa-eye icon"></i>
                                                </Link>
                                                <br />
                                                <i className="fa-solid fa-heart icon"></i>
                                                <br />
                                                <i className="fa-solid fa-bag-shopping icon" onClick={() => dispatch(addToCart(book))}></i>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <span className="box1 super">{book.name}</span>
                                            <span>Genre : {book.genreName}</span> <br />
                                            <span>Yazar adi : {book.authorName}</span>
                                            <span className="box1 number">{book.price}₼</span>
                                            <span className="sebet" onClick={() => {
                                                dispatch(addToCart(book));
                                                notify()
                                            }}>Səbətə at</span>
                                        </div>
                                    </div>
                                </div>

                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBook