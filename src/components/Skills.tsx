import './Skills.css';
import { 
  SiOpenjdk, 
  SiSharp, 
  SiJavascript, 
  SiTypescript,
  SiSpring,
  SiDotnet,
  SiReact,
  SiAngular,
  SiDocker,
  SiGit,
  SiMysql,
  SiMongodb
} from 'react-icons/si';
import { VscDatabase, VscAzure } from 'react-icons/vsc';
import type { IconType } from 'react-icons';

const icons: Record<string, IconType> = {
  Java: SiOpenjdk,
  'C#': SiSharp,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Spring: SiSpring,
  '.NET': SiDotnet,
  React: SiReact,
  Angular: SiAngular,
  Docker: SiDocker,
  Git: SiGit,
  Azure: VscAzure,
  MySQL: SiMysql,
  'SQL Server': VscDatabase,
  MongoDB: SiMongodb,
};

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Lenguajes',
    skills: ['Java', 'C#', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Spring', '.NET', 'React', 'Angular'],
  },
  {
    title: 'Herramientas',
    skills: ['Docker', 'Git', 'Azure'],
  },
  {
    title: 'Bases de Datos',
    skills: ['MySQL', 'SQL Server', 'MongoDB'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => {
                  const Icon = icons[skill];
                  return (
                    <span key={skill} className="skill-item">
                      {Icon && <Icon className="skill-icon" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
