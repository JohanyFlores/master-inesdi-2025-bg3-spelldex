import c from "classnames";
import { useEffect, useMemo, useState } from "react";
import upcastIcon from "src/assets/icons/other/upcast.png";
import type { Spell as SpellType  } from "src/models/spell";
import { Tooltip } from "./tooltip"
import tooltipStyles from "./tooltip.module.css";


import styles from "./spell.module.css";


export function Spell({
  spell,
  highlighted,
  detailed,
}: {
  spell: SpellType;
  highlighted: boolean | undefined;
  detailed: boolean | undefined;
}) {
  const [selected, setSelected] = useState(false);

  const [isHovered, setIsHovered] = useState(false); // hook para el hoover de tolltip

  const [showImage, setShowImage] = useState(false);
  const randomDuration = useMemo(() => (Math.random() + 0.5).toFixed(2), []);
  const randomDelay = useMemo(() => (Math.random() * 2 + 1).toFixed(2), []);

  const animatedSpellStyles = {
    "--randomDelay": randomDelay + "s",
    "--randomDuration": randomDuration + "s",
  } as React.CSSProperties;

  useEffect(
    function setShowImageWhenTransitionEnds() {
      if (detailed) {
        const transitionTime =
          (parseFloat(randomDuration) + parseFloat(randomDelay)) * 1000;

        const timer = setTimeout(() => {
          setShowImage(true);
        }, transitionTime);

        return () => {
          clearTimeout(timer);
          setShowImage(false);
        };
      } else {
        setShowImage(false);
      }
    },
    [detailed, randomDuration, randomDelay]
  );

  const onClick = () => {
    if (!detailed) {
      return;
    }
    setSelected(!selected);
  };

  return (

<div  // Atributo para tooltip
    onMouseEnter={() => setIsHovered(true)} // Atributo para tooltip
    onMouseLeave={() => setIsHovered(false)} // Atributo para tooltip
    >
    
    <article
    
      className={c(
        styles.spell,
        highlighted && !detailed && styles.highlighted,
        detailed && styles.detailed,
        detailed && selected && styles.selected,
      )}
      data-spell-id={spell.id}
      style={animatedSpellStyles}
      aria-label={spell.name}
      aria-details={spell.name} 
      {...(detailed ? { onClick } : {})}
    >


      {detailed && showImage && (
        <div className={styles.image}>
          <img src={spell.icon} alt={spell.name} className={styles.icon} />
          {spell.upcast && (
            <img src={upcastIcon} alt="upcast" className={styles.upcast} />
          )}
        </div>
      )}
    </article>

    {detailed && (<Tooltip spell={spell} className={isHovered ? tooltipStyles.visible : ""}/>)}
    </div> // Atributo para tooltip


  );
}
