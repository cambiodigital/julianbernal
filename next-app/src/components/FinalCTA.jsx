'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-dark text-white text-center" id="cta-final">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-poppins font-bold mb-4">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="mb-6">Agenda una llamada y descubre cómo la IA puede multiplicar tus ventas.</p>
        <Link
          href="/calendly/consultoria"
          className="rounded-2xl px-8 py-4 font-semibold shadow-lg bg-primary hover:scale-105 transition"
        >
          Agenda diagnóstico
        </Link>
      </motion.div>
    </section>
  );
}
