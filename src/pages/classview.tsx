// src/pages/ClassView.tsx
import { useParams } from "react-router-dom";
import { ClassGrid } from "../components/class-grid";
import { SpellDiagram } from "../components/spell-diagram";
import type { ClassId } from "../models/character-class";
import styles from "../app.module.css";

// Definimos los tipos para los parámetros de la URL
type ClassViewParams = {
  className: ClassId;
};

// Cambiamos de 'const ClassView: React.FC' a 'function ClassView()'
export function ClassView() {
  const { className } = useParams<ClassViewParams>();

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (
      (event.key === "Escape" || event.key === "Backspace") &&
      selectedClass
    ) {
      event.preventDefault();
      setSelectedClass(undefined);
      setHighlightedClass(undefined);
      return;
    }
  };

  return (
    // La etiqueta <main> ya no necesita 'onKeyDown' ni 'tabIndex'
    <main className={styles.main}onKeyDown={onKeyDown}>
      <SpellDiagram selectedClass={className} />
      <ClassGrid selectedClass={className} />
    </main>
  );
}

export default ClassView;