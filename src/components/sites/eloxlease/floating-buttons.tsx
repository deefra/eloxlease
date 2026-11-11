"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { WHATSAPP_HREF } from "./site-data";

/** whatsappHref: the page's WhatsApp link, or null on pages whose source has no WhatsApp button. */
export function FloatingButtons({ whatsappHref = WHATSAPP_HREF }: { whatsappHref?: string | null }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {whatsappHref && (
        <a
          href={whatsappHref}
          className="whatsapp-btn"
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp Elox Lease"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.4 2.1 7.7L.3 31.6l8.1-2.1c2.2 1.2 4.8 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.5c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.8 1.3 1.3-4.7-.3-.5C3.4 20.7 2.7 18.4 2.7 16 2.7 8.7 8.7 2.7 16 2.7s13.3 6 13.3 13.3-6 13.3-13.3 13.3zm7.3-9.9c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.6-.9-.7h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.3 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.7-.5z" />
          </svg>
        </a>
      )}
      <a
        href="#"
        className={cn("scroll-top", showScrollTop && "is-visible")}
        aria-label="Scroll to top button"
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <ChevronUp size={18} strokeWidth={2} />
      </a>
    </>
  );
}
