import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import frontImg from './assets/wedding/frontImg.jpg';
import perahuImg from './assets/wedding/perahu.jpg';
import verticalFrontImg from './assets/wedding/verticalFront.jpg'
import backgroundImg1 from './assets/wedding/onthelake.jpg';
import backgroundImg2 from './assets/wedding/random_walk.jpg';
import GallleryComp from './components/GalleryComp';

import sectionImg from './assets/wedding/sectionImg.jpg';
import WeddingInvitation from './components/WeddingInvitation';
import WeddingEvent from './components/WeddingEventComp';
import KirimHadiah from './components/KirimHadiah';
import UcapanDoa from './components/UcapanDoa';

import UcapanDoaList from './components/UcapanDoaList';

function App() {

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({});
  const weddingDate = new Date('2024-10-20T00:00:00');

  // Background images for rotation
  const images = [frontImg, sectionImg, backgroundImg1, backgroundImg2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Update countdown every second
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

    // Clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Rotate images every 5 seconds with fade animation
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);


  // const [ucapanList, setUcapanList] = useState([
  //   { nama: 'John Doe', ucapan: 'Selamat menikah!', kehadiran: 'Hadir' },
  //   { nama: 'Jane Smith', ucapan: 'Semoga bahagia selalu!', kehadiran: 'Akan Hadir' },
  // ]);
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="font-sans bg-white w-full max-w-[425px]">
        
        {/* Header */}
        {/* <header className="w-full bg-white shadow">
          <h1 className="text-center text-4xl p-6">Undangan Pernikahan</h1>
        </header> */}

        {/* Hero Section */}
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${verticalFrontImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text content */}
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

            {/* Button to open invitation */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition"
            >
              Buka Undangan
            </motion.button>
          </div>
        </section>
        {/* Bride and Groom Section */}


        {/* Countdown Section */}
        <section className="relative flex items-center justify-center h-screen bg-cover bg-center">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Animasi fade saat gambar berganti
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

          {/* Countdown Box */}
          <div className="relative text-center text-white z-10">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-8"
            >
              Pernikahan
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8"
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
                <p className="text-lg">Detik</p>
              </div>
            </div>
          </div>
        </section>


        <WeddingInvitation/>



        {/* Event Section */}
        <WeddingEvent/>



        <GallleryComp/>

        <KirimHadiah/>

        {/* <UcapanDoa/> */}

        {/* <UcapanDoaList ucapanList={ucapanList} /> */}
        <UcapanDoaList/>


        {/* Gift Section */}
        <motion.section
          className="py-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <h2 className="text-4xl font-bold mb-8">Amplop Digital</h2> */}
          <p className='text-2xl font-bold mb-8'>Semoga Bapak/Ibu/Saudara/i Berkenan Hadir Untuk Memberikan Doa Restu Kepada Kami</p>

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
