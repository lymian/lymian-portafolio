import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          © {currentYear} Miguel Mantari. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
