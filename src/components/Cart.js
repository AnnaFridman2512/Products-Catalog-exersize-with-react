
import { useState } from "react";


export default function Cart({products}){//Cart is going to be an array of objects (array of items)
                                       //"products" is a prop from App.js
    const [items, setItems] = useState([]);

    return (
        <div>
            {items.map(({productId, quantity}) => products.find())}
        </div>
    );
}