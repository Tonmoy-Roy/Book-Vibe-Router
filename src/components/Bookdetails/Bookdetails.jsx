import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Bookdetails = () => {
    const { bookId } = useParams(); //jkhn view button click hcche tkhn setar(path/URL) e unique 1 ta id thake.
    const id = parseInt(bookId);
    const data = useLoaderData(); //fetch data stored
    const book = data.find(book => book.bookId === id); //path er unique id jkhn json datar sathe match kore
    //book er mddhe specific data ta ache.
    console.log(book);
    return (
        <div className='text-center'>
            <p className='text-center font-bold text-3xl mb-5'>Book-Details : {bookId}</p>
            <div className='md:flex items-center justify-center mb-5'>
                <div className='mr-9'>
                    <img className='md:h-[400px]' src={book.image} alt="" />
                </div>
                <div>
                    <p className='font-bold'>Book Name : {book.bookName}</p>
                    <p>Author : {book.author}</p>
                    <p className='mb-2'>Category : {book.category}</p>
                    <button className='btn btn-outline btn-accent mr-3'>Read</button>
                    <button className='btn btn-outline btn-accent'>Buy</button>
                </div>
            </div>
            <p>{book.review}</p>

        </div>
    );
};

export default Bookdetails;
