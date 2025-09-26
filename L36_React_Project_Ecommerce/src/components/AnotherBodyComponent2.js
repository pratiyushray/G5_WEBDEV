// IMPORTS

import { useEffect, useState } from "react";
import productData from "../data";
import ProductCardComponent from "../components/ProductCardComponent";
import "./Styles.css";


const AnotherBodyComponent = () => {

  // // NORMAL JS VARIDABLE
  // let myClass = "G5 2026"

  // // STATE VARIABLE

  // const [myClassD, setMyClassD] = useState("G5 2026");

  // LOGICS
  // console.log(productData)

  const [numberOfStudent, setNumberOfStudent] = useState(0);
  const [numberOfStudent2, setNumberOfStudent2] = useState(0);

  useEffect(()=>{
    console.log("USE EFFECT RENDER")
  },[numberOfStudent])


  console.log("THIS IS MY BODY COMPONENT RENDER")

  return (
    <div id="another-body-container">
      <h1>THIS IS ANOTHER COMPONENT</h1>
      <h1>NUMBER OF STUDENTS: {numberOfStudent}</h1>

      <button onClick={()=>{
        console.log("INCREMENT")
        setNumberOfStudent(numberOfStudent+1);

      }}> Increase Students</button>
        <button onClick={()=>{
        console.log("INCREMENT")
        setNumberOfStudent2(numberOfStudent2+1);

      }}> Increase 2 Students</button>
      
      
      <button onClick={()=>{
        console.log("DECREMENT")
        setNumberOfStudent(numberOfStudent-1);
      }}> Decrease Students</button>
    </div>

    //     <div id="another-body-container">
    //   <h1>THIS IS ANOTHER COMPONENT</h1>
    //   <h1>MY CLASS : {myClass}</h1>
    //   <h1>MY CLASSD USE STATE : {myClassD}</h1>
    //   <button onClick={()=>{
    //     myClass ="G6 Passed Out"
    //     setMyClassD("G6 Passed Out")
    //     console.log("NORMAL VARIABLE",myClass)
    //     console.log("STATE VARIABLE",myClassD)
    //   }}> UPDATE CLASS</button>
    //   {productData.map((product) => {
    //     return (
    //         <ProductCardComponent key={product.id} data={product}/>
    //     );
    //   })}
    // </div>
  );
};

export default AnotherBodyComponent;
