// src/components/CompteForm.js
import React, { useState } from 'react';
import axios from 'axios';
import  API_BASE_URL  from '../config'; // Assure-toi que config.js exporte bien API_BASE_URL

function CompteForm({ onAdd }) {
  // État pour stocker les valeurs du formulaire
  const [compte, setCompte] = useState({
    solde: '',
    dateCreation: '',
    type: 'COURANT' // valeur par défaut
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e) => {
    setCompte({ ...compte, [e.target.name]: e.target.value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // POST vers l'API
    axios.post(`${API_BASE_URL}/comptes`, compte)
      .then(response => {
        alert('Compte ajouté avec succès !');
        setCompte({ solde: '', dateCreation: '', type: 'COURANT' }); // Réinitialise le formulaire
        if (onAdd) onAdd(); // Déclenche le rafraîchissement de CompteList
      })
      .catch(error => {
        console.error("Erreur lors de l'ajout du compte :", error);
        alert('Erreur lors de l\'ajout du compte');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Ajouter un Compte</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Solde</label>
          <input
            type="number"
            name="solde"
            className="form-control"
            value={compte.solde}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Date de Création</label>
          <input
            type="date"
            name="dateCreation"
            className="form-control"
            value={compte.dateCreation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Type</label>
          <select
            name="type"
            className="form-select"
            value={compte.type}
            onChange={handleChange}
          >
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
