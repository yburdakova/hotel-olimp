'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './slider.module.css';


const Slider = ({ images }: any) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const nextIndex = currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  useEffect(()=> {
    console.log (currentImageIndex)
    setCurrentImage(images[currentImageIndex])
  }, [currentImageIndex])

  return (

      
      <div className={styles.slider}>
        <button onClick={prevImage} className={`${styles.button} left-2 rotate-180`}>&#10148;</button>
        <button onClick={nextImage} className={`${styles.button} right-2`}>&#10148;</button>
          <Image
            src={currentImage}
            alt='cover'
            className={styles.slider_img}
          />
      </div>
  );
};

export default Slider;

