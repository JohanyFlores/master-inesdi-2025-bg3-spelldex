import { useState, useEffect, useRef } from "react";
import { ClassGrid } from "src/components/class-grid";
import { SpellDiagram } from "src/components/spell-diagram";
import { useNavigate } from "react-router-dom";

import type { ClassId } from "src/models/character-class";

import styles from "./home.module.css";

function Home() {
  const [highlightedClass, setHighlightedClass] = useState<ClassId>(); // Clase inicial
  const [selectedClass, setSelectedClass] = useState<ClassId | undefined>(undefined); // Clase seleccionada
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);

  const classIds: ClassId[] = ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"]; // Lista de clases

  const handleKeyDown = (event: React.KeyboardEvent) => {
    console.log("Key pressed:", event.key); // Agrega esto para depurar

    const currentIndex = classIds.indexOf(highlightedClass);
    let newIndex = currentIndex;

    if (event.key === "ArrowRight") {
      newIndex = (currentIndex + 1) % classIds.length;
    } else if (event.key === "ArrowLeft") {
      newIndex = (currentIndex - 1 + classIds.length) % classIds.length;
    } else if (event.key === "Enter") {
      setSelectedClass(classIds[currentIndex]); // Actualiza la clase seleccionada
      navigate(`/${classIds[currentIndex]}`);
    }

    setHighlightedClass(classIds[newIndex]);
  };

  useEffect(() => {
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.focus();

      const handleFocus = () => console.log("Main has focus");
    const handleBlur = () => console.log("Main lost focus");

    mainElement.addEventListener("focus", handleFocus);
    mainElement.addEventListener("blur", handleBlur);

    return () => {
      mainElement.removeEventListener("focus", handleFocus);
      mainElement.removeEventListener("blur", handleBlur);

    }
  }
  }, []);

  const handleClassClick = (classId: ClassId) => {
    setSelectedClass(classId); // Actualiza la clase seleccionada
    navigate(`/${classId}`);
  }; 

  return (
    <main
      ref={mainRef}
      className={styles.main}
      tabIndex={0} // Permite que el contenedor reciba eventos de teclado
      onKeyDown={handleKeyDown} // Maneja las teclas de flechas y Enter
      autoFocus
    >
      <SpellDiagram 
      highlightedClass={highlightedClass}
      background={true} />
      <ClassGrid
      highlight={setHighlightedClass}
      background={false}
      onClick={handleClassClick}
      highlightedClass={highlightedClass}
      selectedClass={selectedClass} // Pasa la clase seleccionada
      />
    </main>
  );
}

export default Home ;