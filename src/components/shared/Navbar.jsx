import { Link } from "react-router-dom"
import '../../Styles/Navbar.css';





const Navbar = () => {
  return (

    <div className='Contain_Navbar'>
      <ul className='Containt_Navbar_item'>
      <Link to = '/HomePage'> Home</Link>
      <Link to = '/Product'>Productos</Link>
      <Link to = '/Cart'>Cart</Link>
      <Link to = '/Purchases'>Purchases</Link>
      </ul>
    </div>

  )
}

export default Navbar