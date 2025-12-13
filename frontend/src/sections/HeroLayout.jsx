import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";

const HeroLayout = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.stockcake.com/public/2/1/a/21a38bfb-e054-4678-a16f-76585fcd8b4c_large/mountain-river-view-stockcake.jpg')"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </section>
  );
};

export default HeroLayout;
