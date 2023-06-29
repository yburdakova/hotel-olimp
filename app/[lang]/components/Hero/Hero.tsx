import React from 'react'
import Image from 'next/image';

import styles from './hero.module.css'

import { resort_bg } from '@/public';
import { Slider, Header, Booking } from '..';
import { sliderImages } from '@/constants';
import { HeaderProps } from '@/constants/interfaces';

function Hero({title, subtitle, menu, lang }: HeaderProps) {


    return (
        <div className={styles.component} id="top">
            <Header
                title={title} 
                subtitle={subtitle}
                menu={menu}
                lang={lang}
            />

                <Slider images={sliderImages} />

            <Booking/>
            <div className={`${styles.resort_bg} `}>
                <div >
                    <Image src={resort_bg} alt="resort" className={styles.resort_bg_image} />
                </div>
            </div>

        </div>
    )
}

export default Hero