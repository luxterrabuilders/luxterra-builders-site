"use client";
import { useState, useEffect } from "react";

export const metadata = {
  title: "Gallery | Luxterra Builders",
  description: "Kings Modern Residence",
};

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [allImages, setAllImages] = useState([]);

  const photos = [
    { src: "/01.jpg", label: "Exterior – Front" },
    { src: "/02.jpg", label: "Exterior – Porch" },
    { src: "/03.jpg", label: "Living Room – Angle 1" },
    { src: "/04.jpg", label: "Living Room – Angle 2" },
    { src: "/05.jpg", label: "Kitchen – View 1" },
    { src: "/06.jpg", label: "Kitchen – View 2" },
    { src: "/07.jpg", label: "Bedroom" },
    { src: "/08.jpg", label: "Bathroom – Black Tile" },
    { src: "/09.jpg", label: "Bathroom – White Marble" },
    { src: "/10.jpg", label: "Extra 1" },
    { src: "/11.jpg", label: "Extra 2" },
    { src: "/12.jpg", label: "Extra 3" },
  ];

  useEffect(() => {
    setAllImages(photos.map((p) => p.src));
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxImage(allImages[index]);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setLightboxImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setLightboxImage(allImages[prevIndex]);
  };

  // Keyboard controls (ESC, ←, →)
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxImage) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxImage, currentIndex]);

  return (
    <main className="page gallery-page">
      <section className="page-hero">
        <h1>Kings Modern Residence</h1>
        <p>A curated look inside Luxterra Builders’ latest modern residential project.</p>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {photos.map((img, index) => (
            <figure key={index} className="gallery-item">
              <img
                src={img.src}
                alt={img.label}
                onClick={() => openLightbox(index)}
                style={{ cursor: "zoom-in" }}
              />
              <figcaption>{img.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxImage && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            ✕
          </button>

          <button className="nav-arrow left" onClick={prevImage}>
            ❮
          </button>

          <img src={lightboxImage} className="lightbox-image fade-in" />

          <button className="nav-arrow right" onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </main>
  );
}
