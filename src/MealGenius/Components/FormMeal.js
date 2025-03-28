import React, { useState } from "react";
import "../css/MealGenius.css";

function FormMeal({ onSubmit }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    goal: "",
    allergies: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleNext = (event) => {
    event.preventDefault();
    setError(""); // Reset error message

    if (
      (step === 1 && !formData.age) ||
      (step === 2 && !formData.weight) ||
      (step === 3 && !formData.goal)
    ) {
      setError("Il campo è obbligatorio.");
      return;
    }

    if (step === 4) {
      setSubmitted(true);
      onSubmit(formData);
    } else {
      setStep(step + 1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const progressPercentage = ((step - 1) / 4) * 100;

  return (
    <div style={{ textAlign: "center", padding: "100px", fontFamily: "Arial, sans-serif" }}>
      {step > 0 && (
        <div
          style={{
            background: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
            margin: "0px auto",
            width: "40%",
            height: "10px",
          }}
        >
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

      <form
        style={{
          margin: "50px auto",
          maxWidth: "400px",
          background: "#333",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {!submitted && step === 0 && (
          <div style={{ marginBottom: "20px" }}>
            <h3>Genera la tua dieta giornaliera con un click</h3>
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
              <b>ETÀ:</b>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
        )}
        {!submitted && step === 2 && (
          <div>
            <label>
              <b>PESO (kg):</b>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
        )}
        {!submitted && step === 3 && (
          <div>
            <label>
              <b>OBIETTIVO:</b>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px" }}
              >
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
              <b>ALLERGIE:</b>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Inserisci eventuali allergie"
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
        )}
        {!submitted && step > 0 && step < 5 && (
          <button
            onClick={handleNext}
            style={{
              marginTop: "30px",
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
        {error && (
          <div
            style={{
              marginTop: "20px",
              color: "white",
              background: "#f44336",
              padding: "10px",
              borderRadius: "5px",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default FormMeal;