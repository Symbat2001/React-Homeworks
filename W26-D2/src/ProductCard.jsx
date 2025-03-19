import React from 'react';
import './ProductCard.css'

function ProductCard(props){
    return (
        
            <div className="product-card">
                <img src={props.image} alt="product" width="100" />
                <h2>{props.name}</h2>
                <p>Price: {props.price}₸</p>
            </div>
            
    );
}

export default ProductCard;