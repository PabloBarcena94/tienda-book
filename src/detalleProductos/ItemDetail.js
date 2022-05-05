
import React from 'react';

//import {Link} from "Link";
const ItemDetail = ( props ) => {

  const {titulo, resumen, precio, imagen} = props.ver
  return (
    <div class="container">
        <div class="row">
            <div class="col">
                {titulo}
            </div>
            <div class="col">
                {resumen}
            </div>
            <div class="col">
                {precio} {imagen}
            </div>
        </div>
    </div>
  )
}
export default ItemDetail 