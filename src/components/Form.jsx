import React, { useState } from 'react';
import axios from 'axios';
import '../styles/form.css';

function Form() {
    const [features, setFeatures] = useState({
        rooms: 0,
        bathrooms: 0,
        stories: 0,
        mainroad: 0,
        guestroom: 0,
        basement: 0,
        hotWaterHeating: 0,
        airConditioning: 0,
        parking: 0,
        area: 0,
        furnishingStatus: 0,
        surface: 0, // Par défaut en m2
      });

      const [estimatedPrice, setEstimatedPrice] = useState(null);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFeatures((prevFeatures) => ({
          ...prevFeatures,
          [name]: parseInt(value),
        }));
      };
    //https://eac4-84-121-194-134.ngrok-free.app/predict
      const handleEstimation = async () => {
        try {
            const response = await axios.post(
                'https://api.example.com/predict',
                {
                    features: [
                        features.rooms,
                        features.bathrooms,
                        features.stories,
                        features.mainroad,
                        features.guestroom,
                        features.basement,
                        features.hotWaterHeating,
                        features.airConditioning,
                        features.parking,
                        features.area,
                        features.furnishingStatus,
                        features.surface
                    ]
                },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            );

            //console.log('Réponse de l\'API:', response.data);
            //console.log(response.data.predicted_price);
            setEstimatedPrice(Math.round(response.data.predicted_price * 1_000_000).toLocaleString('fr-FR'));
        } catch (error) {
            console.error("Erreur lors de l'appel de l'API :", error);
        }
    };

    return (
        <div className="estimation-container">
            <h1>Estimation du Prix de votre Maison</h1>

            <div className="dropdowns">
                <label>
                Nombre de chambres :
                <input
                    type="number"
                    name="rooms"
                    value={features.rooms}
                    onChange={handleChange}
                    min="0"
                    max="20"
                />
                </label>

                <label>
                Nombre de salles de bain :
                <input
                    type="number"
                    name="bathrooms"
                    value={features.bathrooms}
                    onChange={handleChange}
                    min="0"
                    max="20"
                />
                </label>

                <label>
                Étages :
                <input
                    type="number"
                    name="stories"
                    value={features.stories}
                    onChange={handleChange}
                    min="0"
                    max="10"
                />
                </label>

                <label>
                Raccordé à une route :
                <select name="mainroad" value={features.mainroad} onChange={handleChange}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </label>

                <label>
                Chambre d'amis :
                <select name="guestroom" value={features.guestroom} onChange={handleChange}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </label>

                <label>
                Sous-sol :
                <select name="basement" value={features.basement} onChange={handleChange}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </label>

                <label>
                Chauffage au gaz :
                <select name="hotWaterHeating" value={features.hotWaterHeating} onChange={handleChange}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </label>

                <label>
                Climatisation :
                <select name="airConditioning" value={features.airConditioning} onChange={handleChange}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </label>

                <label>
                Nombre de places de parking :
                <input
                    type="number"
                    name="parking"
                    value={features.parking}
                    onChange={handleChange}
                    min="0"
                    max="10"
                />
                </label>

                <label>
                Quartier résidentiel :
                <select name="area" value={features.area} onChange={handleChange}>
                    <option value={0}>Non</option>
                    <option value={1}>Oui</option>
                </select>
                </label>

                <label>
                Ameublement :
                <select name="furnishingStatus" value={features.furnishingStatus} onChange={handleChange}>
                    <option value={0}>Non meublé</option>
                    <option value={1}>Semi-meublé</option>
                    <option value={2}>Meublé</option>
                </select>
                </label>

                <label>
                Surface de la maison (m²) :
                <input
                    type="number"
                    name="surface"
                    value={features.surface}
                    onChange={handleChange}
                    min="0"
                    max="10000"
                />
                </label>
            </div>

            <button className="estimation-button" onClick={handleEstimation}>
                Estimation
            </button>

            {estimatedPrice !== null && (
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    Le prix estimé de votre maison est de : {estimatedPrice} €
                </p>
            )}
        </div>

    )
}

export default Form