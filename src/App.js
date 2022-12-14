import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import MapComponent from './components/MapComponent';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter basename='/tiendadedulces'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos'} />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
