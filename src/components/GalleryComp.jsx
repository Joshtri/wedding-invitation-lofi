// GallleryComp.js
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import galleryImg1 from '../assets/gallery/frontImg.jpg';
import galleryImg2 from '../assets/gallery/frontImg.jpg';
import galleryImg3 from '../assets/gallery/frontImg.jpg';
import galleryImg4 from '../assets/gallery/frontImg.jpg';
import galleryImg5 from '../assets/gallery/frontImg.jpg';
import galleryImg6 from '../assets/gallery/frontImg.jpg';
import backgroundImg from '../assets/wedding/frontImg.jpg'; // Import the background image

const GallleryComp = () => {
  const images = [
    { src: galleryImg1, size: 'col-span-2 row-span-2' }, // Larger image
    { src: galleryImg2, size: '' }, // Normal size
    { src: galleryImg3, size: '' }, // Normal size
    { src: galleryImg4, size: '' }, // Normal size
    { src: galleryImg5, size: '' }, // Normal size
    { src: galleryImg6, size: 'col-span-2' }, // Wider image
  ];

  return (
    <section 
      className="py-16 bg-gray-200 relative" 
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content of the gallery */}
      <div className="container mx-auto px-5 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Wedding Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg ${image.size}`}
            >
              <img src={image.src} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallleryComp;
