import "./globals.css";
import Navbar from "./components/navbar";
import { Inter, Playfair_Display } from "next/font/google";

// Load Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
