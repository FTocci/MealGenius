import { showSpinner, hideSpinner } from "./animations.js";

export async function fetchApiMessage() {
    const url = "api/helloMessage";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.message;
    } catch (error) {
      return `Errore: ${error.message}`;
    }
  }


  export async function getDieteGenerated(user) {    
    const url = `/api/getDieteGenerate?user=${encodeURIComponent(user)}`;
    let loadingScreen;
    try {
      loadingScreen = showSpinner();
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return `Errore: ${error.message}`;
    } finally {
      hideSpinner(loadingScreen);
    }
}
