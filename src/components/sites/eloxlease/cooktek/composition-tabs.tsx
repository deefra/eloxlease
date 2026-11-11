"use client";

import { useEffect } from "react";

/**
 * Port of the source page's inline script: clicking a `.comp-tab` button shows the `.comp-set`
 * with the same `data-set` value (event delegation, as on the source).
 */
export function CompositionTabs() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const tab = (event.target as Element | null)?.closest<HTMLElement>(".comp-tab");
      if (!tab) return;
      const set = tab.dataset.set;
      document.querySelectorAll(".comp-tab").forEach((t) => t.classList.remove("active"));
      document.querySelectorAll(".comp-set").forEach((s) => s.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`.comp-set[data-set="${set}"]`)?.classList.add("active");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
