import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import FormMeal from "./FormMeal";
import "./css/MealGenius.css";
import TableResults from "./TableResults";
import Disclaimer from "./Disclaimer";
import { FaHome, FaBowlFood } from "react-icons/fa";

function MealGenius() {
  const [userData, setUserData] = useState(null);
  const [showDieta, setShowDieta] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const navigate = useNavigate(); // Inizializza useNavigate

  const handleSubmit = (data) => {
    setUserData(data);
  };

  const handleGenerateDieta = () => {
    setShowDieta(false);
    const loadingScreen = document.createElement("div");
    loadingScreen.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center;
      align-items: center; z-index: 1000;
    `;

    const spinner = document.createElement("div");
    spinner.style.cssText = `
      width: 50px; height: 50px; border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db; border-radius: 50%;
      animation: spin 1s linear infinite;
    `;

    const style = document.createElement("style");
    style.textContent = `
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);

    loadingScreen.appendChild(spinner);
    document.body.appendChild(loadingScreen);

    setTimeout(() => {
      document.body.removeChild(loadingScreen);
      setShowDieta(true);
    }, 5000); //da sostituire con la chiamata API appena non arriva la risposta
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

  const downloadTableAsTxt = () => {
    let content = "Dieta Generata:\n\n";
    for (const [key, value] of Object.entries(mockDieta)) {
      content += `${key.toUpperCase()}:\n`;
      value.forEach((item) => {
        content += `- ${item.alimento}: ${item.quantità}\n`;
      });
      content += "\n";
    }

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "dieta.txt";
    link.click();
  };

  return (
    <div style={{ color: "white", textAlign: "center", padding: "0px", fontFamily: "Arial, sans-serif" }}>
      {showDisclaimer && <Disclaimer handleCloseDisclaimer={handleCloseDisclaimer} />}

      {/* Bottone per tornare alla home */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          left: "20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          transition: "color 0.3s ease",
          color: "#FFFFFF", // Colore icona predefinito
        }}
        onMouseOver={(e) => (e.target.style.color = "green")}
        onMouseOut={(e) => (e.target.style.color = "#FFFFFF")}
      >
        <FaHome size={35} />
      </button>


      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          MealGenius
        </h1>
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#FFFFFF",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        ></div>
      </div>

      {showDieta ? (
        <div>
          <TableResults data={mockDieta} />
          <button
            onClick={downloadTableAsTxt}
            style={{
              marginTop: "10px",
              marginRight: "10px",
              background: "#2196F3",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Scarica Dieta
          </button>
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
