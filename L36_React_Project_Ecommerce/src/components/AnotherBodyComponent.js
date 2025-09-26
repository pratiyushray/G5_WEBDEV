// IMPORTS

import { useEffect, useState } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import "./Styles.css";


const AnotherBodyComponent = () => {

  const [productData, setProductData]= useState([]);
  // console.log(productData)

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // console.log(data);
      setProductData(data?.products)
    }

  return (
    <div id="another-body-container">
      <div><h1>ALL PRODUCTS</h1></div>
      <div id="product-card-all">
        {
        productData.map((product)=>{
            // console.log("product",product);
            return <ProductCardComponent key={product?.id} data={product}/>
        })
      }
      </div>

    </div>

  );
};

export default AnotherBodyComponent;
