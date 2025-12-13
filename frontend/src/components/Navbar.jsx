const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Sports Travel</h1>

        <div className="space-x-6 text-sm font-medium">
          <a href="#events" className="hover:text-blue-600">Events</a>
          <a href="#how" className="hover:text-blue-600">How it Works</a>
          <a href="#contact" className="hover:text-blue-600">Get Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
