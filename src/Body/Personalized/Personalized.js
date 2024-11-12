import React, { useEffect, useState } from "react";
import '../Categories/Categories.css';

function Personalized(){
    const [foryou, setForyou] = useState([]);
    useEffect( () =>{
        fetch('https://dummyjson.com/products')
        .then(response=>response.json())
        .then(result => setForyou(result.products))
        .catch(error => console.error('Error fetching data:', error));

    }  
    ,[]);
    return(
        <div className="Categories_cointainer">
            <h2>Personalized For You</h2>
        <div className="products_cointainer">
          {foryou.map((product) => (
            <div key={product.id} className=" Categories_item" >
                <img src={product.images} className="Categories_images"/> 
                <div className= " Categories_text">{product.title} {product.price}/{product.weight} </div>
                
            </div>
          ))}
        </div>
      </div>
          );
        }

export default Personalized;