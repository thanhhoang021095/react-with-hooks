import React, { useContext } from 'react';
import BookDetail from "./BookDetail";
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const{books} =  useContext(BookContext);
    return books.length? ( 
        <div className="book-list">
            <ul>
                {books.map(book => (
                    <BookDetail key={book.id} book={book}/>
                ))}
            </ul>
        </div>
     ) : (
         <div className="empty">
             No Books to read. Thanks for your support !
         </div>
     );
}
 
export default BookList;