// CountdownSection.js
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  useEffect(() => {
    // Calculate time left for the event (October 20, 2024)
    const targetDate = new Date('2024-10-20T00:00:00');

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const slideInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 bg-gray-800 text-white relative">
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide>
          <div className="relative text-center text-white z-10" ref={ref}>
            <motion.h1
              variants={slideInVariant}
              initial="hidden"
              animate={controls}
              className="text-5xl font-bold mb-8"
            >
              Pernikahan
            </motion.h1>

            <motion.h3
              variants={slideInVariant}
              initial="hidden"
              animate={controls}
              className="text-3xl font-bold mb-8"
            >
              Minggu, 20 Oktober 2024
            </motion.h3>

            <motion.p
              variants={slideInVariant}
              initial="hidden"
              animate={controls}
            >
              Hitung mundur menuju acara bahagia kami:
            </motion.p>

            <motion.div
              className="grid grid-cols-4 gap-4 mt-6 p-4"
              variants={slideInVariant}
              initial="hidden"
              animate={controls}
            >
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
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

CountdownSection.propTypes = {
  timeLeft: PropTypes.shape({
    days: PropTypes.number,
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }),
};

export default CountdownSection;
