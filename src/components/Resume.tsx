import { Download, Calendar, MapPin } from 'lucide-react';

const TimelineItem = ({ 
  year, 
  title, 
  location, 
  description 
}: { 
  year: string; 
  title: string; 
  location: string; 
  description: string;
}) => {
  return (
    <div className="resume__timeline__item">
      <div className="resume__timeline__item__dot"></div>
      <div className="resume__timeline__item__meta">
        <Calendar size={14} className="mr-1" />
        <span>{year}</span>
        <span className="resume__timeline__item__meta__separator">•</span>
        <MapPin size={14} className="mr-1" />
        <span>{location}</span>
      </div>
      <h3 className="resume__timeline__item__title">{title}</h3>
      <p className="resume__timeline__item__description">{description}</p>
    </div>
  );
};

const Resume = () => {
  const experienceData = [
    {
      year: '2024 - Present',
      title: 'Freelance Software Developer',
      location: 'Abuja, Nigeria',
      description: 'Specialized in developing custom web solutions and applications for diverse clients. Implemented modern tech stacks including React, TypeScript, and Node.js. Delivered scalable solutions with focus on clean code architecture and performance optimization. Managed end-to-end project lifecycles from requirements gathering to deployment.'
    },
    {
      year: '2023 - 2024',
      title: 'Software Engineer at DWP Digital',
      location: 'Manchester, UK',
      description: 'Led test automation initiatives using Java, Selenium, and Cucumber BDD. Implemented comprehensive testing frameworks including API, security, and accessibility testing. Established CI/CD pipelines in GitLab with Docker containerization. Collaborated in Agile teams while maintaining detailed documentation in Confluence and JIRA.'
    }
  ];

  const educationData = [
    {
      year: '2019 - 2022',
      title: 'Bachelor of Science in Biological Science',
      location: 'University of Leicester',
      description: 'Leveraged R programming for complex biological data analysis and modeling. Conducted research on large-scale datasets including UK Biobank data. Self-taught multiple programming languages (Python, Swift, HTML, CSS) and applied them to academic projects. Specialized in computational approaches to biological research.'
    },
    {
      year: '2023',
      title: 'Makers Academy Software Engineer Bootcamp',
      location: 'London, UK',
      description: 'Completed intensive 16-week program focused on modern software engineering practices. Developed full-stack CRUD applications using test-driven development with Pytest and Selenium. Collaborated in Agile teams while implementing Git workflows and continuous integration. Gained comprehensive experience across the entire software development lifecycle.'
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume__header">
          <h2 className="resume__header__title">
            My <span className="resume__header__title__highlight">Resume</span>
          </h2>
          <p className="resume__header__description">
            A timeline of my professional journey and education in the field of software development.
          </p>
          <div className="resume__header__underline"></div>
          
          <a 
            href="../public/Ovie Eharisi-Ayomah CV A.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="resume__header__download"
            download
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
        </div>

        <div className="resume__content">
          <div className="resume__box">
            <h3 className="resume__box__title">
              Experience
            </h3>
            <div className="resume__timeline">
              {experienceData.map((item, index) => (
                <TimelineItem 
                  key={index}
                  year={item.year}
                  title={item.title}
                  location={item.location}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="resume__box">
              <h3 className="resume__box__title">
                Education
              </h3>
              <div className="resume__timeline">
                {educationData.map((item, index) => (
                  <TimelineItem 
                    key={index}
                    year={item.year}
                    title={item.title}
                    location={item.location}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            
            <div className="resume__box">
              <h3 className="resume__box__title">
                Certifications
              </h3>
              <ul className="resume__certifications__list">
                <li className="resume__certifications__item">
                  <div className="resume__certifications__item__marker"></div>
                  <div className="resume__certifications__item__content">
                    <h4 className="resume__certifications__item__content__title">Accenture Nordics Deveoper Program</h4>
                    <p className="resume__certifications__item__content__meta">Accenture Nordics, 2022</p>
                  </div>
                </li>
                <li className="resume__certifications__item">
                  <div className="resume__certifications__item__marker"></div>
                  <div className="resume__certifications__item__content">
                    <h4 className="resume__certifications__item__content__title">Lyft Backend Engineering Program</h4>
                    <p className="resume__certifications__item__content__meta">Lyft, 2022</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;