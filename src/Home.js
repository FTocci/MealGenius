import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from './images/MealGenius-noSub.png';
import './App.css';
import UserMenu from './login/UserMenu';

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleImageClick = () => {
        navigate('/meal-genius');
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        setUser(null);
    };

    return (
        <div className="App">
            <header className="App-header">
                <UserMenu user={user} onLoginClick={handleLoginClick} onLogoutClick={handleLogout} />
                <img
                    src={logo} 
                    alt="logo" 
                    style={{ width: '300px', height: '300px', cursor: 'pointer' }} 
                    onClick={handleImageClick}
                />
                <h1>Benvenuto su MealGenius</h1>
                <p>Il tuo assistente per pasti intelligenti!</p>
                <button onClick={handleImageClick}>Scopri di più!</button>
            </header>
        </div>
    );
}

export default Home;
