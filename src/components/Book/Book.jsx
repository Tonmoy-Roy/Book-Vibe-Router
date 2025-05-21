import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book = {} }) => {
    return (
        // <div className='border'>
        //     <div className='border md:h-20vh'>
        //         <img className='md:h-20vh' src={book.image} alt="" />
        //     </div>
        //     <div className='flex'>
        //         <p className='mr-5  text-green-300 md:w-30'>Young Adult</p>
        //         <p className=' text-green-300'>Identity</p>
        //     </div>
        //     <p className='text-3xl'>{book.bookName}</p>
        //     <p className=''>By : {book.author}</p>
        //     <div className='flex md:justify-between'>
        //         <p className=''>{book.tags}</p>
        //         <p className=''>Ratings : {book.rating}</p>
        //     </div>
        // </div>
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='bg-blue-200 mb-5 p-5 rounded-2xl'>
                <img className='h-[400px]' src={book.image} alt="" />
            </figure>
            <div className='flex'>
                <p className='mr-5  text-green-300 md:w-30'>{book.tags}</p>
            </div>
            <div className="">
                <h2 className="card-title">{book.bookName}</h2>
                <p>By : {book.author}</p>
                <div className='flex md:justify-between'>
                    <p className=''>{book.category}</p>
                    <div className='flex'>
                        <p className='mr-2'>{book.rating}</p>
                        <div className="rating">
                            <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <Link to={`/books/${book.bookId}`}><button>View</button></Link>
            </div>
        </div>
    );
};

export default Book;