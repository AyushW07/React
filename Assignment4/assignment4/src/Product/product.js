 import React from "react";

 function Product (props) {
    const productDetails = props.productDetails;
    
    function Cart() {
        const productId = productDetails.productId;
        const productName = productDetails.productName;
        const productBrand = productDetails.Brand;
        const productPrice = productDetails.Price;
        alert (`Product ${productId}, which is ${productName} of brand ${productBrand} of price ${productPrice} is added in the cart, please proceed to pay!!!`);
    }

    return (
        <div className="card">
            <img className="image" src={productDetails.productPic} alt="Image" />
            <h3 className="name">{productDetails.productName}</h3>
            <h2 className="brand">{productDetails.Brand}</h2>
            <p className="description">{productDetails.productDescription}</p>
            <p className="price">{`Price : ${productDetails.Price}`}</p>
            <p className="rating">{`Rating : ${productDetails.Rating}`}</p>
            <button className="button" onClick={Cart}>
                Add to Cart
            </button>
        </div>
    )

 }

 export default Product;