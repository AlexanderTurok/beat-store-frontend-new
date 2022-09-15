
// react
import { Link } from 'react-router-dom';
// style
import "../../style/css/header/menu.css";

function Menu() {
  return (
    <ul className='menu'>
      <Link className='menu-button' to='/about'>
        <li>ABOUT</li>
      </Link>
      <Link className='menu-button' to='/beats'>
        <li>BEATS</li>
      </Link>  
      <Link className='menu-button' to='/contact'>
        <li>CONTACT</li>
      </Link>
    </ul>
  )
}

export default Menu