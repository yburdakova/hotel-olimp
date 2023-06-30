import React from 'react';
import Image from 'next/image';
import styles from './room.module.css';
import { Button } from '../';

import { RoomItemProps } from '@/constants/interfaces';

function Room({  title, image, price, beds, facilities, facilitiesList, buttonTitle }: RoomItemProps) {

    return (
        <div className={styles.room_container}>
            <div className={styles.room_image}>
                <Image src={image} alt='room-image' className={styles.room_img}/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>{price}</div>
                <div className={styles.beds}>{beds}</div>
                <div className={styles.facilities}>
                    <span className='bold'>{facilities}:</span>
                    {facilitiesList.map((item:any, index:number) => <span key={`fasilities-${index}`}>{item}, </span>)}
                </div>
                <a href="https://cloud.shelter.ru/hotels/HotelOlimp" target='_blank'>
                <div className={styles.button_container}>
                    <Button text={buttonTitle}/>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Room