import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
        <Route path="/item/:idItem" element={<ItemDetailConteiner/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
