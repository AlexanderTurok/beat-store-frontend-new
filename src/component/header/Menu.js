
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className='menu'>
      <Link to='/about'>
        <li className='menu-button'>ABOUT</li>
      </Link>
      <Link to='/beats'>
        <li className='menu-button'>BEATS</li>
      </Link>  
      <Link to='/contact'>
        <li className='menu-button'>CONTACT</li>
      </Link>
    </ul>
  )
}

export default Menu