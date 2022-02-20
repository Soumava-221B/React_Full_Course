import React from "react";
import ReactDOM  from "react-dom";
import ReactComponent  from "../src/ReactCompnent";
import BookList from "./BookList";

 // stateless function component
 // always return JSX

function Greeting() {
  return (
   <div>
     <h1>Hello World</h1>
     <ReactComponent />
     <BookList />
     <ul>
       <li>
         <a href='#'>Hello wrold</a>
         <input type="text" name='' id=''/>
       </li>
     </ul>
   </div>
  );
}


ReactDOM.render(<Greeting />, document.getElementById('root'));
