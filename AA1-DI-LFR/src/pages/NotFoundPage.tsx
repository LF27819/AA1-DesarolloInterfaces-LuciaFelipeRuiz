import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>404</h2>
      <p style={{ marginBottom: '1rem' }}>Lo sentimos — la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}