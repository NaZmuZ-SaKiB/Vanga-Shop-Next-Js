import Link from "next/link";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
const Navbar = () => {
  const { totalQuantities, showCart, setShowCart } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Vanga Shop</Link>
      </p>
      <button onClick={() => setShowCart(true)} className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
