// src/app.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import ClassView from './pages/classview';
import { useState } from "react";
import { Login } from "./components/login" // 1. Importa el nuevo componente Login

export function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const location = useLocation(); 

  const closeWelcome = () => {
    setShowWelcome(false);
  };

  return (<>
      {showWelcome && location.pathname === "/" && (
        <Login onClose={closeWelcome} />
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:className" element={<ClassView />} />
      </Routes>
    </>
  );
}