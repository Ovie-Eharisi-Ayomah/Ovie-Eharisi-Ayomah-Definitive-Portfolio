import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title__highlight">Hello, I'm</span>
            <br />
            Ovie Eharisi-Ayomah
          </h1>
          <p className="hero__subtitle">
            Software Developer, Problem Solver, & Founder
          </p>
          <p className="hero__description">
            I like building stuff that provides value to people. Lets build something amazing together.
          </p>
          <div className="hero__buttons">
            <a
              href="#projects"
              className="hero__primary-button"
            >
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="hero__secondary-button"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <img
              src="../public/images/hero.jpg"
              alt="Professional Headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;