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
        <div className="component" id="hotel">
            <div className="mt-10  component_container">
                <div className="flex items-center justify-center component_title">
                    <div className={styles.hotel_stars}>
                        <Image src={star} key='star-1' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-2' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-3' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-4' alt='star' className={styles.hotel_star}/>
                    </div>
                    <div className="mx-3 text-center">{title}</div>
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
                            <div className="mt-6 component_text bold">{servisesTitle}</div>
                            {serviseItems.map((servise, index) =>
                                <div className={styles.servise_item} key={`servise-${index}`}>
                                    <div className="text-3xl">{servise.icon}</div>
                                    <div className="ml-6 component_text">{servise.text}</div>
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