// src/components/Tooltip.tsx
import React from 'react';
import type { Spell } from '../models/spell'; // Asegúrate de que la ruta a tus modelos sea correcta
import styles from './tooltip.module.css';
import c from "classnames";

import concentrationIcon from '../assets/icons/other/concentration.png';
import upcastIcon from '../assets/icons/other/upcast.png';

// Importamos los iconos de daño (puedes añadir más según los necesites)
import acidIcon from '../assets/icons/damage/acid.png';
import coldIcon from '..//assets/icons/damage/cold.png';
import fireIcon from '../assets/icons/damage/fire.png';
import forceIcon from '../assets/icons/damage/force.png';
import lightningIcon from '../assets/icons/damage/lightning.png';
import necroticIcon from '../assets/icons/damage/necrotic.png';
import piercingIcon from '../assets/icons/damage/piercing.png';
import poisonIcon from '../assets/icons/damage/poison.png';
import psychicIcon from '../assets/icons/damage/psychic.png';
import radiantIcon from '../assets/icons/damage/radiant.png';
import slashingIcon from '../assets/icons/damage/slashing.png';
import thunderIcon from '../assets/icons/damage/thunder.png';
import bludgeoningIcon from '../assets/icons/damage/bludgeoning.png';





// 2. --- CREA UN MAPA PARA LOS ICONOS DE DAÑO ---
const damageIconMap: Record<string, string> = {
  acid: acidIcon,
  cold: coldIcon,
  fire: fireIcon,
  force: forceIcon,
  lightning: lightningIcon,
  necrotic: necroticIcon,
  piercing: piercingIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  radiant: radiantIcon,
  slashing: slashingIcon,
  thunder: thunderIcon,
  bludgeoning:bludgeoningIcon,
};





interface TooltipProps {
  spell: Spell;
  className?: string; // Para controlar la visibilidad desde el padre
}

export function Tooltip({ spell, className }: TooltipProps) {
  return (
    <div className={c(styles.tooltip, className)}>
      <h4 className={styles.name}>{spell.name}</h4>
      <div className={styles.details}>
      </div>



      <div className={styles.icons}>
        {spell.concentration && (
          <div className={styles.iconContainer}>
          <img src={concentrationIcon} alt="Concentration Icon" title="Requiere Concentración" />
          <span>Concentration</span>
          </div>

        )}
        {spell.upcast && (
          <div className={styles.iconContainer}>
          <img src={upcastIcon} alt="Upcast Icon" title="Mejora a niveles altos" />
          <span>Upcast</span>
          </div>
        )}
      </div>

      {spell.damage && spell.damage.length > 0 && (
        <div className={styles.damageTypes}>
          {spell.damage.map(d => (
            <div key={d.damageType} className={styles.iconContainer}>
            <img 
              key={d.damageType} 
              src={damageIconMap[d.damageType.toLowerCase()]}  //Usa el mapa para encontrar los iconos
              alt={`${d.damageType} damage icon`}
              title={d.damageType} 
            />
            <span>{d.damageType}</span>
            </div>

          ))}
        </div>
      )}
    </div>
    
    
  );
}