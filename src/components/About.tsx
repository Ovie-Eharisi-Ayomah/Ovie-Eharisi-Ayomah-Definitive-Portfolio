import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header">
          <h2 className="about__header__title">
            About <span className="about__header__title__highlight">Me</span>
          </h2>
          <div className="about__header__underline"></div>
        </div>

        <div className="about__content">
          <div>
            <p className="about__text">
              Hello! I'm <strong>Ovie</strong>, a software developer with a strong focus on creating valuable, 
              user-friendly applications. My journey in tech began when I attempted to build an app to make finding locticians easier for my friends and I, 
              and it has now evolved into a professional career building solutions that make a difference.
            </p>
            <p className="about__text">
              I have a strong commitment to deep work, continuous learning, and growth. That means I'm always looking for new challenges and opportunities to improve my skills. 
              When there's a cool problem to solve, I'm willing to learn what I need to solve it and have fun doing it.
            </p>
          </div>

          <div className="about__cards">
            <div className="about__card">
              <div className="about__card__header">
                <GraduationCap className="about__card__header__icon" size={24} />
                <h3 className="about__card__header__title">Education</h3>
              </div>
              <ul className="about__card__list">
                <li>BSc Biological Science, University of Leicester (2019-2022)</li>
                <li>Software Development Bootcamp, Makers Academy (2023)</li>
                <li>Complete Web Developer, Zero to Mastery (2024)</li>
              </ul>
            </div>
            
            <div className="about__card">
              <div className="about__card__header">
                <Briefcase className="about__card__header__icon" size={24} />
                <h3 className="about__card__header__title">Experience</h3>
              </div>
              <ul className="about__card__list">
                <li>Software Engineer, DWP (2023-2024)</li>
                <li>Freelance Developer (2024-Present)</li>
              </ul>
            </div>
            
            <div className="about__card">
              <div className="about__card__header">
                <Heart className="about__card__header__icon" size={24} />
                <h3 className="about__card__header__title">Interests</h3>
              </div>
              <ul className="about__card__list">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Business Development</li>
                <li>Startups</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;