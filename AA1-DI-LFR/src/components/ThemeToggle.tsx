type Props = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export default function ThemeToggle({ theme, onToggleTheme }: Props) {
  return (
    <button
      onClick={onToggleTheme}
      style={{
        backgroundColor: "var(--color-boton-des)",
        color: "var(--color-texto)",
        border: "1px solid var(--color-borde)",
        borderRadius: "10px",
        padding: "10px 16px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
      }}
    >
      {theme === "light" ? "🌚 Modo oscuro" : "🌞 Modo claro"}
    </button>
  );
}