// src/components/class-grid.tsx

import classesData from "src/data/classes.json" with { type: "json" };
import type { ClassId } from "src/models/character-class";
// Asumo que el nombre del componente es ClassItem, como en tu importación
import { ClassItem } from "src/components/class-item"; 
import styles from "./class-grid.module.css";

interface ClassGridProps {
  highlight?: (classId?: ClassId) => void;
  onClick?: (classId: ClassId) => void;
  selectedClass?: ClassId;
}

export function ClassGrid({ highlight, onClick, selectedClass }: ClassGridProps) {
  return (
    <ul className={styles.grid}>
      {classesData.map((classId) => (
        <ClassItem
          key={classId} // <-- CORREGIDO: Usa 'classId' directamente
          classId={classId} // <-- CORREGIDO: Usa 'classId' directamente
          isSelected={selectedClass === classId}
          onHighlight={highlight}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}