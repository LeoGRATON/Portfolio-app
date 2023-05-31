import React from 'react';
import Cursor from '../../Components/UI/Cursor';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
    <Cursor/>
      <h1 className="not-found__title">Erreur 404</h1>
      <p className="not-found__description">
        Désolé, la page que vous recherchez est introuvable.
      </p>
      <a href="/" className="not-found__link">
        Retour à l'accueil
      </a>
    </div>
  );
};

export default NotFound;