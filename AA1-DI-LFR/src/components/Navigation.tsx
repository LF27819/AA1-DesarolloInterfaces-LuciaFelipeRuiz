import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav 
      style={{ 
        display: "flex", 
        justifyContent: "center",
        gap: "50px", 
        padding: "16px",
        backgroundColor: "#2c4469" 
      }}
    >
      <NavLink 
        to="/">
        Inicio
      </NavLink>

      <NavLink
        to="/cocktails">
        Cocktails
      </NavLink>
    </nav>
  );
}