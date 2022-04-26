// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
// import Button from './components/Button';
// import Box from './components/Box';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  // function handleCclickeando(numero){
  //   console.log("click!"+numero);
  // }
  return (
    <div className="App">
      <NavBar/>
      
      <ItemListContainer greeting='Welcome to the hood bro!' /> 

      
      {/* <Button texto='Boton' color='red'/>
      <Button texto='Boton1' color='blue'/>
      <Button texto='Boton2' color='orange'><p>Esto es un children del boton 2</p></Button>
      <Button  color='brown'><p>Esto es un children</p></Button> */}
      {/* <Box titulo='Titulo de caja'/>  */}

        {/* <button onClick={()=>handleCclickeando(4)}> Click me!</button> */}
      {/* </header> */}
    </div>
  );
}

export default App;
