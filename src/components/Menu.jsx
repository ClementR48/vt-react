import "./Menu.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const state = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch({
      type: "OPENMENU",
    });
  };

  return (
    <nav className={state.openMenu ? "menu menu-open" : "menu"}>
      <ul>
        {state.navlink.map((link) => {
          return (
            <div key={link.value} className="link">
              <NavLink exact="true" onClick={() => openMenu()} to={link.path}>
                {link.value}
              </NavLink>
              <span></span>
            </div>
          );
        })}
        <div className="link">
          <NavLink exact="true" onClick={() => openMenu()} to="/profil">
            Profil
          </NavLink>
          <span></span>
        </div>

        <div className="link">
          <NavLink exact="true" onClick={() => openMenu()} to="/">
            Déconnexion
          </NavLink>
          <span></span>
        </div>
      </ul>
    </nav>
  );
};

export default Menu;
