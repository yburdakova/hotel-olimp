import React from 'react';
import Image from 'next/image';
import {MdRestaurant, MdLocalAirport, MdAvTimer} from 'react-icons/md'
import {FaUmbrellaBeach, FaWifi, FaShower} from 'react-icons/fa'
import {LuParkingCircle} from 'react-icons/lu';
import styles from './hotel.module.css';
import { star, hotel } from '@/public';
import { Button} from '../'

function Hotel({ title, text, servisesTitle, servises }: any) {

    return (
        <div className="component mt-16">
            <div className="component_container mt-1">
                <div className={styles.hotel_title}>
                    <div className={styles.hotel_stars}>
                        <Image src={star} key='star-1' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-2' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-3' alt='star' className={styles.hotel_star}/>
                        <Image src={star} key='star-4' alt='star' className={styles.hotel_star}/>
                    </div>
                    <div className={`component_title ${styles.hotel_name}`}>{title}</div>
                </div>
                <div className={styles.hotel_content}>
                    <div className={styles.hotel_image}>
                        <Image src={hotel} alt="hotel" className={styles.hotel_img}/>
                    </div>
                    <div className={styles.hotel_info}>
                        <div className="component_text">{text}</div>
                        <div className="hotel_servises">
                            <div className="component_text mt-6 bold">{servisesTitle}</div>
                            

                            <div className={styles.servise_item}>
                                <div className="text-3xl"><MdAvTimer size={36}/></div>
                                <div className="component_text ml-6">{servises.servise1}</div>
                            </div>
                            <div className={styles.servise_item}>
                                <div className="text-3xl"><MdRestaurant size={36}/></div>
                                <div className="component_text ml-6">{servises.servise2}</div>
                            </div>
                            <div className={styles.servise_item}>
                                <div className="text-3xl"><FaUmbrellaBeach/></div>
                                <div className="component_text ml-6">{servises.servise3}</div>
                            </div>
                            <div className={styles.servise_item}>
                                <div className="text-3xl"><FaWifi/></div>
                                <div className="component_text ml-6">{servises.servise4}</div>
                            </div>
                            
                            <div className={styles.servise_item}>
                                <div className="text-3xl"><LuParkingCircle/></div>
                                <div className="component_text ml-6">{servises.servise5}</div>
                            </div>
                            <div className={styles.servise_item}>
                                <div className="text-3xl"><FaShower/></div>
                                <div className="component_text ml-6">{servises.servise6}</div>
                            </div>
                            <div className={styles.servise_item}>
                                <div className="text-3xl"><MdLocalAirport /></div>
                                <div className="component_text ml-6">{servises.servise7}</div>
                            </div>
                            
                        </div>
                        <Button/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Hotel