export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        padding: "16px", 
        borderTop: "1px solid #eee", 
        marginTop: "24px" 
        }}
      >
        <p style={{ margin: "5px 0" }}>
          &copy; {currentYear} Cocktails API
      </p>
    </footer>
  );
}