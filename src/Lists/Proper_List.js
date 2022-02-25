import React from 'react'
import '../index.css'

const books = [
{
    img: 'https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg',
    title: 'Aesop',
    author: 'Amelia Hepworth',
},
{
    img: 'https://images-eu.ssl-images-amazon.com/images/I/41-iPo45DwL._AC_SX184_.jpg',
    title: 'The Betrayal Of Annie Frank',
    author: 'Rosemary Sullivan',
},
];

export default function BookList() {
  return (
    <div className='booklist'>
       {books.map((book)=>{
           console.log(book);
           const{img,title,author} = book;
           return (
               <div>
                   <h3>{title}</h3>
                   <h6>{author}</h6>
               </div>
           );
       })} 
    </div>
  );
}


const Book = (props) => {    
    const {img, title, author,} = props;
    return ( 
     <article className='book'>
     <img src={img} alt='' />
     <h1>{title}</h1>
     <h4>{author}</h4>     
    </article>
    );
};