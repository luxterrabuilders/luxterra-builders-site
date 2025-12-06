"use client";

import Image from "next/image";
import "./carousel.css"; // this file is already in app/components

// Add or change slides here:
const slides = [
  { src: "/01.jpg", alt: "Luxterra project 1" },
  { src: "/02.jpg", alt: "Luxterra project 2" },
  { src: "/03.jpg", alt: "Luxterra project 3" },
];

export default function Carousel() {
  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {slides.map((slide, index) => (
          <div className="carousel-card" key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1200}
              height={650}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
