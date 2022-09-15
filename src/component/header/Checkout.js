
import { Link } from "react-router-dom";
import { GiShoppingCart as Cart } from "react-icons/gi";

function Checkout() {
  return (
    <Link className="checkout" to="/checkout">
      <Cart className="cart-icon"/>
      0.00$
    </Link>
  )
}

export default Checkout