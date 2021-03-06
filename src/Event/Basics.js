import React from "react";
import "../index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/819tTN23S3L._AC_UL116_SR116,116_.jpg",
    title: "Aesop",
    author: "Amelia Hepworth"
  },
  {
    id: 2,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/41-iPo45DwL._AC_SX184_.jpg",
    title: "The Betrayal Of Annie Frank",
    author: "Rosemary Sullivan"
  },
  {
    id: 3,
    img:
      "https://m.media-amazon.com/images/I/71PxTsorCjL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Elements Of Computer Network",
    author: "Narasimha Karumanch"
  }
];

export default function BookList() {
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
