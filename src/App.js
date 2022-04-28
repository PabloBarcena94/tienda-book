
import './App.css'
import { NavBar } from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ListContainer/ItemListContainer.js' 
import {ItemCount} from './components/ItemCount/ItemCount.js'



function App() {
  
  
  const onAdd = (count) => {
    console.log (`el numero agregado es ${count}`)
  }
  const name ='Productos'

  return (
    <div className="App">
      <NavBar/>
      <h1>Hello</h1>

      <div>
          <ItemListContainer userName={name}/>
      </div>
          <ItemCount stock ={5} initial={1} onAdd = {onAdd}/>
    </div>

      
        
  );
  
}
export default App;

