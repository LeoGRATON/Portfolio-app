import React from 'react';
import FormContact from './FormContact';
import './style.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-message">
        <div className="scrolling-text">
          <span>
            LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++LET’S MAKE YOUR WEBSITE
          </span>
        </div>
        <div className="scrolling-text">
          <span>
            LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++LET’S MAKE YOUR WEBSITE +++ LET’S MAKE YOUR WEBSITE +++LET’S MAKE YOUR WEBSITE
          </span>
        </div>
      </div>
      <div className="contact-section">
        <div className="taille-grille">
          <div className="contact-section-title">
            <h2>
            Une aventure numérique <br />
              <span>à mes côtés ?</span>
            </h2>
            <p>
            Que ce soit pour discuter d'un projet, poser des questions ou simplement dire bonjour, je suis toujours ravi d'entendre parler de vous. N'hésitez pas à utiliser les informations de contact fournies ci-dessous pour me joindre. 
            </p>
          </div>
          <div className="form">
            <FormContact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;