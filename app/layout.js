import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Luxterra Builders",
  description: "Luxury homes • Commercial • Industrial • Pools",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
