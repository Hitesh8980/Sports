const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Event",
      desc: "Browse upcoming sports events and select your favorite."
    },
    {
      step: "02",
      title: "Request Quote",
      desc: "Select a package and submit your travel details."
    },
    {
      step: "03",
      title: "Confirm Booking",
      desc: "Receive a personalized quote and complete your booking."
    }
  ];

  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="border p-6 rounded-xl text-center"
            >
              <div className="text-blue-600 text-3xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
