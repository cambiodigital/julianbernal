'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { logos } from '../data/logos';

export default function SocialProof() {
  return (
    <section className="py-16 bg-white" id="social-proof">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-4">
        {logos.map((src) => (
          <motion.div
            key={src}
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-40"
          >
            <Image
              src={src}
              alt="Testimonio"
              fill
              className="object-cover rounded-lg"
              placeholder="blur"
              blurDataURL={src}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
