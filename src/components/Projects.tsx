import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
  role: string;
  challenges: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Crystal Clear',
    description: `Crystal Clear is a full-stack web application that connects homeowners with professional window cleaners. 
    The platform streamlines the process of booking window cleaning services, managing quotes, and handling job completion, 
    creating an efficient marketplace for both service providers and customers.`,
    image: '../public/images/crystalClear.png',
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'CSS Modules'],
    demoUrl: 'https://crystalclearr.netlify.app/',
    githubUrl: 'https://github.com/Ovie-Eharisi-Ayomah/Crystal-Clear3.0.git',
    category: 'Full Stack',
    role: 'Lead Developer',
    challenges: 'Implementing complex user role management, intuitive multi-step workflows, and secure payment information handling while maintaining a clean, professional user experience.'
  },
  {
    id: 2,
    title: 'FaceTrace',
    description: `FaceTrace is a fullstack react app that allows a user to register/sign in and upload an image jpg url. The app then outlines a box around every face in the image. 
    The app leverages Clarifai's face recognition AI API to identify faces in uploaded images. You can also keep track of the number of entries you make.`,
    image: '../public/images/FaceTrace.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://facetrace.onrender.com/',
    githubUrl: 'https://github.com/Ovie-Eharisi-Ayomah/FaceTrace.git',
    category: 'Full Stack',
    role: 'Frontend Developer',
    challenges: 'The math required to accurately place the box on the detected face'
  },
  {
    id: 3,
    title: 'RoamMates',
    description: 'RoamMates is a full stack web app that allows a user to register/sign in and helps the user connect with prospective travel buddies who share similar interests and preferences.',
    image: '../public/images/roamMates.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'PostgreSQL'],
    demoUrl: 'https://www.youtube.com/watch?v=9sq5-AofdZEx',
    githubUrl: 'git@github.com:Ovie-Eharisi-Ayomah/RoamMates.git',
    category: 'Full Stack',
    role: 'Software developer and QA Engineer',
    challenges: 'Designing an efficient database schema and implementing robust security measures.'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <h2 className="projects__header__title">
            My <span className="projects__header__title__highlight">Projects</span>
          </h2>
          <p className="projects__header__description">
            Here's a selection of my recent projects. Each one presented unique challenges and opportunities to learn and grow as a developer.
          </p>
          <div className="projects__header__underline"></div>
          
          <div className="projects__filters">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`projects__filters__button ${
                  filter === category ? 'projects__filters__button--active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="projects__card">
              <div className="projects__card__image">
                <img 
                  src={project.image} 
                  alt={project.title}
                />
              </div>
              <div className="projects__card__content">
                <div className="projects__card__header">
                  <h3 className="projects__card__header__title">{project.title}</h3>
                  <span className="projects__card__header__category">
                    {project.category}
                  </span>
                </div>
                <p className="projects__card__description">
                  {project.description}
                </p>
                
                <div className="projects__card__technologies">
                  <h4 className="projects__card__technologies__title">
                    <Code size={14} className="mr-1" /> Technologies Used:
                  </h4>
                  <div className="projects__card__technologies__tags">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="projects__card__technologies__tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="projects__card__links">
                  <div className="projects__card__links__buttons">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="projects__card__links__link"
                    >
                      <ExternalLink size={14} className="mr-1" /> Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="projects__card__links__link"
                    >
                      <Github size={14} className="mr-1" /> Code
                    </a>
                  </div>
                  
                  {/* <button 
                    className="projects__card__links__details"
                    onClick={() => window.open(`#project-${project.id}`, '_self')}
                  >
                    Details
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;