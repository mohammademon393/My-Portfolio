import React from 'react';

const Banner = () => {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-[#020617] via-[#041b2d] to-[#020617] text-white overflow-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-6">
          <h1 className="text-2xl font-bold text-sky-400">VirTuo</h1>

          <ul className="hidden md:flex gap-8 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Feature</li>
            <li className="hover:text-white cursor-pointer">All Demos</li>
            <li className="hover:text-white cursor-pointer">FAQ's</li>
          </ul>

          <button className="bg-sky-500 hover:bg-sky-600 px-6 py-2 rounded-md font-semibold">
            Buy Now
          </button>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center text-center mt-24 px-4">
          <span className="text-4xl mb-4">👋</span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Biggest Personal Portfolio <br />
            For <span className="text-sky-400">34 Demo</span>
          </h1>

          <p className="text-gray-400 max-w-xl mt-6">
            Our theme is fully Perfect for all device. You can visit our
            template all device easily.
          </p>
        </div>

        {/* Floating Demo Cards */}
        <div className="hidden lg:block absolute top-1/2 left-10 -translate-y-1/2">
          <img
            src="https://i.ibb.co/0Jmshvb/demo1.png"
            alt="demo left"
            className="w-64 rounded-xl shadow-lg"
          />
        </div>

        <div className="hidden lg:block absolute top-1/2 right-10 -translate-y-1/2">
          <img
            src="https://i.ibb.co/7kZK4Jx/demo2.png"
            alt="demo right"
            className="w-64 rounded-xl shadow-lg"
          />
        </div>

        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/20 blur-[120px] rounded-full"></div>
      </section>
    );
};

export default Banner;