import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListConteiner/ItemListContainer';

function App() {

  return (
    <div> 
         <NavBar></NavBar>
         <ItemListContainer greeting="Bienvenidos a Puchi Arte y Deco"></ItemListContainer> 
    </div>
  );
}

export default App;
