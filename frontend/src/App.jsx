import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Events from "./sections/Events";
import WhyUs from "./sections/WhyUs";
import HowItWorks from "./sections/HowItWorks";
import LeadForm from "./sections/LeadForm";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Hero />
        <Events />
        <WhyUs />
        <HowItWorks />
        <LeadForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
