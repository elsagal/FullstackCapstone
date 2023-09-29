import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        B.B
      </Link>
      <ul>
        <>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/store">STORE</Link>
          </li>
          <li>
            <Link to="/logIn-signUp">LOG IN/SIGN UP</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
        </>
      </ul>
    </nav>
  );
}
