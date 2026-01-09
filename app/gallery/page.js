// app/gallery/page.js
import Image from "next/image";

export const metadata = {
  title: "Project Gallery | Luxterra Builders",
  description:
    "View a selection of Luxterra Builders projects, including modern homes, renovations, and industrial work.",
};

const galleryImages = [
  {
    src: "/01.jpg",
    alt: "Kings Modern Residence exterior",
    label: "Kings Modern Residence",
    tag: "Modern Home",
  },
  {
    src: "/02.jpg",
    alt: "Kings Modern Residence living room",
    label: "Kings Modern Residence",
    tag: "Interior",
  },
  {
    src: "/03.jpg",
    alt: "Kings Modern Residence open living space",
    label: "Kings Modern Residence",
    tag: "Interior",
  },
  // You can add more images here later:
  // { src: "/adaes-01.jpg", alt: "...", label: "Adaes Home", tag: "Remodel" },
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <h1>Project Gallery</h1>
        <p>
          A curated look at some of our recent work across modern homes,
          renovations, and industrial spaces in the San Antonio area.
        </p>
      </section>

      <section className="gallery-grid">
        {galleryImages.map((item, index) => (
          <article className="gallery-card" key={index}>
            <div className="gallery-image-wrap">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="gallery-image"
              />
            </div>
            <div className="gallery-card-body">
              <span className="gallery-tag">{item.tag}</span>
              <h2>{item.label}</h2>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
