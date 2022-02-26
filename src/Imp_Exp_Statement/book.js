import React from "react";
import "../index.css";

import {books} from '../Imp_Exp_Statement/books';

export default function BookList() {
  console.log(books);
  return (
    <div className="booklist">
      {books.map((book) => {
        console.log(book);
        return <Book key={book.id} {...book}></Book>; // passing book as an object
      })}
    </div>
  );
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e);
    alert("Hello world");
  };

  const complexExample = (author) => {

  }
  return (
    <article className="book" onMouseOver={()=> {
      console.log(title);
      console.log(img);
    }}>
      <img src={img} alt="" />
       <h1 onClick={()=> console.log(title)}>{title}</h1>     {/* check console when hovering over it*/}      
      <h4 onClick={()=> console.log(author)}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={complexExample(author)}>more complex example</button>
    </article>
  );
};