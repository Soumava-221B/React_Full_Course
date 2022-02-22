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
      const title = 'I Love You to the Moon and Back';
      const author = 'Aesop';    
    return ( 
     <article className='book'>
     <img src="https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg" alt="Aesop Fables" />
     <h1>{title}</h1>
     <h4>{author.toUpperCase()}</h4>
     <p>{6 + 6}</p>
    </article>
    );
};
