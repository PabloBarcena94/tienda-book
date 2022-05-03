import React, { useEffect, useState } from 'react';
import {getDataID} from './getItems'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer(){

  const [curso, setCurso] = useState([]);
    
    const id = useParams()

     useEffect(() => {
          const data = async () => {
              const sata = await getDataID(id); 
              setCurso(sata)
          }
          data([])
      },[]);
       
return(
  <div>
    {

  <ItemDetail imagen={curso.pictureUrl} titulo={curso.tittle} resumen={curso.resumen} precio={curso.price}></ItemDetail>
      
    }
  </div>
)
}

export default ItemDetailContainer;