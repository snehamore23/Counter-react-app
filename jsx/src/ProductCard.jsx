import "./ProductCard.css";
import { useState, useEffect } from "react";

function ProductCard({ title, price, imgUrl, description, turnOffDiscount }) {

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);
    const [discount, setDiscount] = useState(0);

    // Calculate total price
    useEffect(() => {
        setTotalPrice(price * quantity);
    }, [quantity, price]);

    // Apply discount
    useEffect(() => {
        if (turnOffDiscount) {
            setDiscount(0);
            return;
        }

        if (totalPrice > 5000) {
            setDiscount((totalPrice * 10) / 100); // 10% discount
        } else {
            setDiscount(0); // reset discount
        }

    }, [totalPrice, turnOffDiscount]);

    return (
        <div className="product-card">

            {discount > 0 && (
                <span className="discount-badge">10% OFF</span>
            )}

            <img src={imgUrl} alt={title} className="product-image" />

            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>

            <p className="product-price">₹{price}</p>

            <div className="quantity-controls">
                <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))} 
                    disabled={quantity <= 1}
                >
                    -
                </button>

                <span>{quantity}</span>

                <button onClick={() => setQuantity(prev => prev + 1)}>
                    +
                </button>
            </div>

            <p>
                Total price: 
                {discount > 0 && <del> ₹{totalPrice}</del>} 
                {" "}₹{(totalPrice - discount).toFixed(2)}
            </p>

            <p>You saved: ₹{discount.toFixed(2)}</p>

        </div>
    );
}

export default ProductCard;