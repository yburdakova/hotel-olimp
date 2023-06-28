import React from 'react';
import Image from 'next/image';
import {MdRestaurant, MdLocalAirport, MdAvTimer} from 'react-icons/md'
import {FaUmbrellaBeach, FaWifi, FaShower} from 'react-icons/fa'
import {LuParkingCircle} from 'react-icons/lu';
import styles from './hotel.module.css';
import { star, hotel } from '@/public';
import { Button} from '../'

function Hotel({ title, text, servisesTitle, servises, buttonTitle }: any) {

const serviseItems = [
    {
        icon: <MdAvTimer/>,
        text: servises.servise1
    },
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
    },
    {
        icon: <MdLocalAirport/>,
        text: servises.servise7
    }
    
]

    return (
        <div className="component mt-16">
            <div className="component_container mt-1">
                <div className="component_title flex justify-center items-center">
                    <div className={styles.hotel_stars}>
                        <Image src={star} key='star-1' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-2' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-3' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-4' alt='star' className={styles.hotel_star}/>
                    </div>
                    <div className="text-center mx-3">{title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
                <div className={styles.hotel_content}>
                    <div className={styles.hotel_image}>
                        <Image src={hotel} alt="hotel" className={styles.hotel_img}/>
                    </div>
                    <div className={styles.hotel_info}>
                        <div className="component_text">{text}</div>
                        <div className="hotel_servises">
                            <div className="component_text mt-6 bold">{servisesTitle}</div>
                            {serviseItems.map((servise, index) =>
                                <div className={styles.servise_item} key={`servise-${index}`}>
                                    <div className="text-3xl">{servise.icon}</div>
                                    <div className="component_text ml-6">{servise.text}</div>
                                </div>
                            )}
                        </div>
                        <div className={styles.button_container}>
                            <Button text={buttonTitle}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hotel