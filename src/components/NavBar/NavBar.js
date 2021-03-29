import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
              <Link to="/category/hombre" className="nav-link">
              Hombre
              </Link>
              <Link to="/category/mujer" className="nav-link">
                Mujer
              </Link>
              <a id="icon" >
              <CartWidget/>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
