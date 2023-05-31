import React, { useState } from 'react';
import Button from '../UI/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

const FormContact = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [sujet, setSujet] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3002/contact', {
        nom,
        prenom,
        email,
        nom_entreprise: nomEntreprise,
        subject: sujet,
        message,
      });

      console.log(response.data); // Afficher la réponse du serveur si nécessaire
      // Réinitialiser les champs après l'envoi
      setNom('');
      setPrenom('');
      setEmail('');
      setNomEntreprise('');
      setSujet('');
      setMessage('');

      toast.success('Email à bien été envoyé');
    } catch (error) {
      console.error(error);
      toast.error('Une erreur s\'est produite lors de l\'envoi de Email');
    }
  };

  return (
    <div className="form section-padding" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Nom:*</label>
          <input
            type="text"
            placeholder="Indiquez votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Prénom:*</label>
          <input
            type="text"
            placeholder="Indiquez votre prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Votre adresse Email:*</label>
          <input
            type="email"
            placeholder="Indiquez votre adresse email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label>Nom de votre entreprise:</label>
          <input
            type="text"
            placeholder="Indiquez le nom de votre entreprise"
            value={nomEntreprise}
            onChange={(e) => setNomEntreprise(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label>Sujets / Demande :*</label>
          <select
            name="select-subject"
            id="select-subject"
            value={sujet}
            onChange={(e) => setSujet(e.target.value)}
            required
          >
            <option value="default">-- Sélectionner un sujet --</option>
            <option value="Création de site web">Création de site web</option>
            <option value="Création graphique">Création graphique</option>
            <option value="Application React">Application React</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <div className="form-input">
          <label>Votre message:*</label>
          <textarea
            placeholder="N'hésitez pas à m'en dire plus sur votre projet"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="checkbox">
          <input type="checkbox" required/>
          <label>
            Vos données seront traitées de manière confidentielle et sécurisée
            selon les normes de protection des données en vigueur.
          </label>
        </div>
        <Button className="btn-contact" type="submit" children='Valider'/>
            </form>
        </div>
    )
};

export default FormContact;