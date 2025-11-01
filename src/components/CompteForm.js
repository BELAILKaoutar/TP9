import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "http://localhost:8082/api";

function CompteForm() {
  // Initialisation de l'état pour stocker les données du formulaire
  const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: '' });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    // eslint-disable-next-line no-undef
    axios.post(`${API_BASE_URL}/comptes`, compte) // Envoie une requête POST avec les données
      .then(response => alert('Compte ajouté')) // Confirmation de l'ajout
      .catch(error => console.error(error)); // Gestion des erreurs
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input type="number" name="solde" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Date de Création</label>
          <input type="date" name="dateCreation" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <select name="type" className="form-select" onChange={handleChange}>
            <option value="COURANT">Courant</option>
            <option value="EPARGNE">Épargne</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default CompteForm;