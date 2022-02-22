import React from 'react'
import '../index.css'

// const books = [
// {
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg',
//     title: 'Aesop',
//     author: 'Amelia Hepworth',
// },
// {
//     img: 'https://images-eu.ssl-images-amazon.com/images/I/41-iPo45DwL._AC_SX184_.jpg',
//     title: 'The Betrayal Of Annie Frank',
//     author: 'Rosemary Sullivan',
// },
// ];
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
    return <h1>{name}</h1>
});
console.log(newNames);
export default function BookList() {
  return (
    <div className='booklist'>
       {newNames} 
    </div>
  );
}


// const Book = (props) => {    
//     const {img, title, author,} = props;
//     return ( 
//      <article className='book'>
//      <img src={img} alt='' />
//      <h1>{title}</h1>
//      <h4>{author}</h4>     
//     </article>
//     );
// };