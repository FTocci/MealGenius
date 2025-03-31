import React from 'react';
import { CiLogout } from "react-icons/ci";


const UserMenu = ({ user, onLoginClick, onLogoutClick }) => {
    return (
        <div 
            style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}
        >
            {user ? (
                <>
                    <span style={{fontSize:'15px'}}>{user.email}</span>
                    <button 
                        onClick={onLogoutClick} 
                        style={{ padding: '10px 20px', cursor: 'pointer', background: 'none', border: 'none' }}
                    >
                        <CiLogout />
                    </button>
                </>
            ) : (
                <button 
                    onClick={onLoginClick} 
                    style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                    Accedi
                </button>
            )}
        </div>
    );
};

export default UserMenu;
