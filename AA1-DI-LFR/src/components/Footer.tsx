export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: "var(--color-fondo-secundario)",
        padding: "16px", 
        borderTop: "1px solid var(--color-borde)", 
        marginTop: "24px",
        textAlign: "center",
        fontSize: "15px",
        color: "var(--color-texto)",
        width: "100%",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          &copy; {currentYear} Cocktails API
      </p>
    </footer>
  );
}