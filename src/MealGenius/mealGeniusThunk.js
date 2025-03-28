export async function fetchApiMessage() {
    const url = "https://meal-genius-henna.vercel.app/api/helloMessage";
    try {
      const response = await fetch(url, { mode: 'no-cors' });
      if (!response.ok) {
        throw new Error(`Errore HTTP! Status: ${response.status}`);
      }
      const data = await response.json();
      return data.message;
    } catch (error) {
      return `Errore: ${error.message}`;
    }
  }
