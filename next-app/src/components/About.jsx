'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-light" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-poppins font-bold mb-4">Sobre Julián</h2>
          <p className="mb-4">
            Con años de experiencia ayudando a emprendedores a escalar sus
            negocios, Julián Bernal combina estrategias de ventas y
            automatización con inteligencia artificial.
          </p>
          <p>
            Ha formado a cientos de profesionales en Latinoamérica y continúa
            innovando con soluciones digitales accesibles.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-64"
        >
          <Image
            src="https://julianbernal.cambiodigital.shop/media/Selfie_Grupo_Conferencia_Potencializate.jpg"
            alt="Julián Bernal impartiendo conferencia Potencialízate"
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
            blurDataURL="https://julianbernal.cambiodigital.shop/media/Selfie_Grupo_Conferencia_Potencializate.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
}
