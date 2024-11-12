import React, { useEffect, useState } from "react";
import '../Deals/Deals.css';

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
        <div className="DealsCategories_cointainer">
            <h2>Top Offers & Deals</h2>
        <div className="Dealsproducts_cointainer">
          {discount.map((product) => (
            <div key={product.id} className=" DealsCategories_item" >
                <img src={product.images} className="DealsCategories_images"/> 
                <div className="DealsCategories_price">{product.price}</div>
                <div className= " DealsCategories_text">{product.title} </div>
                
            </div>
          ))}
        </div>
      </div>
          );
        }

export default Deals;