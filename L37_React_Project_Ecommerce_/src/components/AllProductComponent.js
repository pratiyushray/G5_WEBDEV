import { useEffect, useState } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import "./Styles.css";
import ProductShimmer from "../components/ProductShimmer"


const AllProductComponent = () => {
  const [productData, setProductData]= useState([]);
  const [filteredProductData, setFilteredProductData ]= useState([]);
  const [searchText, setSearchText] = useState("THIS IS FIRST SEARCH");

  useEffect(()=>{
    fetchData()
  },[])

  async function fetchData(){
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // console.log(data);
      setProductData(data?.products)
      setFilteredProductData(data?.products)
    }

  function filterSearch(){
    const filteredData = productData.filter((product)=>
      product.title.toLowerCase().includes(searchText.toLowerCase())  
    )
    console.log("SEARCHED DATA",filteredData)
    setFilteredProductData(filteredData);
  }

  if(filteredProductData.length === 0){
    return <ProductShimmer/>
  }
  

  return (
    <div id="another-body-container">
      <div id="search-container">
        <input placeholder="Search here" onChange={(e)=>{
          setSearchText(e.target.value);
        }}></input>
        <button onClick={()=>{
          filterSearch();
          console.log(searchText)
        }}>Search</button>
      </div>
      <div><h1>ALL PRODUCTS</h1></div>
      <div id="product-card-all">
        {
        filteredProductData.map((product)=>{
            return <ProductCardComponent key={product?.id} data={product}/>
        })
      }
      </div>

    </div>

  );
};

export default AllProductComponent;
