import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add New Movie</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
