import { useState } from 'react';

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

const skillsData: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', level: 5, category: 'Languages' },
  { name: 'TypeScript', level: 4, category: 'Languages' },
  { name: 'Python', level: 4, category: 'Languages' },
  { name: 'Java', level: 3, category: 'Languages' },
  
  // Frontend
  { name: 'React', level: 5, category: 'Frontend' },
  { name: 'HTML/CSS', level: 5, category: 'Frontend' },
  { name: 'Redux', level: 4, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', level: 5, category: 'Backend' },
  { name: 'Express', level: 4, category: 'Backend' },
  { name: 'Django', level: 3, category: 'Backend' },
  { name: 'Flask', level: 3, category: 'Backend' },
  { name: 'Spring Boot', level: 2, category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', level: 5, category: 'Database' },
  { name: 'Firebase', level: 4, category: 'Database' },
  { name: 'Supabase', level: 4, category: 'Database' },
  { name: 'MongoDB', level: 3, category: 'Database' },
  
  // DevOps & Tools
  { name: 'Git', level: 5, category: 'DevOps & Tools' },
  { name: 'Docker', level: 3, category: 'DevOps & Tools' },
  { name: 'AWS', level: 3, category: 'DevOps & Tools' },
  { name: 'CI/CD', level: 3, category: 'DevOps & Tools' },
  { name: 'Jest', level: 4, category: 'DevOps & Tools' },
  { name: 'Selenium', level: 4, category: 'DevOps & Tools' }
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const percentage = (skill.level / 5) * 100;
  const levelNames = ['Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
  
  return (
    <div className="skills__bar">
      <div className="skills__bar__header">
        <h4 className="skills__bar__header__name">{skill.name}</h4>
        <span className="skills__bar__header__level">
          {levelNames[skill.level-1]}
        </span>
      </div>
      <div className="skills__bar__track">
        <div 
          className={`skills__bar__fill skills__bar__fill--${skill.category.toLowerCase().replace(' & ', '-')}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  // Get unique categories
  const categories = Array.from(new Set(skillsData.map(skill => skill.category)));
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <h2 className="skills__header__title">
            My <span className="skills__header__title__highlight">Skills</span>
          </h2>
          <p className="skills__header__description">
            I've developed expertise in various technologies throughout my career. 
            Here's a comprehensive overview of my technical skills.
          </p>
          <div className="skills__header__underline"></div>
        </div>
        
        <div className="skills__categories">
          <div className="skills__categories__container">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`skills__categories__button ${
                  activeCategory === category ? 'skills__categories__button--active' : ''
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="skills__content">
          <div className="skills__grid">
            {filteredSkills.map(skill => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        
        <div className="skills__other">
          <h3 className="skills__other__title">Other Skills</h3>
          <div className="skills__other__grid">
            {['Problem Solving', 'Agile Methodology', 'UX/UI Design', 'Responsive Design', 
              'Performance Optimization', 'RESTful APIs', 'Test-Driven Development', 'Prompt Engineering', 'Automated Testing'].map(skill => (
              <div key={skill} className="skills__other__item">
                <span className="skills__other__item__text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;