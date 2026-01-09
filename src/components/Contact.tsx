import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact-content">
          <p className="contact-intro">
            ¿Tienes un proyecto en mente o quieres colaborar?
            <br />
            No dudes en contactarme.
          </p>

          <div className="contact-links">
            <a
              href="mailto:snake.1503@outlook.com"
              className="contact-item"
            >
              <span className="contact-label">Email</span>
              <span className="contact-value">snake.1503@outlook.com</span>
            </a>

            <a
              href="https://github.com/lymian"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/lymian</span>
            </a>
          </div>

          <a
            href="mailto:snake.1503@outlook.com"
            className="btn btn-primary contact-cta"
          >
            Enviar Mensaje
          </a>
        </div>
      </div>
    </section>
  );
}
