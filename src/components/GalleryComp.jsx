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
    { src: verticalImgFirst }, // Normal size
    { src: verticalImg }, // Normal size
    { src: verticalImg2 }, // Normal size
    { src: verticalImg4 }, // Normal size
    { src: verticalImg3 }, // Normal size
    { src: verticalBoat }, // Normal size

    //Page 2.
    { src: vercticalImg1Sec }, // Normal size
    { src: vercticalImg2Sec }, // Normal size
    { src: vercticalImg3Sec }, // Normal size
    { src: vercticalImg4Sec }, // Normal size
    { src: vercticalImg6Sec }, // Normal size
    { src: vercticalImg5Sec }, // Normal size

    //page 3
    { src: verticalImg1Third }, // Normal size
    { src: verticalImg3Third }, // Normal size
    { src: vercticalImg3Sec }, // Normal size
    { src: verticalImg4Third }, // Normal size
    { src: verticalImg2Third }, // Normal size
    { src: vercticalImg4Sec }, // Normal size
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Calculate the current images to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg aspect-w-1 aspect-h-1`}
            >
              <img src={image.src} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Numbered Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              className={`px-4 py-2 bg-white text-black rounded-lg ${
                currentPage === pageNumber ? 'bg-blue-500 text-slate-500' : 'hover:bg-gray-300'
              }`}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallleryComp;
