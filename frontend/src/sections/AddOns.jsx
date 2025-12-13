const AddOns = () => {
  const addons = [
    {
      title: "Luxury Hotel Stay",
      desc: "4 & 5-star hotels close to the stadium."
    },
    {
      title: "Airport Transfers",
      desc: "Hassle-free pickup and drop services."
    },
    {
      title: "City Sightseeing",
      desc: "Guided tours of popular local attractions."
    },
    {
      title: "Match Day Hospitality",
      desc: "Premium lounges and food experiences."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Add-ons & Experiences
        </h2>

        <div className="flex space-x-6 overflow-x-auto pb-4">
          {addons.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[260px] bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
