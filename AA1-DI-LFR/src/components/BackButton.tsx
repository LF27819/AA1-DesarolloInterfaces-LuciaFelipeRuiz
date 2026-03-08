import { Link } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};

export default function BackButton({ to, text }: Props) {
  return (
    <Link
      to={to}
      style={{
        display: "inline-block",
        marginTop: "24px",
        textDecoration: "none",
        color: "var(--color-titulo-tarj)",
        fontWeight: "bold",
        fontSize: "1.4rem",
      }}
    >
      ← {text}
    </Link>
  );
}