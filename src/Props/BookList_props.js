import React from 'react'
import '../index.css'

// setup vars 
// const author = 'Aesop'
// const title = 'Aesop Fable'
// const img = 'https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg'
const firstBook = {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg',
    title: 'Aesop',
    author: 'Amelia Hepworth'
}
const secondBook = {
    img: 'https://images-eu.ssl-images-amazon.com/images/I/41-iPo45DwL._AC_SX184_.jpg',
    title: 'The Betrayal Of Annie Frank',
    author: 'Rosemary Sullivan'
}

export default function BookList() {
  return (
    <div className='booklist'>
        {/* <Book job='developer'/> */}
        <Book img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author}
        />
        <Book img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} />
    </div>
  );
}

const Book = (props) => {    
    console.log(props);
    return ( 
     <article className='book'>
     <img src={props.img} alt='' />
     <h1>{props.title}</h1>
     <h4>{props.author}</h4>
     <p>{props.title}</p>
     {/* {console.log(props)} */}
    </article>
    );
};