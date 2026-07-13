import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { CircleSlide } from "@/data/circleSlides";

type CircleSliderProps = {
  slides: CircleSlide[];
  className?: string;
};

const AUTOPLAY_MS = 4200;

const CircleSlider = ({ slides, className }: CircleSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // useEffect(() => {
  //   if (slides.length <= 1) {
  //     return undefined;
  //   }

  //   const intervalId = window.setInterval(() => {
  //     setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
  //   }, AUTOPLAY_MS);

  //   return () => window.clearInterval(intervalId);
  // }, [slides.length]);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isPlaying, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-visible rounded-[2rem]">
        <AnimatePresence initial={false} mode="wait">
          <motion.article
            key={activeSlide.id}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.95fr)] md:items-stretch"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(17,12,23,0.12)]">
              <img
                src={activeSlide.imageSrc}
                alt={activeSlide.imageAlt}
                className="h-[21rem] w-full object-cover sm:h-[26rem] md:h-full md:min-h-[28rem]"
                loading={activeIndex === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
            <div className="relative isolate w-full flex min-h-[20rem] md:min-h-[28rem]">
              <div
                className="relative isolate w-full flex min-h-[20rem] flex-col rounded-[2rem] px-6 py-7 text-white shadow-[0_24px_60px_rgba(17,12,23,0.14)] sm:px-8 sm:py-9 md:min-h-[28rem] lg:px-10"
                style={{ backgroundColor: activeSlide.cardBackground }}
              >
                <div className="text-base font-bree font-semibold tracking-tight text-white/90">{activeSlide.eyebrow}</div>
                <h4 className="mt-3 font-bree text-3xl leading-tight sm:text-[2.15rem]">
                  {activeSlide.title}
                </h4>
                <div className="my-4 h-px bg-white/25" />
                <p className="max-w-[22rem] text-lg leading-9 text-white/95 sm:text-[1.65rem] sm:leading-[3rem] md:text-[1.2rem] md:leading-10 lg:text-[1.85rem] lg:leading-[3.2rem]">
                  {activeSlide.description}
                </p>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-10 left-8 -z-10 hidden h-32 w-10 rounded-bl-[0.6rem] md:block"
                style={{
                  backgroundColor: "#a2a47c",
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.13) 0 1px, transparent 1px 6px)",
                  clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 86%)",
                }}
              />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.span
              key={slide.id}
              animate={{
                width: isActive ? 28 : 8,
                opacity: isActive ? 1 : 0.35,
                backgroundColor: isActive ? "#742092" : "#D8D2DB",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-block h-2 shrink-0 rounded-full"
            />
          );
        })}
      </div>

      {/* <button onClick={() => setIsPlaying(false)}>Pause</button>
      <button onClick={() => setIsPlaying(true)}>Play</button> */}
    </div>
  );
};

export default CircleSlider;
