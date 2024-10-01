// import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import verticalFrontImg from '../assets/wedding/verticalFront.jpg';

const WeddingEvent = () => {
  return (
    <div className="min-h-screen relative bg-center bg-cover" style={{ backgroundImage: `url(${verticalFrontImg})` }}>
      {/* Event Section */}
      <motion.section
        className="relative z-10 py-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8">Acara</h2>
        <p className="text-lg mb-12">Dengan ini izinkanlah kami berbagi rasa syukur dan kebahagiaan pada Pemberkatan dan Resepsi Pernikahan kami.</p>
        
        {/* Card Section */}
        <div className="flex flex-col items-center space-y-8">
          {/* Pemberkatan Card */}
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Pemberkatan</h3>
            <p>Minggu, 20 Oktober 2024</p>
            <p>Pukul: 14.00 WIB - Selesai</p>
            <p className="mt-4 font-semibold">Lokasi Acara</p>
            <p>Griya Joglo, Blitar</p>
            <p>Jl. Bengawan Solo No.179 kel, Tanjungsari, Kec. Sukorejo, Kota Blitar, Jawa Timur 66122</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              <a href="https://maps.app.goo.gl/8bnGf91b3EWghPN1A" target="_blank" rel="noopener noreferrer">
                Lihat Lokasi
              </a>
            </button>
          </div>

          {/* Resepsi Card */}
          <div className="bg-white bg-opacity-40 rounded-lg shadow-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Resepsi</h3>
            <p>Minggu, 20 Oktober 2024</p>
            <p>Pukul: 15.00 WIB - Selesai</p>
            <p className="mt-4 font-semibold">Lokasi Acara</p>
            <p>Griya Joglo, Blitar</p>
            <p>Jl. Bengawan Solo No.179 kel, Tanjungsari, Kec. Sukorejo, Kota Blitar, Jawa Timur 66122</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              <a href="https://maps.app.goo.gl/8bnGf91b3EWghPN1A" target="_blank" rel="noopener noreferrer">
                Lihat Lokasi
              </a>
            </button>
          </div>
        </div>

        {/* Embed Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl text-white font-semibold mb-4">Lokasi Map</h3>
          <div className="w-full max-w-2xl mx-auto p-5 ">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.370807843254!2d112.14981649135862!3d-8.082300253304938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec25c41e117b%3A0x855c3d44e8e46164!2sGriya%20Joglo!5e0!3m2!1sid!2sid!4v1726227712782!5m2!1sid!2sid"
              className="w-full aspect-video border-0 shadow-md rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </motion.section>
    </div>
  );
};

export default WeddingEvent;
