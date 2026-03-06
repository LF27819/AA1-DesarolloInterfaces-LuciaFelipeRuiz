export default function Header() {
  return (
    <header 
      style={{ 
        backgroundColor: "var(--color-fondo-secundario)",
        padding: "16px",
        borderBottom: "1px solid var(--color-borde)",
        textAlign: "center",
        color: "var(--color-texto)",
        width: "100%",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "40px"  }}>
        Buscador de Cocktails 🍸
      </h1>

      <p style={{ margin: "6px 0 0", fontSize: "20px", opacity: 0.7 }}>
       API sobre cocktails
      </p>
    </header>
  );
}