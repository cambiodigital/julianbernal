'use client';
import { useState } from 'react';
import { faqs } from '../data/faqs';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-24 bg-light" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-poppins font-bold text-center mb-8">Preguntas frecuentes</h2>
        {faqs.map((f, i) => (
          <div key={f.q} className="mb-4 border-b">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-3 font-semibold flex justify-between items-center"
            >
              {f.q}
              <span>{open === i ? '-' : '+'}</span>
            </button>
            {open === i && <p className="pb-3">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
