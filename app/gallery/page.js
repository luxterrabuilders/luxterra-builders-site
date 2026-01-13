// app/gallery/page.js
import "./gallery.css";

export const metadata = {
  title: "Project Gallery | Luxterra Builders",
  description:
    "Gallery of custom homes, commercial builds, and multifamily projects by Luxterra Builders.",
};

const gallerySections = [
  {
    id: "custom-homes",
    label: "Custom Homes",
    description:
      "Modern custom homes planned like assets—with efficient layouts, warm interiors, and long-term value.",
    photos: [
      {
        src: "/kings-01.jpg",
        alt: "Kings Modern Residence exterior at sunset",
        name: "Kings Modern Residence – Exterior",
        meta: "Custom Home + ADU • San Antonio, TX",
      },
      {
        src: "/kings-02.jpg",
        alt: "Kings Modern Residence living and kitchen",
        name: "Kings Modern Residence – Living & Kitchen",
        meta: "Open-concept living, kitchen, and dining",
      },
      {
        src: "/burnet-01.jpg",
        alt: "Burnet Rooftop Residence front elevation",
        name: "Burnet Rooftop Residence – Front Elevation",
        meta: "Custom Home • Burnet, TX",
      },
      {
        src: "/burnet-03.jpg",
        alt: "Burnet Rooftop Residence deck rendering",
        name: "Burnet Rooftop Residence – Rooftop Deck",
        meta: "Rooftop deck and outdoor living",
      },
      {
        src: "/burnet-04.jpg",
        alt: "Burnet Rooftop Residence interior 3D view",
        name: "Burnet Rooftop Residence – Interior 3D Plan",
        meta: "3D-planned living, kitchen, and circulation",
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial & Industrial",
    description:
      "Offices, labs, and industrial spaces built for safety, function, and future expansion.",
    photos: [
      {
        src: "/industrial-01.jpg",
        alt: "Industrial lab exterior",
        name: "Advanced Industrial Lab – Exterior",
        meta: "Lab & flex space • Tenant build-out",
      },
      {
        src: "/industrial-02.jpg",
        alt: "Industrial lab interior circulation",
        name: "Advanced Industrial Lab – Interior",
        meta: "Durable finishes and efficient circulation",
      },
      {
        src: "/industrial-03.jpg",
        alt: "Industrial lab work area",
        name: "Advanced Industrial Lab – Work Area",
        meta: "High-performance work zones and storage",
      },
    ],
  },
  {
    id: "multifamily",
    label: "Multifamily & ADUs",
    description:
      "Investment-minded duplexes, small multifamily, and ADUs that add flexibility and rental potential.",
    photos: [
      {
        src: "/kings-03.jpg",
        alt: "Kings Modern Residence ADU exterior",
        name: "Kings Modern Residence – ADU",
        meta: "Mother-in-law suite / ADU on same property",
      },
      {
        src: "/kings-04.jpg",
        alt: "Kings Modern Residence ADU interior",
        name: "Kings Modern Residence – ADU Interior",
        meta: "Private entry and efficient layout",
      },
      {
        src: "/burnet-06.jpg",
        alt: "Burnet Rooftop Residence 3D plan",
        name: "Burnet Rooftop Residence – 3D Plan View",
        meta: "3D coordination of structure and rooftop access",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <div className="gallery-inner">
        {/* PAGE HEADER */}
        <header className="gallery-header">
          <p className="lp-section-label">Gallery</p>
          <h1 className="lp-section-title">Recent Luxterra work.</h1>
          <p className="lp-section-sub">
            A curated look at custom homes, commercial builds, and multifamily
            projects—planned like assets, finished like homes.
          </p>
        </header>

        {/* SECTIONS */}
        {gallerySections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="gallery-section"
          >
            <div className="gallery-section-header">
              <h2>{section.label}</h2>
              <p>{section.description}</p>
            </div>

            <div className="gallery-grid">
              {section.photos.map((photo) => (
                <figure
                  key={photo.src}
                  className="gallery-item"
                >
                  <div className="gallery-image-wrap">
                    <img src={photo.src} alt={photo.alt} />
                  </div>
                  <figcaption className="gallery-caption">
                    <p className="gallery-name">{photo.name}</p>
                    <p className="gallery-meta">{photo.meta}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

