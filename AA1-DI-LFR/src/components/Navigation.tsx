import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "18px 0px",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        borderBottom: "1px solid var(--color-borde)",
        marginBottom:"24px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          backgroundColor: isActive
            ? "var(--color-boton-act)"
            : "var(--color-boton-des)",
          color: "var(--color-texto)",
          padding: "14px 15px",
          borderRadius: "10px",
          border: "2px solid var(--color-borde)",
          fontSize: "1rem",
          fontWeight: "bold",
        })}
      >
        Cóctel del día 🎲
      </NavLink>

      <NavLink
        to="/cocktails"
        style={({ isActive }) => ({
          backgroundColor: isActive
            ? "var(--color-boton-act)"
            : "var(--color-boton-des)",
          color: "var(--color-texto)",
          padding: "14px 15px",
          borderRadius: "10px",
          border: "2px solid var(--color-borde)",
          fontSize: "1rem",
          fontWeight: "bold",
        })}
      >
        Buscar cócteles 🔎
      </NavLink>
    </nav>
  );
}