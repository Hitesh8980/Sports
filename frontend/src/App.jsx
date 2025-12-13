import HeroLayout from "./sections/HeroLayout";
import Events from "./sections/Events";
import HowItWorks from "./sections/HowItWorks";
import AddOns from "./sections/AddOns";
import LeadForm from "./sections/LeadForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeroLayout />
      <Events />
      <HowItWorks />
      <AddOns />
      <LeadForm />
      <Footer />
    </>
  );
}

export default App;
