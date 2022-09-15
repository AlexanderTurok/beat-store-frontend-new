
import Checkout from "./Checkout";
import Logo from "./Logo";
import Menu from "./Menu";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Checkout />
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Header