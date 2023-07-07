'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './Slider.module.css';


const Slider = ({ images }: any) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImageIndex + 1;
    const lastIndex = images.length - 1;
    const newIndex = nextIndex > lastIndex ? 0 : nextIndex;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex - 1;
    const lastIndex = images.length - 1;
    const newIndex = prevIndex < 0 ? lastIndex : prevIndex;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    setCurrentImage(images[currentImageIndex]);
  }, [currentImageIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 8000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
      <div className={styles.slider}>
        <button onClick={prevImage} className={`${styles.button} left-2 rotate-180`}>&#10148;</button>
        <button onClick={nextImage} className={`${styles.button} right-2`}>&#10148;</button>
          <Image
            src={currentImage}
            alt='cover'
            className={styles.slider_img}
            width={300}
            height={300}
          />
      </div>
      
  );
};

export default Slider;

