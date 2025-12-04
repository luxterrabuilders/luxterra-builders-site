export const metadata = {
  title: "Gallery | Luxterra Builders",
  description: "Kings Modern Residence",
};

export default function GalleryPage() {
  const photos = [
    {
      section: "Exterior",
      images: [
        { src: "/01.jpg", label: "Exterior – Front" },
        { src: "/02.jpg", label: "Exterior – Porch" },
      ],
    },
    {
      section: "Living Room",
      images: [
        { src: "/03.jpg", label: "Living Room – Angle 1" },
        { src: "/04.jpg", label: "Living Room – Angle 2" },
      ],
    },
    {
      section: "Kitchen",
      images: [
        { src: "/05.jpg", label: "Kitchen – View 1" },
        { src: "/06.jpg", label: "Kitchen – View 2" },
      ],
    },
    {
      section: "Bedroom",
      images: [
        { src: "/07.jpg", label: "Bedroom" },
      ],
    },
    {
      section: "Bathrooms",
      images: [
        { src: "/08.jpg", label: "Bathroom – Black Tile" },
        { src: "/09.jpg", label: "Bathroom – White Marble" },
      ],
    },
    {
      section: "Extra",
      images: [
        { src: "/10.jpg", label: "Extra 1" },
        { src: "/11.jpg", label: "Extra 2" },
        { src: "/12.jpg", label: "Extra 3" },
      ],
    },
  ];

  return (
    <main className="page gallery-page">
      <section className="page-hero">
        <h1>Kings Modern Residence</h1>
        <p>A curated look inside Luxterra Builders’ latest modern residential project.</p>
      </section>

      {photos.map((group, idx) => (
        <section key={idx} className="gallery-section">
          <h2>{group.section}</h2>
          <div className="gallery-grid">
            {group.images.map((img, i) => (
              <figure key={i} className="gallery-item">
                <img src={img.src} alt={img.label} />
                <figcaption>{img.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
