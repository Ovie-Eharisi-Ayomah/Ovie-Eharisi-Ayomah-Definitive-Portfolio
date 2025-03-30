import { Mail, Phone, MapPin, Github, Linkedin, BookOpen } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <h2 className="contact__header__title">
            Get In <span className="contact__header__title__highlight">Touch</span>
          </h2>
          <p className="contact__header__description">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you! Go ahead and reach out using the contact form or through any of the provided channels.
          </p>
          <div className="contact__header__underline"></div>
        </div>
        
        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__info__title">Contact Information</h3>
            
            <div className="contact__info__items">
              <div className="contact__info__item">
                <div className="contact__info__item__icon">
                  <Mail size={24} />
                </div>
                <div className="contact__info__item__content">
                  <h4 className="contact__info__item__content__title">Email</h4>
                  <a href="mailto:dvdhariss@gmail.com" className="contact__info__item__content__value">
                    dvdhariss@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact__info__item">
                <div className="contact__info__item__icon">
                  <Phone size={24} />
                </div>
                <div className="contact__info__item__content">
                  <h4 className="contact__info__item__content__title">Phone</h4>
                  <p className="contact__info__item__content__value">+234 806 995 2359</p>
                </div>
              </div>
              
              <div className="contact__info__item">
                <div className="contact__info__item__icon">
                  <MapPin size={24} />
                </div>
                <div className="contact__info__item__content">
                  <h4 className="contact__info__item__content__title">Location</h4>
                  <p className="contact__info__item__content__value">Abuja, Nigeria</p>
                </div>
              </div>
            </div>
            
            <div className="contact__info__social">
              <h4 className="contact__info__social__title">Connect with me</h4>
              <div className="contact__info__social__links">
                <a 
                  href="https://github.com/Ovie-Eharisi-Ayomah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__info__social__link"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="www.linkedin.com/in/ovie-eharisi-ayomah-241ab41b2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__info__social__link"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://medium.com/@ovieAyomah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__info__social__link"
                >
                  <BookOpen size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;