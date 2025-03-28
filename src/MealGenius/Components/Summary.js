import React from "react";

function Summary({ userData, onGenerateDieta }) {
  return (
    <div style={{ marginTop: "100px", color: "white" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Riepilogo</h2>
      <p>Età: {userData.age}</p>
      <p>Peso: {userData.weight} kg</p>
      <p>Obiettivo: {userData.goal}</p>
      <p>Allergie: {userData.allergies || "Nessuna"}</p>
      <button
        onClick={onGenerateDieta}
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
  );
}

export default Summary;
