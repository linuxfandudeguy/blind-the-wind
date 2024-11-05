import Link from "next/link";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import Image from "next/image";

const Home: React.FC = () => {
  const [confetti, setConfetti] = useState(true);
  const [confettiWidth, setConfettiWidth] = useState(0);
  const [confettiHeight, setConfettiHeight] = useState(0);

  useEffect(() => {
    // Set confetti width and height after component mounts
    setConfettiWidth(window.innerWidth);
    setConfettiHeight(window.innerHeight);

    const timer = setTimeout(() => setConfetti(false), 5000); // Confetti lasts 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center text-center p-8 relative min-h-screen">
      {confetti && (
        <Confetti
          width={confettiWidth}
          height={confettiHeight}
          recycle={false}
        />
      )}
      <h1 className="text-4xl md:text-6xl font-extrabold animate-bounce mb-6 text-gray-900">
        🎉 The Most Mysterious Song on the Internet: Finally found! 🎉
      </h1>
      <Image
        src="/hq720.jpg"
        alt="Mixtape Cover"
        width={500}
        height={500}
        className="rounded-lg shadow-lg mb-6"
      />
      <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-900">
        Celebrating the discovery of this mysterious song!
      </p>
      <nav className="flex space-x-6">
        <Link
          href="/about"
          className="transition bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
        >
          About the Song
        </Link>
        <Link
          href="/gallery"
          className="transition bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg"
        >
          Gallery
        </Link>
      </nav>
    </div>
  );
};

export default Home;
