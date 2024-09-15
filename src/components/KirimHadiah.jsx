import { useState, useEffect } from 'react';
import galleryImg1 from '../assets/gallery/frontImg.jpg';
import galleryImg2 from '../assets/gallery/frontImg.jpg';
import galleryImg3 from '../assets/gallery/frontImg.jpg';

const KirimHadiah = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const bankAccount = "3141371299";
  const address = "Jl. Angklung, RT012/RW04 Kecamatan. Alak - Kelurahan. Fatufeto";

  const backgroundImages = [
    `url(${galleryImg1})`,
    `url(${galleryImg2})`,
    `url(${galleryImg3})`,
  ];

  const [currentBackground, setCurrentBackground] = useState(backgroundImages[0]);

  // Change background image every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevBackground) => {
        const currentIndex = backgroundImages.indexOf(prevBackground);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [backgroundImages]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopySuccess('Berhasil disalin'))
      .catch(() => setCopySuccess('Gagal menyalin'));
    
    setTimeout(() => setCopySuccess(''), 2000); // Reset after 2 seconds
  };

  return (
    <div 
      className="relative py-12 text-center p-2 bg-cover bg-center transition-all duration-1000" 
      style={{ backgroundImage: currentBackground }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-white">Kirim Hadiah</h2>
        <p className="mb-8 text-white">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
        
        {/* Kirim Amplop Button */}
        <button 
          onClick={() => setShowAccount(!showAccount)} 
          className="bg-white text-black py-2 px-4 rounded mb-8"
        >
          🎁 Kirim Amplop
        </button>

        {/* Conditional Rendering of Bank Information */}
        {showAccount && (
          <div className="bg-white bg-opacity-70 rounded-lg shadow-lg p-8 max-w-sm mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Bank BCA</h3>
            <p>a.n Putri Anggraini Desmona Logo</p>
            <p>{bankAccount}</p>
            <button 
              onClick={() => handleCopy(bankAccount)} 
              className="mt-4 bg-black text-white py-2 px-4 rounded"
            >
              Copy Rekening
            </button>

            {/* Success Message for Copy */}
            {copySuccess && <p className="mt-2 text-green-500">{copySuccess}</p>}

            <p className="mt-8">Anda Juga Bisa Mengirim Kado Fisik Ke Alamat Berikut</p>
            <p>{address}</p>
            <button 
              onClick={() => handleCopy(address)} 
              className="mt-4 bg-black text-white py-2 px-4 rounded"
            >
              Copy Alamat
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KirimHadiah;
