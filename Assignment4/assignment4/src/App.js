import './App.css';
import Product from './Product/product';
import './Product/product.css'

function App() {

  const productDetailsList = [
{
    productId : "1",
    productPic : "https://images.pexels.com/photos/2404959/pexels-photo-2404959.png?auto=compress&cs=tinysrgb&w=400" ,
    productName : "Shoes" ,
    Brand : "Nike",
    productDescription : "Comfortable Shoes", 
    Price : "RS 4500",
    Rating : "4.5",
 },
 {
    productId : "2",
    productPic : "https://th.bing.com/th/id/OIP.HQj3qgH9UB_EXSI0x-JYSwHaKk?w=186&h=265&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,
    productName : "Watch" ,
    Brand : "Fastrack",
    productDescription : "Stylish and Simple", 
    Price : "RS 3500",
    Rating : "4",
 },
 {
    productId : "3",
    productPic : "https://th.bing.com/th/id/OIP.vjqQH1n0Z1c_bX6Svg_13wHaJm?w=186&h=241&c=7&r=0&o=5&dpr=1.3&pid=1.7" ,
    productName : "T-Shirt" ,
    Brand : "Wrogn",
    productDescription : "Comfortable and Stylish", 
    Price : "RS 2500",
    Rating : "3.5",
 },
 {
    productId : "4",
    productPic : "https://th.bing.com/th/id/OIP.TMKZcuwv2pJT68VI1OFMNwAAAA?w=186&h=279&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    productName : "Shirt" ,
    Brand : "Peter England",
    productDescription : "Comfortable Clothes", 
    Price : "RS 3500",
    Rating : "4.5",
 },
 {
    productId : "5",
    productPic : "https://th.bing.com/th/id/OIP.l5j2kYVbVZ2ZOpOfmCto0QAAAA?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    productName : "Mobile" ,
    Brand : "Apple",
    productDescription : "iOS 15", 
    Price : "RS 68000",
    Rating : "5",
 },
];
 
  return (
    <div className="App">
      {productDetailsList.map((productDetails) => (
        <Product key = {productDetails.productId} productDetails = {productDetails}/>
      ))}
    </div>
  );
}

export default App;
