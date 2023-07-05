'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {MdRestaurant, MdLocalAirport, MdAvTimer, MdPool} from 'react-icons/md'
import {FaUmbrellaBeach, FaWifi, FaShower} from 'react-icons/fa'
import {LuParkingCircle} from 'react-icons/lu';
import styles from './Hotel.module.css';
import { star, hotel, pool, pool2, pool3, playgroung, territory, territory2 } from '@/public';
import { Button, ModalBooking} from '../'
import { HotelProps } from '@/constants/interfaces';

function Hotel({ title, info, servisesTitle, servises, buttonTitle }: HotelProps) {

    const serviseItems = [
        {
            icon: <MdRestaurant/>,
            text: servises.servise2
        },
        {
            icon: <FaUmbrellaBeach/>,
            text: servises.servise3
        },
        {
            icon: <FaWifi/>,
            text: servises.servise4
        },
        {
            icon: <LuParkingCircle/>,
            text: servises.servise5
        },
        {
            icon: <FaShower/>,
            text: servises.servise6
        }
    ]
    const hotelInfo = [
        {
            img: hotel,
            text: info.info1
        },
        {
            img: pool,
            text: info.info2
        },
        {
            img: pool2,
            text: info.info3
        },
        {
            img: pool3,
            text: info.info4
        },
        {
            img: playgroung,
            text: info.info5
        },
        {
            img: territory,
            text: info.info6
        },
        {
            img: territory2,
            text: info.info7
        }
    ]
    
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeInfo, setActiveInfo] = useState(hotelInfo[0]);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const slideWidth = 208;

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleGetInfoItem = (index:number) => {
        setActiveInfo(hotelInfo[index]);
};

    const handleScroll = (direction: string) => {
        if (!galleryRef.current) return;
        const galleryWidth = galleryRef.current.offsetWidth;
        const maxScrollPosition = galleryRef.current.scrollWidth - galleryWidth;
        const slideCount = Math.ceil(maxScrollPosition / slideWidth) + 1;
    
        let newPosition;
        if (direction === 'left') {
            newPosition = scrollPosition - slideWidth;
            if (newPosition < 0) {
                newPosition = maxScrollPosition - slideWidth;
            }
        } else {
            newPosition = scrollPosition + slideWidth;
            if (newPosition >= maxScrollPosition) {
                newPosition = 0;
            }
        }
    
        galleryRef.current.scrollTo({
            left: newPosition,
            behavior: 'smooth',
        });
        setScrollPosition(newPosition);
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, [isPopupOpen]);
    


    return (
        <div className="mt-6 md:mt-20 component" id="hotel">
            <div className="mt-2 md:mt-10 component_container">
                <div className="flex items-center justify-center component_title">
                    <div className={styles.hotel_stars}>
                        <Image src={star} key='star-1' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-2' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-3' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-4' alt='star' className={styles.hotel_star}/>
                    </div>
                    <div className="mx-3 text-left">{title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
                <div className={styles.hotel_content}>
                    <div className={styles.photos}>
                        <div className={styles.gallery}>
                            <div className={styles.slider} ref={galleryRef}>
                                {hotelInfo.map((item, index)=> 
                                    <div className={styles.gallery_item} onClick={()=>handleGetInfoItem(index)} key={`slide-${index}`}>
                                        <Image src={item.img} alt='info-preview' className={styles.gallery_img}/>
                                    </div>
                                )}
                            </div>
                            <button onClick={()=> {handleScroll('left')}} className={`${styles.button} left-2 rotate-180`}>&#10148;</button>
                            <button onClick={()=> {handleScroll('right')}} className={`${styles.button} right-2`}>&#10148;</button>
                        </div>
                        {activeInfo&&
                        <div className={styles.hotel_image}>
                            <Image src={activeInfo.img} className={styles.hotel_img} alt="info-img"></Image>
                        </div>
                        }
                    </div>
                    <div className={styles.hotel_info}>
                        <div className={styles.text}>{activeInfo.text}</div>
                        <div className={styles.servises}>
                            <div className="mt-6 component_text bold">{servisesTitle}</div>
                            {serviseItems.map((servise, index) =>
                                <div className={styles.servise_item} key={`servise-${index}`}>
                                    <div className="text-3xl">{servise.icon}</div>
                                    <div className="ml-6 component_text">{servise.text}</div>
                                </div>
                            )}
                            <div className={styles.button_container}>
                            <Button text={buttonTitle} openModal={handleOpenPopup} textsize='3xl'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <ModalBooking isOpen={isPopupOpen} onClose={handleClosePopup} src='https://olimp.burdakova.com/'/>}
        </div>
    )
}

export default Hotel