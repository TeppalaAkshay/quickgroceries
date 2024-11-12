import React, { useEffect, useState } from "react";
import '../Categories/Categories.css';

function Deals(){
    const [discount, setDiscount] = useState([]);
    useEffect( () =>{
        fetch('https://dummyjson.com/products')
        .then(response=>response.json())
        .then(result => setDiscount(result.products))
        .catch(error => console.error('Error fetching data:', error));

    }  
    ,[]);
    return(
        <div className="Categories_cointainer">
        <div className="products_cointainer">
          {discount.map((product) => (
            <div key={product.id} className=" Categories_item" >
                <img src={product.images} className="Categories_images"/> 
                <div className= " Categories_text">{product.category} </div>
                
            </div>
          ))}
        </div>
      </div>
          );
        }

export default Deals;