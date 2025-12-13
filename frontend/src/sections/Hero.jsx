const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white px-6 min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Premium Sports Travel Experiences
      </h1>

      <p className="text-lg max-w-2xl mb-8">
        Book curated sports event packages with seamless travel and hospitality.
      </p>

      <a
        href="#events"
        className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
      >
        View Upcoming Events
      </a>
    </div>
  );
};

export default Hero;
