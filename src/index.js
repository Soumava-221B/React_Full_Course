import React from "react";
import ReactDOM from "react-dom";
// import ReactComponent  from "../src/ReactCompnent";
// import BookList from "./BookList";
// import BookList from "./Props/Props_Children";
import BookList from "./Imp_Exp_Statement/book";

// stateless function component
// always return JSX

function Greeting() {
  return (
    <div>
      {/* <ReactComponent /> */}
      <BookList />
      {/* <ul>
       <li>
         <a href='#'>Hello wrold</a>
         <input type="text" name='' id=''/>
       </li>
     </ul> */}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
