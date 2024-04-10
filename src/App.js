import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';
import CheckOut from './components/checkout/CheckOut';
function App() {
  return (
    <CartProvider>
    <BrowserRouter> 
         <NavBar></NavBar>
         <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Puchi Arte y Deco"></ItemListContainer> }></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
          <Route path='*' element={<h2>404: No existe</h2>}></Route>
         </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
