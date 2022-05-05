import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer  /> }/>
        <Route path='/category/:categoryId' element={ <ItemListContainer  /> }/>
        <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
      </Routes>
    </div>
  );
}
export default App;
