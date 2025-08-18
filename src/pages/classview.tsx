//Este es el codigo completo con la funcionalidad de navegación entre clases usando las flechas del teclado.

// src/pages/ClassView.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClassGrid } from "../components/class-grid";
import { SpellDiagram } from "../components/spell-diagram";
import type { ClassId } from "../models/character-class";
import classes from "../data/classes.json"; // 1. Importa la lista de clases
import styles from "./classview.module.css";

type ClassViewParams = {
  className: ClassId;
};

function ClassView() {
  const { className: selectedClass } = useParams<ClassViewParams>();
  const navigate = useNavigate();

  const onKeyDown = (event: React.KeyboardEvent) => {
    // 2. Encuentra el índice de la clase actual
    const currentIndex = classes.findIndex(c => c.slug === selectedClass);
    let nextIndex = currentIndex;

    if (event.key === "Escape" || event.key === "Backspace") {
      event.preventDefault();
      navigate("/");
      return;
    }
    
    // 3. Lógica para las flechas del teclado
    if (event.key === "ArrowRight") {
      // Usamos el operador de módulo (%) para volver al inicio si llegamos al final
      nextIndex = (currentIndex + 1) % classes.length;
    } else if (event.key === "ArrowLeft") {
      // Sumamos la longitud del array para asegurar un resultado positivo
      nextIndex = (currentIndex - 1 + classes.length) % classes.length;
    } else {
      return; // No hagas nada si no es una tecla de flecha o escape
    }

    event.preventDefault();
    const nextClass = classes[nextIndex];
    navigate(`/${nextClass.slug}`); // 4. Navega a la nueva clase
  };

  return (
    <main className={styles.main} onKeyDown={onKeyDown} tabIndex={-1}>
      <SpellDiagram 
    highlightedClass={undefined}
    selectedClass={selectedClass}
    background ={false}
     />

      <ClassGrid
    selectedClass={selectedClass}
    background={true}
    onClick={(c) => navigate(`/${c}`)}
    highlight={(c) => console.log(`Highlighting class: ${c}`)}
     />
    </main>
  );
}

export default ClassView;