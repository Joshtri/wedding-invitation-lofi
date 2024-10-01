/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import backgroundImage from '../assets/wedding/verticalFront.jpg'; // Ganti dengan path gambar yang sesuai

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-5 flex flex-col justify-center items-center min-h-screen space-y-5">
        {/* Introduction Section */}  
        <motion.section
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.25rem' }}
        >
          <p className="text-lg mb-6">Dengan Memohon Rahmat Tuhan Yang Maha Esa. Kami Bermaksud Menyelenggarakan Syukuran Pernikahan Putra Putri Kami</p>
        </motion.section>

        {/* Bride and Groom Card */}
        <div className="max-w-4xl p-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
          <motion.section
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            <div className="mb-8">
              <h3 className="text-4xl font-semibold" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>Maria Loviana, S.Par.</h3>
              <p className="text-lg" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem' }}>Putri ke-3 dari Bapak Capt. Subekti M.Mar & Ibu Heny Ratnawati,S.H</p>
            </div>
            
            <div>
              <h3 className="text-4xl font-semibold" style={{ fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>Aditya Pratama Kusumah, S.T.</h3>
              <p className="text-lg" style={{ fontFamily: 'EB Garamond, serif', fontSize: '1.125rem' }}>Putra ke-1 dari Bapak Dhany Ramdhany, M.Hum & Ibu Siti Rachmah</p>
            </div>
          </motion.section>
        </div>

        {/* Quote Section */}
        <motion.section
          className="text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          <p className="italic mt-8" style={{ fontSize: '1.1rem' }}>"Demikianlah mereka bukan lagi dua, melainkan satu, karena apa yang telah dipersatukan Allah tidak boleh diceraikan Manusia"</p>
          <p className="mt-2" style={{ fontSize: '1.25rem' }}>(Matius 19: 6)</p>
        </motion.section>
      </div>
    </div>
  );
};

export default WeddingInvitation;