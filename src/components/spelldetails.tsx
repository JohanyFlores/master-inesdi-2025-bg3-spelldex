import styles from "./spelldetails.module.css";

import type { Spell } from "../models/spell";

type Props = {
  spell: Spell | null; // El hechizo seleccionado o null si no hay ninguno
};

export function SpellDetails({ spell }: Props) {
  if (!spell) {
    return <div className={styles.empty}>Selecciona un hechizo para ver los detalles</div>;
  }

  return (
    <div className={styles.details}>
      <h2 className={styles.title}>{spell.name}</h2>
      <img src={spell.icon} alt={spell.name} className={styles.icon} />
      <p className={styles.description}>Nivel: {spell.level}</p>
      <p className={styles.description}>Duración: {spell.duration}</p>
      <p className={styles.description}>Rango: {spell.range}</p>
      <p className={styles.description}>Tipo: {spell.type}</p>
      {spell.damage && spell.damage.length > 0 && (
        <div className={styles.damage}>
          <h3>Daño:</h3>
          {spell.damage.map((d, index) => (
            <p key={index}>
              {d.dice} ({d.damageType})
            </p>
          ))}
        </div>
      )}
    </div>
  );
}