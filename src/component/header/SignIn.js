
// react
import { Link } from 'react-router-dom';
// style
import "../../style/css/header/signin.css";

function SignIn() {
  return (
    <Link className='sign-in' to="/sign-in">
      SIGN IN
    </Link>
  )
}

export default SignIn