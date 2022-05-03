import React from 'react';
//import {Link} from "Link";
const ItemCard = ( props ) => {

  const {title, author, description, price, pictureUrl} = props.productos
  
return (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={pictureUrl} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h5>{author}</h5>
      <p>{description}</p>
      <p>{price}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary"> Ver detalle del producto </button>
      </div>
    </div>
  </div>
)
}

export default ItemCard 