import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Julián Bernal",
  description: "Multiplica tus ventas con Inteligencia Artificial y métodos probados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter`}>{children}</body>
    </html>
  );
}
