
import './App.css'
import { NavBar } from './components/NavBar/NavBar.js'
import {ItemListContainer} from './components/ListContainer/ItemListContainer.js' 




function App() {
  
  const name ='Productos'
  

  return (
    <div className="App">
      <NavBar/>
      <h1>Hello</h1>

      <div>
          <ItemListContainer userName={name}/>
      </div>
    </div>
        
  );
  
}
export default App;