import './Projects.css';
import kirbookImg from '../assets/kirbook.webp';
import skadiImg from '../assets/skadi.webp';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  repoUrl: string | string[];
  demoUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'Kirbook',
    description:
      'Aplicación web e-commerce para la venta de libros. Incluye catálogo de obras con filtrado por categorías, búsqueda avanzada, sistema de carrito de compras, gestión de pedidos y autenticación de usuarios. La interfaz presenta un diseño moderno y responsivo con una experiencia de usuario intuitiva.',
    technologies: ['Spring', 'Angular', 'MySQL'],
    repoUrl: 'https://github.com/lymian/kirbook-customers-app',
    demoUrl: 'https://kirbook.shop.lymian.xyz',
    image: kirbookImg,
  },
  {
    name: 'Skadi',
    description:
      'Aplicación web full-stack multi-tenant para gestión de inventarios con método Kardex valorizado (WAC/FIFO). Desarrollada con React + TypeScript en el frontend y Spring Boot + MySQL en el backend. Incluye control de lotes, múltiples almacenes, reportes en tiempo real y sistema de roles (RBAC). Desplegada en Vercel (frontend) y Railway (backend).',
    technologies: ['Spring', 'React', 'MySQL'],
    repoUrl: [
      'https://github.com/lymian/skadi-backend',
      'https://github.com/lymian/skadi-app',
    ],
    demoUrl: 'https://skadi-app.vercel.app',
    image: skadiImg,
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`Screenshot de ${project.name}`} />
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {Array.isArray(project.repoUrl) ? (
                    project.repoUrl.map((url, index) => (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-small"
                      >
                        GitHub {index === 0 ? '(Backend)' : '(Frontend)'}
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-small"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-small"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
