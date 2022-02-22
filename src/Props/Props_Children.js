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
        >
            <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam saepe fugiat quidem accusantium aliquam perspiciatis error quibusdam, eius quaerat repellat?
         </p>
        </Book>

        <Book img={secondBook.img} 
        title={secondBook.title} 
        author={secondBook.author} />
    </div>
  );
}

// Object Destructuring

const Book = ({img, title, author,children}) => {    
   // const {img, title, author} = props;
    return ( 
     <article className='book'>
     <img src={img} alt='' />
     <h1>{title}</h1>
     <h4>{author}</h4>     
     {/* {console.log(props)} */}
     {children}
    </article>
    );
};