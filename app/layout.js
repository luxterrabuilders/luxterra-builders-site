import "./globals.css";

export const metadata = {
  title: "Luxterra Builders | San Antonio Construction",
  description: "Luxterra Builders - Homes, Industrial, Commercial, Multifamily construction in San Antonio and surrounding areas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
