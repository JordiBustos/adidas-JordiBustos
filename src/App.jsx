import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import Landing from './components/Landing/landing';
import ItemDetailContainer from './container/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar cartValueNavBar={0} />
      <ItemDetailContainer />      
      <ItemListContainer greeting="Saludos y gracias por corregir :)" />
      <Landing />
    </div>
  );
}

export default App;

/*

*/