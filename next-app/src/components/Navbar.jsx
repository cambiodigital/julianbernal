'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const links = [
  { href: '#hero', label: 'Inicio' },
  { href: '#ofertas', label: 'Ofertas' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#metodo', label: 'Método' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-20 bg-white/80 backdrop-blur-lg shadow"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="#hero" className="font-poppins font-bold text-primary">
          Julián Bernal
        </Link>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-primary">
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/api/ebook"
          className="rounded-2xl px-4 py-2 font-semibold shadow-lg bg-primary text-white hover:scale-105 transition"
        >
          Descarga el libro
        </Link>
      </div>
    </motion.nav>
  );
}
