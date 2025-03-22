import React, { useState } from "react";
import FormMeal from "./FormMeal";
import "./css/MealGenius.css";
import TableResults from "./TableResults";
import Disclaimer from "./Disclaimer";

function MealGenius() {
  const [userData, setUserData] = useState(null);
  const [showDieta, setShowDieta] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const handleSubmit = (data) => {
    setUserData(data);
  };

  const handleGenerateDieta = () => {
    setShowDieta(true);
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const mockDieta = {
    colazione: [
      { alimento: "Latte", quantità: "200ml" },
      { alimento: "Fette biscottate", quantità: "3" },
    ],
    pranzo: [
      { alimento: "Pasta integrale", quantità: "80g" },
      { alimento: "Petto di pollo", quantità: "150g" },
      { alimento: "Insalata mista", quantità: "100g" },
    ],
    cena: [
      { alimento: "Zuppa di legumi", quantità: "250g" },
      { alimento: "Pane integrale", quantità: "50g" },
      { alimento: "Verdure grigliate", quantità: "150g" },
    ],
    spuntini: [
      { alimento: "Frutta fresca", quantità: "1 mela" },
      { alimento: "Yogurt magro", quantità: "125g" },
    ],
  };

  return (
    <div style={{ color: "white", textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {showDisclaimer && <Disclaimer handleCloseDisclaimer={handleCloseDisclaimer}/>}

      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>MealGenius</h1>

      {showDieta ? (
        <div>
          <TableResults data={mockDieta} />
          <button
            onClick={() => {
              setShowDieta(false);
              setUserData(null);
            }}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Torna Indietro
          </button>
        </div>
      ) : !userData ? (
        <FormMeal onSubmit={handleSubmit} />
      ) : (
        <div style={{ marginTop: "100px", color: "white" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Riepilogo</h2>
          <p>Età: {userData.age}</p>
          <p>Peso: {userData.weight} kg</p>
          <p>Obiettivo: {userData.goal}</p>
          <p>Allergie: {userData.allergies || "Nessuna"}</p>
          <button
            onClick={handleGenerateDieta}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              background: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Genera Dieta
          </button>
        </div>
      )}
    </div>
  );
}

export default MealGenius;
