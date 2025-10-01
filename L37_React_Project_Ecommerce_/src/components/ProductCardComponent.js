const ProductCardComponent = (props) =>{
  // console.log("PROPS",props)

  const {id, title, price, discountPercentage, rating, images} = props?.data;

  return (
    <div id="product-container">
      <div id="img-product">
        <img src={images[0]}></img>
      </div>
      <span>{id}</span>
      <span>{title}</span>
      <span>{price}</span>
      <span>{discountPercentage}</span>
      <span>{rating}</span>
      <button> ADD TO CART</button>
      <button> BUY NOW</button>
    </div>
  )
}

export default ProductCardComponent;