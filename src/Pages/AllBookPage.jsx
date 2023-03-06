import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AllBook from '../components/AllBook/AllBook';
// import Pagination from '../components/Pagination/Pagination';
import { fetchBook } from '../redux/Reducer/cartSlice';

const AllBookPage = () => {

    const data = useSelector(state => state.cart.data.message)

    console.log(data);

    useEffect(() => {
        dispatchEvent(fetchBook())
    }, [])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex, lastPostIndex);
    return (
        <div>
            <AllBook data={currentPosts}/>
            {/* <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            /> */}
        </div>
    )
}

export default AllBookPage