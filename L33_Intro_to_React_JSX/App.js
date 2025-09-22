import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "div",
//   { id: "parent", key: 1 },
//   React.createElement("div", { id: "child", key: 2 }, [
//     React.createElement(
//       "h1",
//       {
//         id: "h1-tag",
//         key: 3,
//       },
//       "THIS IS H1 TAG"
//     ),
//     React.createElement(
//       "h2",
//       {
//         id: "h2-tag",
//         key: 4,
//       },
//       "THIS IS H2 TAG"
//     ),
//   ])
// );

// console.log(heading);

//JSX
// const nameOfStudent = <h1>THIS IS CLASS G5</h1>

// const jsxHeading = <div id= "heading-jsx">THIS IS JSX HEADING</div>

// console.log(nameOfStudent)

// React Element
const headingEle = <h1 className="heading-jsx"> THIS IS NORMAL JSX</h1>;

console.log(headingEle);

//React Component

const ReactComponent1 = () => {
  return <h1>THIS IS OFFICIAL REACT COMPONENT: HEADER</h1>;
};
console.log(ReactComponent1);

const ReactComponent2 = () => {
  return <h1>THIS IS OFFICIAL REACT COMPONENT: FOOTER</h1>;
};
console.log(ReactComponent2);

const MainComponent = () => {
  return (
    <div className="parent-div">
      <ReactComponent1 />
      <h1>THIS IS OFFICIAL REACT MAIN COMPONENTS</h1>
      <ReactComponent2 />
    </div>
  );
};
console.log(MainComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
// root.render(<ReactComponent></ReactComponent>);
