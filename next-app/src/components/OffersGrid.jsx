import OfferCard from './OfferCard';
import { offers } from '../data/offers';

/**
 * Lista de tarjetas de la escalera de valor.
 */
export default function OffersGrid() {

  return (
    <section className="py-24 bg-light" id="ofertas">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {offers.map((o) => (
          <OfferCard key={o.title} {...o} />
        ))}
      </div>
    </section>
  );
}
