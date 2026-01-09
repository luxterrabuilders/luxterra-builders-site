import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Luxterra Builders",
  description: "Building luxury spaces with owner-level thinking.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-body">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

