import React from 'react';
import Image from 'next/image';
import styles from './Room.module.css';
import { Button } from '../';
import { bedx2, bedx1, sofa } from '@/public';

import { RoomItemProps } from '@/constants/interfaces';

function Room({ name, description, image, numberBedx2, numberBedx1, numberSofa, buttonTitle }: RoomItemProps) {


    const renderIconsBedx2 = () => {
        const divs = [];
        for (let i = 0; i < numberBedx2; i++) {
            divs.push(<div key={i}><Image src={bedx2} alt={`bedx2-${i}`} width={40} height={40} className={styles.icon_img}/></div>);
        }
        return divs;
    };
    const renderIconsBedx1 = () => {
        const divs = [];
        for (let i = 0; i < numberBedx1; i++) {
            divs.push(<div key={i}><Image src={bedx1} alt={`bedx1-${i}`} width={40} height={40} className={styles.icon_img}/></div>);
        }
        return divs;
    };
    
    const renderIconsSofa = () => {
        const divs = [];
        for (let i = 0; i < numberSofa; i++) {
            divs.push(<div key={i}><Image src={sofa} alt={`sofa-${i}`} width={40} height={40} className={styles.icon_img}/></div>);
        }
        return divs;
    };
    
    return (
        <div className={styles.room_container}>
            <div className={styles.room_image}>
                <Image src={image} alt='room-image' className={styles.room_img} 
                    width={1000}
                    height={600}/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{name}</div>
                <div className={styles.describe}>{description}</div>
                <div className={styles.bottom}>
                    <div className={styles.icons}>
                        <div className={styles.bedx2}>{renderIconsBedx2()}</div>
                        <div className={styles.bedx1}>{renderIconsBedx1()}</div>
                        <div className={styles.sofa}>{renderIconsSofa()}</div>
                    </div>
                    <a href="https://cloud.shelter.ru/hotels/HotelOlimp" target='_blank'>
                        <div className={styles.button_container}>
                            <Button text={buttonTitle} />
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Room