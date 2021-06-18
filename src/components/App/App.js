
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);//At the begining we have an empty array of products

  useEffect(()=> {//Only after the component is rendered 
    fetch('https://fakestoreapi.com/products').then(response => response.json())//After fetching take the response (that came as a stirng) json() will convert the string in to an array.
    .then(productsArr => setProducts(productsArr));//Takes the products array that we got above and replaces the empty 'products' array with the one we got from fetch()
  }, []);

    return(
    <div> 

    </div>
  );
}

export default App;
