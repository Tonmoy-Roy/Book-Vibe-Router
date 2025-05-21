import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [Books, setBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <p className='text-center text-3xl mb-5'>Books</p>
            <div className='grid md:grid-cols-3 gap-20'>
                {
                    Books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;