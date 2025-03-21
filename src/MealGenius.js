import React, { useState } from "react";
import './App.css';

function MealGenius() {
  const [step, setStep] = useState(1);
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
    } else {
      setStep(step + 1);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenerateDiet = () => {
    alert("Caricamento...(Da implementare)");
  };

  return (
    <div style={{ color: "white", textAlign: "center", padding: "20px" }}>
      <h1>Meal Genius</h1>
      <p>Il tuo assistente per i pasti.</p>
      <form style={{ margin: "20px auto", maxWidth: "400px" }}>
        {!submitted && step === 1 && (
          <div style={{ marginBottom: "20px" }}>
            <label>
              Età:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
            <div>
              <button onClick={handleNext} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
                Continua
              </button>
            </div>
          </div>
        )}
        {!submitted && step === 2 && (
          <div style={{ marginBottom: "20px" }}>
            <label>
              Peso (kg):
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
            <div>
              <button onClick={handleNext} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
                Continua
              </button>
            </div>
          </div>
        )}
        {!submitted && step === 3 && (
          <div style={{ marginBottom: "20px" }}>
            <label>
              Obiettivo:
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
            <div>
              <button onClick={handleNext} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
                Continua
              </button>
            </div>
          </div>
        )}
        {!submitted && step === 4 && (
          <div style={{ marginBottom: "20px" }}>
            <label>
              Allergie:
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                placeholder="Inserisci eventuali allergie"
                style={{ marginLeft: "10px" }}
              />
            </label>
            <div>
              <button onClick={handleNext} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
                Continua
              </button>
            </div>
          </div>
        )}
      </form>
      {submitted && (
        <div style={{ marginTop: "20px", color: "white" }}>
          <h2>Riepilogo</h2>
          <p>Età: {formData.age}</p>
          <p>Peso: {formData.weight} kg</p>
          <p>Obiettivo: {formData.goal}</p>
          <p>Allergie: {formData.allergies || "Nessuna"}</p>
          <button
            onClick={handleGenerateDiet}
            style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}
          >
            Genera Dieta
          </button>
        </div>
      )}
    </div>
  );
}

export default MealGenius;
