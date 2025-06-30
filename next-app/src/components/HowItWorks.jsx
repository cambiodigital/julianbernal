'use client';
import { motion } from 'framer-motion';
import { steps } from '../data/steps';

export default function HowItWorks() {
  return (
    <section className="py-24" id="metodo">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-center mb-12">
          Cómo funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <motion.div
              key={s.title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-2xl shadow text-center"
            >
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
