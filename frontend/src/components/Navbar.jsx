const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-3 items-center text-white">
        
        {/* LEFT */}
        <div>
          <h1 className="text-xl font-bold">Sports Travel</h1>
        </div>

        {/* CENTER */}
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <a href="#events" className="hover:text-blue-400">Events</a>
          <a href="#how" className="hover:text-blue-400">How it Works</a>
          <a href="#contact" className="hover:text-blue-400">Get Quote</a>
        </div>

        {/* RIGHT (empty for balance) */}
        <div></div>

      </div>
    </nav>
  );
};

export default Navbar;
