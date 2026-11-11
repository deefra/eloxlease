"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export interface GalleryImage {
  thumb: string;
  full: string;
  fullWidth: number;
  fullHeight: number;
}

/**
 * Woodmart images gallery: three columns on wider screens, a one-up carousel with arrows on phones,
 * and a full-size lightbox (PhotoSwipe on the source) when an image is clicked.
 */
export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  };

  const step = useCallback(
    (direction: 1 | -1) =>
      setLightbox((current) => (current === null ? null : (current + direction + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  const current = lightbox === null ? null : images[lightbox];

  return (
    <div className="wd-images-gallery">
      <div className="wd-carousel" ref={trackRef}>
        {images.map((image, index) => (
          <div key={image.thumb} className="wd-gallery-item">
            <a
              href={image.full}
              onClick={(event) => {
                event.preventDefault();
                setLightbox(index);
              }}
            >
              <Image src={image.thumb} alt="" width={1000} height={800} sizes="(max-width: 768px) 100vw, 400px" />
            </a>
          </div>
        ))}
      </div>
      <button type="button" className="wd-btn-arrow wd-prev" aria-label="Previous slide" onClick={() => scrollBy(-1)}>
        <ChevronLeft size={18} />
      </button>
      <button type="button" className="wd-btn-arrow wd-next" aria-label="Next slide" onClick={() => scrollBy(1)}>
        <ChevronRight size={18} />
      </button>

      {current && (
        <div className="pswp" role="dialog" aria-modal="true" aria-label="Afbeelding" onClick={() => setLightbox(null)}>
          <div className="pswp-counter">
            {(lightbox ?? 0) + 1} / {images.length}
          </div>
          <button type="button" className="pswp-close" aria-label="Sluiten (Esc)" onClick={() => setLightbox(null)}>
            <X size={22} />
          </button>
          <button
            type="button"
            className="pswp-arrow pswp-arrow-left"
            aria-label="Vorige (pijltje links)"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft size={32} />
          </button>
          <Image
            className="pswp-image"
            src={current.full}
            alt=""
            width={current.fullWidth}
            height={current.fullHeight}
            sizes="100vw"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="pswp-arrow pswp-arrow-right"
            aria-label="Volgende (pijltje rechts)"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
