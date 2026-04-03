import "./ProductCard.css"
import { useState, useEffect } from "react";
function ProductCard({title,price,imgUrl,description}) {
    const[quantity,setQuantity] = useState(1);
    const[totalPrice,setTotalPrice] = useState(price);
    useEffect(() => {
        setTotalPrice(quantity * price);
    }, [quantity, price]);
  return (
    <div className="product-card">
        <img src={imgUrl} alt={title} className="product-image"/>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">Rs{price}</p>
       
<div>
    <button onClick={() => setQuantity(quantity - 1)}>-</button>
        {quantity}
        <button onClick={() => setQuantity(quantity + 1)}>+</button>

        </div>
        <p>Total price:₹{totalPrice}</p>

export default ProductCard