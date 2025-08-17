// src/pages/ClassView.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { ClassGrid } from "../components/class-grid";
import { SpellDiagram } from "../components/spell-diagram";
import type { ClassId } from "../models/character-class";
import styles from "../app.module.css";

type ClassViewParams = {
  className: ClassId;
};

const ClassView: React.FC = () => {
  // useParams lee el parámetro :className de la URL (ej. "druid")
  const { className } = useParams<ClassViewParams>();

  // La lógica original del teclado para volver al inicio se moverá aquí después
  const onKeyDown = (event: React.KeyboardEvent) => {
    // ...
  };

  return (
    <main className={styles.main} onKeyDown={onKeyDown} tabIndex={0}>
      <SpellDiagram selectedClass={className} />
      <ClassGrid selectedClass={className} />
    </main>
  );
};

export default ClassView;