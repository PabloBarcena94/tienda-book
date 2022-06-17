import React, {useState} from 'react';
import ItemDetailContainer from '../../detalleProductos/ItemDetailContainer';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemCard.css'  

//import {Link} from "Link";
const ItemCard = ( props ) => {

  const {id, title, author, description, price, pictureUrl} = props.productos

  const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(true)
    }
  
return ( 

  <div className="cards">
  <div className="card w-96 bg-base-100 shadow-xl">
    
    <figure><img src={pictureUrl} alt="Shoes"/></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h5>{author}</h5>
      <p>{description}</p>
      <p>{price}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleButtonClick}> Ver detalle</button>
      </div>
    </div>
    
    </div>
    <div>
      {buttonClicked ? (<ItemDetailContainer id={id}></ItemDetailContainer>): null}
    </div>
    
    
  </div>
)
}

export default ItemCard 