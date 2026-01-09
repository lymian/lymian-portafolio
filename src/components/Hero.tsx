import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero-content">
        <p className="hero-greeting">Hola, soy</p>
        <h1 className="hero-name">Miguel Mantari</h1>
        <h2 className="hero-title">Desarrollador Web</h2>
        <p className="hero-bio">
          Especializado en la creación de servicios REST y aplicaciones web escalables.
          <br />
          Enfocado en diseñar soluciones eficientes, mantenibles y orientadas a producto.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            Ver Proyectos
          </a>
          <a href="#contact" className="btn btn-outline">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
