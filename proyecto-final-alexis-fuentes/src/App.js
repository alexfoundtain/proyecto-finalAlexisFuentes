// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
// import Button from './components/Button';
// import Box from './components/Box';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  // function handleCclickeando(numero){
  //   console.log("click!"+numero);
  // }
    function dummy(numero){
    console.log("Hello bro!");
  }
  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer greeting='Welcome to the hood bro!' counter={<ItemCount initial={0} stock={5} onAdd={dummy}></ItemCount>} /> 

      
      {/* <Button texto='Boton' color='red'/>
      <Button texto='Boton1' color='blue'/>
      <Button texto='Boton2' color='orange'><p>Esto es un children del boton 2</p></Button>
      <Button  color='brown'><p>Esto es un children</p></Button> */}
      {/* <Box titulo='Titulo de caja'/>  */}

      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
        {/* <button onClick={()=>handleCclickeando(4)}> Click me!</button> */}
      {/* </header> */}
    </div>
  );
}

export default App;
