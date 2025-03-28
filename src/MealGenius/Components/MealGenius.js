import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import FormMeal from "./FormMeal";
import "../css/MealGenius.css";
import TableResults from "./TableResults";
import Disclaimer from "./Disclaimer";
import { FaHome } from "react-icons/fa";
import { showSpinner, hideSpinner } from "../animations";
import Summary from "./Summary";

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
    const loadingScreen = showSpinner();
    setTimeout(() => {
      hideSpinner(loadingScreen);
  
      setShowDieta(true);
    }, 5000); 
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);
  };

  const mockDieta = {
    Colazione: [
      { alimento: "Latte", quantità: "200ml" },
      { alimento: "Fette biscottate", quantità: "3" },
    ],
    Pranzo: [
      { alimento: "Pasta integrale", quantità: "80g" },
      { alimento: "Petto di pollo", quantità: "150g" },
      { alimento: "Insalata mista", quantità: "100g" },
    ],
    Cena: [
      { alimento: "Zuppa di legumi", quantità: "250g" },
      { alimento: "Pane integrale", quantità: "50g" },
      { alimento: "Verdure grigliate", quantità: "150g" },
    ],
    Spuntini: [
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
        <Summary userData={userData} onGenerateDieta={handleGenerateDieta} />
      )}
    </div>
  );
}

export default MealGenius;
