import React, { useEffect, useState } from "react";

const Banner = () => {
  const words = [
    "34 Demo",
    "Personal Portfolio",
    "Landing Page",
    "Influencers",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];

      if (!isDeleting) {
        // Typing logic
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(150); // Typing speed
      } else {
        // Backspacing logic
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(75); // Deleting speed (faster)
      }

      // Word finish hole pause kora ebong delete start kora
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // 2 sec wait korbe shesh hole
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);
  return (
    <section className="relative min-h-[600px] bg-[#020d18] text-white flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* Floating Preview Cards (Hidden on mobile) */}
      <div className="hidden lg:block absolute left-10 top-20 rotate-[-5deg] shadow-2xl opacity-50 hover:opacity-100 transition-opacity">
        <img
          src="preview1.png"
          alt="Demo 1"
          className="w-64 rounded-lg border border-gray-700"
        />
      </div>
      <div className="hidden lg:block absolute right-10 top-20 rotate-[5deg] shadow-2xl opacity-50 hover:opacity-100 transition-opacity">
        <img
          src="preview2.png"
          alt="Demo 2"
          className="w-64 rounded-lg border border-gray-700"
        />
      </div>

      {/* Main Content */}
        <h3 className="text-left text-2xl font-semibold">
            Hello, Welcome to My <span className="text-[#1C99FF]">Portfolio</span>
        </h3>
      <div className="text-center font-bold text-white text-5xl md:text-5xl leading-tight">
        <h1>
          I'm Habibur Rahman Emon<br />
          For{" "}
          <span className="text-[#1C99FF] border-r-4 border-[#1C99FF] pr-1">
            {currentText}
          </span>
        </h1>
      </div>

      {/* Floating Category Badge */}
      <div className="absolute bottom-10 right-10 bg-blue-500 w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-lg transform hover:scale-110 transition-transform cursor-default">
        <span className="text-2xl font-bold">300+</span>
        <span className="text-xs uppercase tracking-tighter">Categories</span>
      </div>
    </section>
  );
};

export default Banner;
