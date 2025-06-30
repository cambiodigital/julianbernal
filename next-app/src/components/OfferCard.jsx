'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Tarjeta de oferta reutilizable.
 * @param {Object} props
 * @param {string} props.title - Nombre de la oferta.
 * @param {string} props.subtitle - Beneficio principal de la oferta.
 * @param {string} props.price - Precio mostrado.
 * @param {string[]} props.bullets - Lista de puntos de apoyo.
 * @param {string} props.badge - Etiqueta destacada.
 * @param {string} props.ctaText - Texto del botón de llamada a la acción.
 * @param {string} props.link - URL del CTA.
 */
export default function OfferCard({ title, subtitle, price, bullets = [], badge, ctaText, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
    >
      <div>
        {badge && <span className="inline-block bg-primary text-white px-2 py-1 text-xs rounded-md mb-2">{badge}</span>}
        <h3 className="text-xl font-poppins font-bold mb-1">{title}</h3>
        <p className="text-sm mb-2">{subtitle}</p>
        <p className="text-lg font-semibold mb-2">{price}</p>
        <ul className="text-sm list-disc list-inside space-y-1 mb-4">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <Link href={link} className="rounded-2xl px-8 py-4 font-semibold shadow-lg bg-primary text-white text-center hover:scale-105 transition">
        {ctaText}
      </Link>
    </motion.div>
  );
}
