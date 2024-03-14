import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
function App() {
  return (
    <BrowserRouter> 
         <NavBar></NavBar>
         <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Puchi Arte y Deco"></ItemListContainer> }></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='*' element={<h2>404: No existe</h2>}></Route>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
