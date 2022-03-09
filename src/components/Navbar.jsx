import "./Navbar.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const openMenu = (payload = "") => {
    dispatch({
      type: "OPENMENU",
      payload: payload
    });
  };

  

  return (
    <header className="navbar">
      <div className="title">
        <Link onClick={() => openMenu(false)} to="/">
          <h1>Viens Transpirer</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          {state.navlink.map((link) => {
            return (
              <div key={link.value} className="link">
                <NavLink exact='true' to={link.path}>
                  {link.value}
                </NavLink>
                <span></span>
              </div>
            );
          })}
          <div className="link">
            <NavLink exact='true' to="/">
              Déconnexion
            </NavLink>
            <span></span>
          </div>
        </ul>
      </nav>
      <div className="profil-connect">
        <Link className="desktop-profil" to="/profil">
          Clément
        </Link>
        <button onClick={() => openMenu()} className="mobile-profil">
          C
        </button>
      </div>
    </header>
  );
};

export default Navbar;
