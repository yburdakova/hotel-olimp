import React from 'react'
import Image from 'next/image';

import styles from './Hero.module.css'
import { resort_bg } from '@/public';
import { Slider, Header, Booking } from '..';
import { sliderImages } from '@/constants';
import { HeaderProps } from '@/constants/interfaces';

function Hero({title, subtitle, menu, lang, buttonTitle, bookingDictionary }: HeaderProps) {


    return (
        <div className={styles.component} id="top">
            <Header
                title={title} 
                subtitle={subtitle}
                menu={menu}
                lang={lang}
            />

                <Slider images={sliderImages} />

            <Booking buttonTitle={buttonTitle} guestsDictionary={bookingDictionary} lang={lang}/>
            <div className={`${styles.resort_bg} `}>
                <div >
                    <Image src={resort_bg} alt="resort" className={styles.resort_bg_image} priority/>
                </div>
            </div>

        </div>
    )
}

export default Hero