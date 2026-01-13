import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() 
{
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer text='productos'/>
    </>
  )
}

export default App
