
// components
import Checkout from "./Checkout";
import Logo from "./Logo";
import Menu from "./Menu";
import SignIn from "./SignIn";
// style
import "../../style/css/header/header.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
      <Checkout />
      <SignIn />
    </div>
  )
}

export default Header