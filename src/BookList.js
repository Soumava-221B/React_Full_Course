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
    return <article className='book'>
     <Image />
     <Title />
     <Author />
    </article>
}

const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg" alt="Aesop Fables" />

const Title = () => <h3>Tittle = Aesop's Fables</h3>
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Author = Aesop</h4>  
/* Inline CSS is more powerful than css files notice we used style to add color to the element */ 
