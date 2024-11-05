// src/pages/Gallery.tsx
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Wrapper div for padding around the page content */}
      <div className="py-12 px-4">
        {/* Navigation */}
        <nav className="flex justify-center space-x-6 mb-12 text-lg font-semibold">
          <Link href="/" className="text-blue-600 hover:underline font-bold">
            Home
          </Link>
          <Link href="/About" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link href="/Gallery" className="text-blue-600 hover:underline">
            Gallery
          </Link>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Gallery
        </h1>

        {/* Image Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mixtape Image */}
          <div className="bg-gray-300 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/hq720.jpg" // Ensure the image file is in the 'public' folder
              alt="Mixtape cover"
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <div className="p-4 text-center font-medium text-gray-700">
              Mixtape - Blind the Wind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
