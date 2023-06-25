import React from 'react'
import Image from 'next/image';

import styles from './hero.module.css'
import { logo } from '@/public';
import LocaleSwitcher from '../LocaleSwitcher';
import { Slider } from '..';
// import Slider from '../Slider02/Slider';
import { sliderImages } from '@/constants';


function Hero({ title, subtitle, menu, lang }: any) {


    return (
        <div className={styles.component}>
            <div className={styles.hero_header}>
                <div className={styles.menu_block}>
                    <div className={styles.menu_item}>{menu.resort}</div>
                    <div className={styles.menu_item}>{menu.hotel}</div>
                    <div className={styles.menu_item}>{menu.rooms}</div>
                </div>
                <div className={styles.header_logo}>
                    <div className={styles.logo}>
                        <Image src={logo} alt='logo' className={styles.logo_img}/>
                        <div className={styles.logo_pod}></div>
                    </div>
                    <div className={styles.logo_title}>{title}</div>
                    <div className={styles.logo_subtitle}>{subtitle}</div>
                </div>
                <div className={styles.menu_block}>
                    <div className={styles.menu_item}>{menu.restaurant}</div>
                    <div className={styles.menu_item}>{menu.contacts}</div>
                    <LocaleSwitcher lang={lang} />
                </div>
            </div>
            <div >
            <Slider images={sliderImages} />
            </div>



        </div>
    )
}

export default Hero