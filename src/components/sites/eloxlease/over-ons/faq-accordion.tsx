"use client";

import { useId, useState } from "react";

import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

/** Woodmart accordion: one item open at a time (the first by default), chevron opener on the right. */
export function FaqAccordion({ items }: { items: AccordionItem[] }) {
  const [active, setActive] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="wd-accordion">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.title} className="wd-accordion-item">
            <button
              type="button"
              className={cn("wd-accordion-title", open && "wd-active")}
              aria-expanded={open}
              aria-controls={`${id}-${index}`}
              onClick={() => setActive(open ? null : index)}
            >
              <span className="wd-accordion-title-text">{item.title}</span>
              <span className="wd-accordion-opener" aria-hidden="true">
                <svg viewBox="0 0 10 6" width="10" height="6">
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            </button>
            <div id={`${id}-${index}`} className={cn("wd-accordion-content", open && "wd-active")} role="region">
              <div className="wd-accordion-content-inner">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
