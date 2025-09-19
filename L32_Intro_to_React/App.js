//    <div id = root>
//          <h1> THis is React </h1>
//     </div>

//    <div id = root>
//         <div id = "parent">
// <h1>THIS IS REACT</h1>
// </div>
//     </div>

// const heading = React.createElement("h1", {id:"heading-1"}, "THis is React!!!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("h1", { id: "heading1" }, "THIS IS G5 REACT CLASS")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



// //    <div id = root>
// //         <div id = "parent">
// //                 <div id = "child">
//                         // <h1>THIS IS REACT </h1>
// //              
// //                  </div>
// //          </div>
// //     </div>

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", {id:"child"}, React.createElement("h1", { id: "heading1" }, "THIS IS G5 REACT CLASS"))
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



//    <div id = root>
//         <div id = "parent">
//                 <div id = "child">
                        // <h1>THIS IS REACT </h1>
                        // <h2>THIS IS H2 REACT </h2>
//              
//                  </div>
//          </div>
//     </div>

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent", key:1 },
  React.createElement("div", {id:"child", key:2}, [React.createElement("h1", { id: "heading1", key:3 }, "THIS IS G5 REACT CLASS"),React.createElement("h1", { id: "heading2", key:4 }, "THIS IS G5 REACT CLASS hsdasdsadskjkadassadsakhuhiuhiuyiuyiu2")])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);