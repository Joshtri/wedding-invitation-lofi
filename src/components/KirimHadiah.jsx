import { useState, useEffect } from 'react';
import galleryImg1 from '../assets/gallery/frontImg.jpg';
import galleryImg2 from '../assets/gallery/frontImg.jpg';
import galleryImg3 from '../assets/gallery/frontImg.jpg';

const KirimHadiah = () => {
  const [showAccount, setShowAccount] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [copiedField, setCopiedField] = useState(''); // Field to track which button was clicked

  const bcaAccount = "0881865431";
  const eWalletAccount = "+62822-4798-0723";
  const bcaHolder = "Maria Loviana";
  const eWalletHolder = "Adityaprtmksmh";

  const backgroundImages = [
    `url(${galleryImg1})`,
    `url(${galleryImg2})`,
    `url(${galleryImg3})`,
  ];

  const [currentBackground, setCurrentBackground] = useState(backgroundImages[0]);

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

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopySuccess('Berhasil disalin');
        setCopiedField(field); // Track which field was copied
      })
      .catch(() => {
        setCopySuccess('Gagal menyalin');
        setCopiedField(field); // Track which field was copied even if it fails
      });
    
    setTimeout(() => {
      setCopySuccess('');
      setCopiedField('');
    }, 2000); // Reset after 2 seconds
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
        <h2 className="text-5xl font-bold mb-8 text-white" style={{ fontFamily: 'Dancing Script, cursive' }}>Kirim Hadiah</h2>
        <p className="mb-8 text-white" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem' }}>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</p>
        
        {/* Kirim Amplop Button */}
        <button 
          onClick={() => setShowAccount(!showAccount)} 
          className="bg-white text-black py-2 px-4 rounded mb-8"
          style={{ fontFamily: 'EB Garamond, serif', fontSize: '1rem' }}
        >
          🎁 Kirim Amplop
        </button>

        {/* Conditional Rendering of Bank Information */}
        {showAccount && (
          <div className="bg-white bg-opacity-60 rounded-lg shadow-lg p-8 max-w-sm mx-auto fade-enter fade-enter-active">
            {/* BCA Information */}
            <div className="mb-8 relative">
              <h4 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>Bank BCA</h4>
              <p style={{ fontFamily: 'EB Garamond, serif' }}>a.n {bcaHolder}</p>
              <p style={{ fontFamily: 'EB Garamond, serif' }}>{bcaAccount}</p>
              <button 
                onClick={() => handleCopy(bcaAccount, 'bca')} 
                className="mt-4 bg-black text-white py-2 px-4 rounded"
                style={{ fontFamily: 'EB Garamond, serif' }}
              >
                Salin Rekening BCA
              </button>

              {/* Success Notification */}
              {copiedField === 'bca' && copySuccess && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md">
                  {copySuccess}
                </div>
              )}
            </div>

            {/* E-Wallet Information */}
            <div className="relative">
              <h4 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>E-Wallet</h4>
              <p style={{ fontFamily: 'EB Garamond, serif' }}>a.n {eWalletHolder}</p>
              <p style={{ fontFamily: 'EB Garamond, serif' }}>{eWalletAccount}</p>
              <button 
                onClick={() => handleCopy(eWalletAccount, 'ewallet')} 
                className="mt-4 bg-black text-white py-2 px-4 rounded"
                style={{ fontFamily: 'EB Garamond, serif' }}
              >
                Salin Nomor E-Wallet 
              </button>

              {/* Success Notification */}
              {copiedField === 'ewallet' && copySuccess && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md">
                  {copySuccess}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KirimHadiah;
