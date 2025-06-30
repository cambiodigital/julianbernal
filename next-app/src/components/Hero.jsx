'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Sección principal con imagen de fondo y dos CTAs.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-dark text-white">
      <Image
        src="https://julianbernal.cambiodigital.shop/media/Selfie_Grupo_Grande_Evento_Exitoso.jpg"
        alt="Julián Bernal celebrando un evento de éxito con emprendedores"
        fill
        className="object-cover object-center opacity-60"
        placeholder="blur"
        blurDataURL="https://julianbernal.cambiodigital.shop/media/Selfie_Grupo_Grande_Evento_Exitoso.jpg"
      />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-4">
          Multiplica tus ventas con Inteligencia Artificial y métodos probados
        </h1>
        <p className="mb-8 text-lg">
          Implanta IA, automatiza y escala tu negocio — incluso si hoy vendes 0 online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/api/ebook" className="rounded-2xl px-8 py-4 font-semibold shadow-lg bg-primary hover:scale-105 transition">
            Descarga gratis el primer capítulo
          </Link>
          <Link href="/calendly/consultoria" className="rounded-2xl px-8 py-4 font-semibold shadow-lg bg-white text-dark hover:scale-105 transition">
            Empecemos hoy
          </Link>
        </div>
      </div>
    </section>
  );
}
