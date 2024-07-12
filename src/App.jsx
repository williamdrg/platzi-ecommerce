
import { Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
=======
import Navbar from './components/shared/Navbar'
>>>>>>> 46dc4a875f616b895fdd5ab6a65fa80f713d2bdc
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'
<<<<<<< HEAD
=======
import Product from './pages/Product'
import Cart from './pages/Cart'
>>>>>>> 46dc4a875f616b895fdd5ab6a65fa80f713d2bdc

function App() {

  return (
    <div>
<<<<<<< HEAD
=======
      <Navbar/>
>>>>>>> 46dc4a875f616b895fdd5ab6a65fa80f713d2bdc
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
<<<<<<< HEAD
=======
        <Route path='/Productos' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
>>>>>>> 46dc4a875f616b895fdd5ab6a65fa80f713d2bdc
        <Route path='/product/:id' element={<ProductId/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Routes>
    </div>

  )
}

export default App
