import './Header.css';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];

export function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="#hero" className="header-logo">
          lymian<span>.</span>
        </a>
        
        <nav className="header-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="header-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
