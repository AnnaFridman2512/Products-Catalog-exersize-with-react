import './Product.css';

function Product({ //After we fetched the products, we destructure, to get the keys separetly and use them later on 
  category,        //Look at the example of one of the objects that we got below
  description,
  id,
  image,
  title,
  price,
}) {
  return ( //here we render all the keys we got to the DOM 
    <div className="product">
      <img src={image} className="product-image" alt="product-img"/>
      <span>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Buy ${price}</button>
    </div>
  );
}

export default Product;


//{"id":1,
//"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//"price":109.95,
//"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//"category":"men's clothing",
//"image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}

