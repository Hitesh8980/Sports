const WhyUs = () => {
  const points = [
    {
      title: "Premium Experiences",
      desc: "Handpicked sports events with top-quality hospitality packages."
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs. All pricing rules are applied clearly."
    },
    {
      title: "End-to-End Support",
      desc: "From booking to event day, our team has you covered."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 bg-red-50 " >
          {points.map((item, idx) => (
            <div
              key={idx}
              className="bg-red p-6 rounded-xl shadow text-center"
            >
              <h3 className="text-xl font-semibold mb-3">
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

export default WhyUs;
