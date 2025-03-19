import logo from './images/MealGenius-noSub.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{width:'500px', height:'500px'}} />
        <h1>Benvenuto su MealGenius</h1>
        <p>Il tuo assistente per pasti intelligenti!</p>
      </header>
    </div>
  );
}

export default App;