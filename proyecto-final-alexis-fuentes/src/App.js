import logo from './logo.svg';
import './App.css';

import NavBar, {CarWidget} from './components/NavBar/NavBar';
import Button from './components/Button';
import Box from './components/Box';
import ItemListContainer from './components/ItemListContainer';

function App() {
  function handleCclickeando(numero){
    console.log("click!"+numero);
  }
  return (
    <div className="App">
      <NavBar><CarWidget/></NavBar>
      <ItemListContainer greeting='Welcome to the hood bro!'> </ItemListContainer>
      
      {/* <Button texto='Boton' color='red'/>
      <Button texto='Boton1' color='blue'/>
      <Button texto='Boton2' color='orange'><p>Esto es un children del boton 2</p></Button>
      <Button  color='brown'><p>Esto es un children</p></Button> */}
      {/* <Box titulo='Titulo de caja'/>  */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={()=>handleCclickeando(4)}> Click me!</button> */}
      </header>
    </div>
  );
}

export default App;
