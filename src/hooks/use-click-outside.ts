import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ClassId } from "src/models/character-class";
import { classes } from "src/data/classes";

export const useKeyboardNav = (items: typeof classes) => {
  const [highlightedSlug, setHighlightedSlug] = useState<ClassId | undefined>();
  const navigate = useNavigate();

  const onKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = highlightedSlug ? items.findIndex((item) => item.slug === highlightedSlug) : -1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % items.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + items.length) % items.length;
    } else if (event.key === "Enter" && highlightedSlug) {
      event.preventDefault();
      navigate(`/${highlightedSlug}`);
      return;
    } else {
      return;
    }

    event.preventDefault();
    const nextItem = items[nextIndex];
    if (nextItem) {
      setHighlightedSlug(nextItem.slug);
    }
  };

  return { highlightedSlug, setHighlightedSlug, onKeyDown };
};