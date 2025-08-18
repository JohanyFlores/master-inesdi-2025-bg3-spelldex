// src/app.tsx
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/home';
import ClassView from './pages/classview';
import { useState } from "react";

import styles from "./app.module.css";


export function App() {
  const [showWelcome, setShowWelcome] = useState(true); // Estado para controlar el pop-up
  const location = useLocation(); 

  const closeWelcome = () => {
    setShowWelcome(false); // Cierra el pop-up
  };

  return (
    <div>
      {showWelcome && location.pathname==="/"&&(
        <div className={styles.overlay}>
          <div className={styles.popup}>
            <h1>Bienvenido a SpellDex</h1>
            <p>Elige la senda de tu poder.</p> 
              <p>¿Qué sabiduría arcana buscas hoy?.</p>
            <button onClick={closeWelcome} className={styles.closeButton}>
              Comenzar
            </button>
          </div>
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:className" element={<ClassView />} />
      </Routes>
    </div>
  );
}


