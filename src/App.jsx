import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import frontImg from './assets/wedding/frontImg.jpg';
import perahuImg from './assets/wedding/perahu.jpg';
import verticalFrontImg from './assets/wedding/verticalFront.jpg';
import backgroundImg1 from './assets/wedding/onthelake.jpg';
import backgroundImg2 from './assets/wedding/random_walk.jpg';
import GallleryComp from './components/GalleryComp';
import randomImgWedding from './assets/endcard.png';
import sectionImg from './assets/wedding/sectionImg.jpg';
import WeddingInvitation from './components/WeddingInvitation';
import WeddingEvent from './components/WeddingEventComp';
import KirimHadiah from './components/KirimHadiah';
import UcapanDoaList from './components/UcapanDoaList';
import backgroundMusic from './assets/Back-At-One.mp3';

function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const nextSectionRef = useRef(null);
  const mainSectionRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Disable scrolling initially
    document.body.style.overflow = 'hidden';
    
    // Prevent right-click context menu
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);

    // Prevent F12 and DevTools shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'F12' || (e.ctrlKey && (e.key === 'I' || e.key === 'J'))) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // Check localStorage to determine if the invitation has been opened
    const invitationOpened = localStorage.getItem('invitationOpened');
    if (invitationOpened === 'true') {
      setIsInvitationOpened(true);
      // Scroll to the next section if invitation has been opened
      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to the top section on refresh if invitation hasn't been opened
      window.scrollTo(0, 0);
    }

    return () => {
      // Cleanup: ensure overflow is reset on component unmount
      document.body.style.overflow = 'auto';
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isInvitationOpened) {
      // Enable scrolling when invitation is opened
      document.body.style.overflow = 'auto';
    }
  }, [isInvitationOpened]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
    localStorage.setItem('invitationOpened', 'true'); // Mark invitation as opened
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    playAudio(); // Start playing audio when invitation opens
  };

  const [timeLeft, setTimeLeft] = useState({});
  const weddingDate = new Date('2024-10-20T00:00:00');

  const images = [frontImg, sectionImg, backgroundImg1, backgroundImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;
      const timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      setTimeLeft(timeRemaining);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className={`font-sans bg-white w-full max-w-[425px] ${!isInvitationOpened ? 'overflow-hidden' : ''}`}>
        <section
          className="relative flex items-center justify-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${verticalFrontImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ref={mainSectionRef}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold"
            >
              The Wedding of
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-2 text-5xl font-bold"
            >
              Lovi & Aditya
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-4 text-xl"
            >
              20 Oktober 2024
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition"
              onClick={handleOpenInvitation}
            >
              Buka Undangan
            </motion.button>
          </div>
        </section>

        <audio ref={audioRef} src={backgroundMusic} autoPlay loop>
          Your browser does not support the audio element.
        </audio>

        {isInvitationOpened && (
          <section ref={nextSectionRef} className="relative flex items-center justify-center h-screen bg-cover bg-center">
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${images[currentImageIndex]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </motion.div>
            </AnimatePresence>
            <div className="relative text-center text-white z-10">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold mb-4"
              >
                Pernikahan
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl font-bold mb-8"
              >
                Minggu, 20 Oktober 2024
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hitung mundur menuju acara bahagia kami:
              </motion.p>
              <div className="grid grid-cols-4 gap-4 mt-6 p-4">
                <div className="p-4 bg-white text-black rounded-lg shadow-md">
                  <p className="text-3xl font-bold">{timeLeft.days || 0}</p>
                  <p className="text-lg">Hari</p>
                </div>
                <div className="p-4 bg-white text-black rounded-lg shadow-md">
                  <p className="text-3xl font-bold">{timeLeft.hours || 0}</p>
                  <p className="text-lg">Jam</p>
                </div>
                <div className="p-4 bg-white text-black rounded-lg shadow-md">
                  <p className="text-3xl font-bold">{timeLeft.minutes || 0}</p>
                  <p className="text-lg">Menit</p>
                </div>
                <div className="p-4 bg-white text-black rounded-lg shadow-md">
                  <p className="text-3xl font-bold">{timeLeft.seconds || 0}</p>
                  <p className="text-lg">Detik </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {isInvitationOpened && (
          <>
            <WeddingInvitation />
            <WeddingEvent />
            <KirimHadiah />
            <GallleryComp />
            <UcapanDoaList />
          </>
        )}

        {/* Gift Section */}
        <motion.section
      className="relative py-12 text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${randomImgWedding})` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* <h2 className="text-4xl font-bold mb-8">Amplop Digital</h2> */}
        <p className='text-2xl font-bold mb-8 text-white'>
          Semoga Bapak/Ibu/Saudara/i Berkenan Hadir Untuk Memberikan Doa Restu Kepada Kami
        </p>
      </div>
    </motion.section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
          <p className="text-center">Maria & Aditya Wedding © 2024</p>
        </footer>
      </div>
    </div>
    
  );
}

export default App;
