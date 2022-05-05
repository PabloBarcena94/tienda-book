
import './App.css'
import { NavBar } from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ListContainer/ItemListContainer.js' 
import {ItemCount} from './components/ItemCount/ItemCount.js'

import {Contacto} from './components/NavBar/Contacto'

   import {
      BrowserRouter,
      Route,
      Routes,
   } from "react-router-dom";

 




function App() {
  
  
  const onAdd = (count) => {
    console.log (`el numero agregado es ${count}`)
  }
  const name ='Productos'

  return (
    <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
          <Route exact path='/' element={<App />}/>
          <Route exact path='/Contacto' element={<Contacto />}/>
          
            <h1>PowerBook</h1>

              <ItemCount stock ={5} initial={1} onAdd = {onAdd}/>
            
              
                <div className = "grid__container"><ItemListContainer userName={name}/></div>
                
          
          </Routes> 
        </div>

    
      
     </BrowserRouter>   
  );
  
}
export default App;

//      <Routes>
//