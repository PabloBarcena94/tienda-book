
import React from 'react';
//import {Link} from "Link";
const ItemDetail = ( props ) => {

  const {title, resumen, price, pictureUrl} = props.curso
  return (
    <div class="container">
        <div class="row">
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
            <div class="col">
                Column
            </div>
        </div>
    </div>
  )
}
export default ItemDetail 