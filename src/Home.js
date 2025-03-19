import { useNavigate } from 'react-router-dom';
import logo from './images/MealGenius-noSub.png';
import './App.css';

function Home() {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/meal-genius');
    };

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo} 
                    alt="logo" 
                    style={{width:'300px', height:'300px', cursor: 'pointer'}} 
                />
                <h1>Benvenuto su MealGenius</h1>
                <p>Il tuo assistente per pasti intelligenti!</p>
                <button onClick={handleImageClick}>Scopri di più!</button>
            </header>
        </div>
    );
}

export default Home;