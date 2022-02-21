import React from 'react'
import './index.css'

export default function BookList() {
  return (
    <div className='booklist'>
        <Book />
    </div>
  );
}

const Book = () => {            
    return ( 
     <article className='book'>
     <img src="https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg" alt="Aesop Fables" />
     <h1>Tittle = Aesop's Fables</h1>
     <h4>Author = Aesop</h4>
    </article>
    );
};
