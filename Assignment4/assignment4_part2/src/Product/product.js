import React from "react";

const Product =  ({ productId, productPic, productName, Brand, productDescription, Price, onAddToCart }) => {
    const handleClick = () => {
      onAddToCart({ productId, productName, Brand, Price });
    }

    return (
        <div className="product-card">
            <img src={productPic} alt="{productName}" />
            <h3>{productName}</h3>
            <p>{Brand}</p>
            <p>{productDescription}</p>
            <p>Price : Rs. {Price}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    );
};

export default Product;