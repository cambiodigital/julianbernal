import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import OffersGrid from '../components/OffersGrid';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Julián Bernal - IA y Ventas',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <OffersGrid />
      <About />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
