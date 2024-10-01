import { useState } from 'react';
import 'tailwindcss/tailwind.css';

//page ONE
import verticalImgFirst from '../assets/gallery/IMG_0093_resize.jpg';
import verticalImg from '../assets/gallery/perahu.jpg';
import verticalImg2 from '../assets/gallery/onthelake.jpg';
import verticalImg3 from '../assets/gallery/IMG_0105_resize.jpg';
import verticalImg4 from '../assets/gallery/IMG_0100_resize.jpg';
import verticalBoat from '../assets/gallery/onBoat.jpg';
import backgroundImg from '../assets/wedding-theme.png'; // Import the background image

//Page TWO
import vercticalImg1Sec from '../assets/gallery/frontImg.jpg';
import vercticalImg2Sec from '../assets/gallery/IMG_0193_resize.jpg';
import vercticalImg3Sec from '../assets/gallery/IMG_0204_resize.jpg';
import vercticalImg4Sec from '../assets/gallery/sectionImg.jpg';
import vercticalImg5Sec from '../assets/gallery/random_walk.jpg';
import vercticalImg6Sec from '../assets/gallery/sectionImg2.jpg';

//page THIRD
import verticalImg1Third from '../assets/gallery/IMG_0149_resize.jpg';
import verticalImg2Third from '../assets/gallery/IMG_0174_resize.jpg';
import verticalImg3Third from '../assets/gallery/IMG_0209_resize.jpg';
import verticalImg4Third from '../assets/gallery/IMG_0211_resize.jpg';

const GallleryComp = () => {
  const images = [
    verticalImgFirst, verticalImg, verticalImg2, verticalImg3, verticalImg4, verticalBoat,
    vercticalImg1Sec, vercticalImg2Sec, vercticalImg3Sec, vercticalImg4Sec, vercticalImg5Sec, vercticalImg6Sec,
    verticalImg1Third, verticalImg2Third, verticalImg3Third, verticalImg4Third
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
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content of the gallery */}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-8" style={{ fontFamily: 'Dancing Script, cursive' }}>
          Our Wedding Gallery
        </h2>

        {/* Baris Atas - Scroll ke kanan */}
        <div className="overflow-hidden">
          <div className="flex space-x-8 animate-scroll-right">
            {images.slice(0, 8).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-lg" // Ukuran gambar diperbesar
              >
                <img src={image} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Baris Bawah - Scroll ke kiri */}
        <div className="overflow-hidden mt-8">
          <div className="flex space-x-8 animate-scroll-left">
            {images.slice(8, 16).map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden w-80 h-80 md:w-96 md:h-96 rounded-lg shadow-lg" // Ukuran gambar diperbesar
              >
                <img src={image} alt={`Gallery ${index + 9}`} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallleryComp;
