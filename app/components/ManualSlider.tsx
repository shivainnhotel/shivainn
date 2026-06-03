"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { blurData } from "@/lib/images";

type ManualSlide = {
  src: string;
  alt: string;
};

type ManualSliderProps = {
  slides: ManualSlide[];
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function ManualSlider({
  slides,
  className = "",
  imageClassName = "",
  priority = false,
  sizes
}: ManualSliderProps) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goTo = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  const onTouchEnd = (clientX: number) => {
    if (touchStart === null) {
      return;
    }

    const delta = touchStart - clientX;

    if (Math.abs(delta) > 36) {
      goTo(active + (delta > 0 ? 1 : -1));
    }

    setTouchStart(null);
  };

  return (
    <div
      className={`manual-slider ${className}`}
      onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
      onTouchEnd={(event) => onTouchEnd(event.changedTouches[0].clientX)}
    >
      {slides.map((slide, index) => (
        <div
          className={index === active ? "manual-slide manual-slide--active" : "manual-slide"}
          key={`${slide.src}-${index}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes={sizes}
            priority={priority && index === 0}
            placeholder="blur"
            blurDataURL={blurData}
            className={imageClassName}
          />
        </div>
      ))}

      {slides.length > 1 && (
        <>
          <button
            className="manual-arrow manual-arrow--prev"
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="manual-arrow manual-arrow--next"
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
          <div className="manual-dots" aria-label="Image slides">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => goTo(index)}
                aria-label={`Show image ${index + 1}`}
                key={`${slide.alt}-${index}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
