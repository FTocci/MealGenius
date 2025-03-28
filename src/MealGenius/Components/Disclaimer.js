import React from "react";

const Disclaimer = ({ handleCloseDisclaimer }) => {
    return (
        <div
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "1000",
            }}
        >
            <div
                style={{
                    background: "white",
                    color: "black",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center",
                    maxWidth: "400px",
                }}
            >
                <h2>Disclaimer</h2>
                <p>
                    Questo è solo uno strumento di supporto e non può sostituire il lavoro di un professionista. Consulta
                    sempre un esperto per una dieta personalizzata.
                </p>
                <button
                    onClick={handleCloseDisclaimer}
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
                    OK
                </button>
            </div>
        </div>
    );
};

export default Disclaimer;