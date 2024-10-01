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
    //page 1.
    { src: verticalImgFirst, size: 'col-span-2 row-span-2' }, // Larger image
    { src: verticalImg, size: '' }, // Normal size
    { src: verticalImg2, size: '' }, // Normal size
    { src: verticalImg4, size: '' }, // Normal size
    { src: verticalImg3, size: 'col-span-2 row-span-2' }, // Normal size
    { src: verticalBoat, size: '' }, // Normal size

    //Page 2.
    { src: vercticalImg1Sec, size: 'col-span-3 row-span-2' }, // Normal size
    { src: vercticalImg2Sec, size: '' }, // Normal size
    { src: vercticalImg3Sec, size: '' }, // Normal size
    { src: vercticalImg4Sec, size: '' }, // Normal size
    { src: vercticalImg6Sec, size: '' }, // Normal size
    { src: vercticalImg5Sec, size: 'col-span-2 row-span-2' }, // Normal size

    //page 3
    { src: verticalImg1Third, size: 'col-span-2 row-span-2' }, // Larger image
    { src: verticalImg3Third, size: '' }, // Normal size
    { src: vercticalImg3Sec, size: '' }, // Normal size
    { src: verticalImg4Third, size: '' }, // Normal size
    { src: verticalImg2Third, size: 'col-span-2 row-span-2' }, // Normal size
    { src: vercticalImg4Sec, size: '' }, // Normal size
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Calculate the current images to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg ${image.size}`}
            >
              <img src={image.src} alt={`Gallery ${index + 1}`} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 bg-white text-black rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 bg-white text-black rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallleryComp;
