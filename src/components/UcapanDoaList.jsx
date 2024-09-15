import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UcapanDoa from './UcapanDoa';
import backgroundImg from '../assets/gallery/random_walk.jpg'; // Replace with the path to your background image

const UcapanDoaList = () => {
  const [ucapanList, setUcapanList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch the ucapan & doa data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/ucapan-doa`);
        setUcapanList(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle adding a new ucapan to the list dynamically
  const handleAddUcapan = (newUcapan) => {
    setUcapanList((prevList) => [newUcapan, ...prevList]); // Add the new ucapan to the top
  };

  // Calculate total pages
  const totalPages = Math.ceil(ucapanList.length / itemsPerPage);

  // Get the current page items
  const currentItems = ucapanList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div 
      className="relative py-12 text-center p-5 bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* <h2 className="text-4xl font-bold mb-8">Ucapan & Doa</h2> */}

        {/* Render UcapanDoa Form */}
        <UcapanDoa onAddUcapan={handleAddUcapan} />

        <div className="max-w-lg mx-auto mt-8">
          {currentItems.length > 0 ? (
            <div className="space-y-4">
              {currentItems.map((item, index) => (
                <div key={index} className="flex items-start justify-start space-x-4">
                  {/* Chat Bubble */}
                  <div className="relative bg-blue-100 text-left p-4 mb-4 border rounded-lg shadow-md w-full max-w-md mx-auto">
                    <p className="font-bold text-lg mb-1">
                      {item.nama}
                      <span className={`ms-2 inline-block px-2 py-1 text-xs font-semibold rounded-full mt-2 ${
                        item.kehadiran === 'Hadir' ? 'bg-green-100 text-green-800' : item.kehadiran === 'Tidak Hadir' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        Status: {item.kehadiran}
                      </span>
                    </p>
                    <p className="text-gray-700">{item.ucapan}</p>

                    {/* Chat bubble arrow */}
                    <div className="absolute top-0 left-[-8px] w-0 h-0 border-t-8 border-t-blue-100 border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Belum ada ucapan dan doa yang diterima.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UcapanDoaList;
