import Product from "./Product";
import { useState, useEffect } from "react";

export default function Catalog({products}){//Destructuring - getting the products array from the object 
    return (
        <div className="products">
        {products.length > 0 //if 'products' array is not empty (before the fetch funstion filled it)
        ? products.map(product => <Product key={product.id} {...product} />)  //...product - pass all elements of iterableObj as arguments to function
                                                                             //key -> some value that is uniqe fo each product, in this case its the id
        :"Loading..."} {/*Before the fetch funstion filled the 'products' array-"Loading" is going to be printed.*/}
        </div>                                                                 
    );
}