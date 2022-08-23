import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './container/itemListContainer';
import Landing from './components/Landing/landing';

function App() {
  return (
    <div className="App">
      <Navbar cartValueNavBar={0} />
      <ItemListContainer greeting="Saludos y gracias por corregir :)" />
      <Landing />
    </div>
  );
}

export default App;
