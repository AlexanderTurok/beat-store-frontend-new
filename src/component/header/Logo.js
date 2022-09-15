
// react
import { Link } from 'react-router-dom';
// style
import "../../style/css/header/logo.css";

function Logo() {
  return (
    <Link className='logo' to='/'>
      Beat Store
    </Link>
  )
}

export default Logo