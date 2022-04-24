
import './App.css'
import { NavBar } from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ListContainer/ItemListContainer.js' 
import {ItemCount} from './components/ItemCount/ItemCount'



function App() {
  
  const name ='Productos'
  

  return (
    <div className="App">
      <NavBar/>
      <h1>Hello</h1>

      <div>
          <ItemListContainer userName={name}/>
      </div>
          <ItemCount stock ={5} initial={1} const funcionAlert = {(count) => alert(`el numero agregado es ${count}`)}/>
    </div>
        
  );
  
}
export default App;