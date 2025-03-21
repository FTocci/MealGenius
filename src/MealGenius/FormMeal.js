import React, { useState } from "react";
import "./css/MealGenius.css";

function FormMeal({ onSubmit }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    goal: "",
    allergies: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (event) => {
    event.preventDefault();
    if (step === 4) {
      setSubmitted(true);
      onSubmit(formData);
    }
    setStep(step + 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const progressPercentage = ((step -1) / 4) * 100;

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {step > 0 && (
        <div style={{ background: "#ddd", borderRadius: "10px", overflow: "hidden", margin: "20px auto", width: "30%", height: "20px" }}>
          <div
            style={{
              width: `${progressPercentage}%`,
              background: "#4caf50",
              height: "100%",
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
      )}

      <form style={{ margin: "20px auto", maxWidth: "400px", background: "#333", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
        {!submitted && step === 0 && (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Premi "Inizia" per cominciare.</p>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                background: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Inizia
            </button>
          </div>
        )}
        {!submitted && step === 1 && (
          <div>
            <label>
              Età:
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </label>
          </div>
        )}
        {!submitted && step === 2 && (
          <div>
            <label>
              Peso (kg):
              <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
            </label>
          </div>
        )}
        {!submitted && step === 3 && (
          <div>
            <label>
              Obiettivo:
              <select name="goal" value={formData.goal} onChange={handleChange} required>
                <option value="">Seleziona</option>
                <option value="dimagrire">Dimagrire</option>
                <option value="ingrassare">Ingrassare</option>
                <option value="mantenere">Mantenere il peso</option>
              </select>
            </label>
          </div>
        )}
        {!submitted && step === 4 && (
          <div>
            <label>
              Allergie:
              <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} placeholder="Inserisci eventuali allergie" />
            </label>
          </div>
        )}
        {!submitted && step > 0 && step < 5 && (
          <button
            onClick={handleNext}
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
            Continua
          </button>
        )}
      </form>
    </div>
  );
}

export default FormMeal;
