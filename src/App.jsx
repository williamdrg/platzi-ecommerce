
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Routes>
    </div>

  )
}

export default App
