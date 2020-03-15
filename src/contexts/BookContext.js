import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[], () => {
        const localData = localStorage.getItem("my book");
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
      localStorage.setItem("my book", JSON.stringify(books));
    }, [books])    
    return ( 
        <BookContext.Provider value={{
            books,dispatch
        }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;