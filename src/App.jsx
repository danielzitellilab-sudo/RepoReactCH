import { BrowserRouter, Routes, Route } from 'react-router'
import NavBarContainer from './components/NavBarContainer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() 
{
  return (
    <BrowserRouter>
    <NavBarContainer></NavBarContainer>
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
