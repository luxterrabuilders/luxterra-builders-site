import "./globals.css";

export const metadata = {
  title: "Luxterra Builders",
  description: "Luxury homes • Commercial • Industrial • Pools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
