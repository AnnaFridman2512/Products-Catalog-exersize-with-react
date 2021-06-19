import './App.css';
import Product from './../Product';
import { useEffect, useState } from 'react';



function App() {
  const [categories, setCategories] = useState([]);//At the begining we have an empty array of categories
                                                   //After fetching, the product object are going to come with a 'category' key.
  const [products, setProducts] = useState([]);//At the begining we have an empty array of products
  

  useEffect(()=> {//What is written inside this function is going to be executed when the component is rendered
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())//After fetching take the response (that came as a stirng) json() will convert the string in-to an array of objects.
    .then(productsArr => setProducts(productsArr));//Takes the products array of objects, that we got above and replaces the empty 'products' array with the one we got from fetch()
  }, []);//If we don't put the epty array- the function is going to be executed every time we re-render the aplication
         //If we put the empty array- the function is going to be executed once - at the component mounts(when we add stuff to the DOM for the first time)
         //Every thing we pass in the array - are values, that whenever they change - the hook is going to run.
  
  useEffect(()=> {//Now we are fetching the categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())//Here we got the categories array 
      .then(categoriesArr => setCategories(categoriesArr));//Takes the categories array that we got above and replaces the empty 'categories' array with the one we got from fetch()
    }, []);


    return(
    <div className="App"> 
      <div>{categories.map(category => <span> <a href="#">{category}</a> </span>)} {/*After fetching the 'categories' array we */}
      <div className="products">
      {products.length === 0 //While 'products' array is empty (before the fetch funstion filled it)
      ? "Loading..."// "Loading" is going to be printed.
      :  products.map(product => <Product {...product} />)}
      </div>
    </div>
    </div>
    );
}

export default App;
