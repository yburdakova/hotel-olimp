'use client'
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { home } from '@/public';
import styles from './Anchor.module.css'

function Anchor() {

  const [resort, setResort] = useState<HTMLElement | null>(null);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const element = document.getElementById('hotel');
    if (element) {
      setResort(element);
    }
  }, []);

  const handleScroll = () => {
    if (resort) {
      const secondComponentOffset = resort.getBoundingClientRect().top;
      if (secondComponentOffset <= window.innerHeight) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [resort]);

  return (
    <>
    {
      showDiv &&
      <Link href="#top">
          <div className={styles.anchor}>
            <Image src={home} alt="logo" className='w-[100%]'/>
          </div>
        </Link>
    }
    </>
  )
}

export default Anchor