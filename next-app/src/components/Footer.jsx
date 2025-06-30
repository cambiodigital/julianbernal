'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 bg-light text-center text-sm">
      <p className="mb-2">© {new Date().getFullYear()} Julián Bernal</p>
      <div className="flex justify-center gap-4">
        <Link href="#" className="hover:text-primary">Aviso legal</Link>
        <Link href="#" className="hover:text-primary">Política de cookies</Link>
      </div>
    </footer>
  );
}
