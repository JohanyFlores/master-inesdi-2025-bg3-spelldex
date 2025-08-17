import { useState } from "react";
import { ClassGrid } from "src/components/class-grid";
import { SpellDiagram } from "src/components/spell-diagram";
import { useNavigate } from "react-router-dom"; /*se agrega para la navegación*/


import type { ClassId } from "src/models/character-class";

import styles from "./app.module.css";


const Home: React.FC = () => {
  const [highlightedClass, setHighlightedClass] = useState<ClassId>();
  const navigate = useNavigate();

const handleClassClick = (classId: ClassId) => {
  navigate(`/${classId}`);
}

  return (
    <main className={styles.main} onKeyDown={onKeyDown}>
      <SpellDiagram
        highlightedClass={highlightedClass}
      />

      <ClassGrid
        highlight={setHighlightedClass}
        onClick={handleClassClick}
      />
    </main>
  );
}
export default Home;
