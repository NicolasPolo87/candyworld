import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemList/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
