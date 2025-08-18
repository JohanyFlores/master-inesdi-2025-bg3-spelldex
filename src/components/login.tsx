// src/components/Login.tsx
import React from 'react';
import styles from './login.module.css';

// 1. Definimos las props que recibirá: una función para cerrarse
interface LoginProps {
  onClose: () => void;
}
export function Login({ onClose }: LoginProps) {
    return (
      <div className={styles.overlay}>
        <div className={styles.popup}>
          <h1>Bienvenido a SpellDex</h1>
          <p>Elige la senda de tu poder.</p> 
          <p>¿Qué sabiduría arcana buscas hoy?</p>
          <button onClick={onClose} className={styles.closeButton}>
            Comenzar
          </button>
        </div>
      </div>
    );
  }