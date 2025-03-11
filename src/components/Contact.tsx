import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'service_0jk6eld';
    const templateId = 'template_3xu9qqu';
    const publicKey = 'f4upuL4xOUwnwEJNA';
    
    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        setIsSubmitting(false);
        setError('Failed to send message. Please try again or contact me directly via email.');
      });
  };

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
              </div>
            </div>
          </div>
          
          <div className="contact__form">
            <h3 className="contact__form__title">Send Message</h3>
            
            {submitted ? (
              <div className="contact__form__success">
                <p>Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="contact__form__grid">
                  <div className="contact__form__group">
                    <label htmlFor="name" className="contact__form__group__label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact__form__group__input"
                    />
                  </div>
                  
                  <div className="contact__form__group">
                    <label htmlFor="email" className="contact__form__group__label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact__form__group__input"
                    />
                  </div>
                  
                  <div className="contact__form__group">
                    <label htmlFor="subject" className="contact__form__group__label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact__form__group__input"
                    />
                  </div>
                  
                  <div className="contact__form__group">
                    <label htmlFor="message" className="contact__form__group__label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact__form__group__textarea"
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="contact__form__error">
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact__form__button"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="contact__form__spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;