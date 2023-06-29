import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import styles from './hero.module.css'
import { logo, resort_bg } from '@/public';
import {LocaleSwitcher,  Booking } from '../';
import { Slider } from '..';
import { sliderImages } from '@/constants';



function Hero({ title, subtitle, menu, lang }: any) {


    return (
        <div className="component" id="top">
            
            <div className={styles.hero_header}>
                <div className={styles.menu_block}>
                    <Link href="#resort" className={styles.menu_item}>{menu.resort}</Link>
                    <Link href="#hotel" className={styles.menu_item}>{menu.hotel}</Link>
                    <Link href="#rooms" className={styles.menu_item}>{menu.rooms}</Link>
                </div>
                <div className={styles.header_logo}>
                    <div className={styles.logo}>
                        <Image src={logo} alt='logo' className={styles.logo_img} />
                        <div className={styles.logo_pod}></div>
                    </div>
                    <div className={styles.logo_title}>{title}</div>
                    <div className={styles.logo_subtitle}>{subtitle}</div>
                </div>
                <div className={styles.menu_block}>
                    <Link href="#restaurant" className={styles.menu_item}>{menu.restaurant}</Link>
                    <Link  href="#contacts"className={styles.menu_item}>{menu.contacts}</Link>
                    <LocaleSwitcher lang={lang} flex="row"/>
                </div>
            </div>
            <div >
                <Slider images={sliderImages} />
            </div>
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