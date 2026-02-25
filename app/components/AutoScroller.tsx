"use client";

import React, { useRef, useEffect, useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
  "https://images.unsplash.com/photo-1481068164146-e8beb686f4d2",
  "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c",
  "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c",
];

export default function AutoScroller() {
  const trackRef = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const SPEED = 0.8; // smooth constant speed

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.children;
    if (!cards.length) return;

    let pos = 0;

    const animate = () => {
      pos -= SPEED * direction;

      // constant transform
      track.style.transform = `translateX(${pos}px)`;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth + 24; // including gap

      // when one full card goes out of view → move it to the end (no reset!)
      if (direction === 1 && Math.abs(pos) >= cardWidth) {
        track.appendChild(track.firstElementChild!);
        pos += cardWidth;
      }

      // reverse direction logic
      if (direction === -1 && pos >= 0) {
        track.prepend(track.lastElementChild!);
        pos -= cardWidth;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [direction]);

  return (
    <section className="py-14 px-6 md:px-20 bg-white select-none">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Follow Our Work
      </h2>

      <div
        className="overflow-hidden w-full relative"
        onMouseMove={(e) => {
          const box = e.currentTarget.getBoundingClientRect();
          const center = box.left + box.width / 2;

          if (e.clientX < center) setDirection(-1);
          else setDirection(1);
        }}
      >
        <div ref={trackRef} className="flex gap-6">
          {[...photos, ...photos].map((src, idx) => (
            <div
              key={idx}
              className="min-w-[260px] h-[350px] rounded-xl overflow-hidden shadow-xl shadow-yellow-400/10"
            >
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}