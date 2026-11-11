"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

/** Elementor divider with the source's "fadeInLeft" entrance animation, played once when scrolled into view. */
export function RevealDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("el-divider", visible ? "is-animated" : "is-invisible")}>
      <span className="el-divider-separator" />
    </div>
  );
}
