'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp }from 'react-icons/io5';
import styles from './Header.module.css';
import { trLogo } from '@/public';
import { HeaderProps } from '@/constants/interfaces';
import { LocaleSwitcher } from '../';


function Header( {title, subtitle, menu, lang }: HeaderProps) {

    const [isMobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        !isMobileMenu ? setMobileMenu(true) : setMobileMenu(false);
    }

    useEffect(() => {
        if (isMobileMenu) {
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            const scrollY = document.body.style.top;
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isMobileMenu]);
    
    return (
        <div className={styles.header} id="top">
            <div className="container">
            <div className={styles.container}>
                <div className={styles.menu_block}>
                    <Link href="#resort" className={styles.menu_item}>{menu.resort}</Link>
                    <Link href="#hotel" className={styles.menu_item}>{menu.hotel}</Link>
                    <Link href="#rooms" className={styles.menu_item}>{menu.rooms}</Link>
                </div>
                <div className={styles.header_logo}>
                    <div className={styles.logo}>
                        <Image src={trLogo} alt='logo' className={styles.logo_img} priority />
                        <div className={styles.logo_pod}></div>
                    </div>
                    <div className={styles.logo_title}>{title}</div>
                    <div className={styles.logo_subtitle}>{subtitle}</div>
                </div>
                <div className={styles.menu_block}>
                    <Link href="#restaurant" className={styles.menu_item}>{menu.restaurant}</Link>
                    <Link  href="#contacts"className={styles.menu_item}>{menu.contacts}</Link>
                    <LocaleSwitcher lang={lang} row flag/>
                </div>
            </div>
            </div>
            {isMobileMenu&&
            <div className={styles.mobile_menu}>
                <div className={styles.mobile_menu_container}>
                    <Link href="#resort" className={styles.mobile_menu_item} onClick={toggleMobileMenu}>{menu.resort}</Link>
                    <Link href="#hotel" className={styles.mobile_menu_item} onClick={toggleMobileMenu}>{menu.hotel}</Link>
                    <Link href="#rooms" className={styles.mobile_menu_item} onClick={toggleMobileMenu} >{menu.rooms}</Link>
                    <Link href="#restaurant" className={styles.mobile_menu_item} onClick={toggleMobileMenu}>{menu.restaurant}</Link>
                    <Link href="#socials" className={styles.mobile_menu_item} onClick={toggleMobileMenu}>{menu.socials}</Link>
                    <Link  href="#contacts"className={styles.mobile_menu_item} onClick={toggleMobileMenu}>{menu.contacts}</Link>
                </div>
            </div>
            }
        </div>
    )
}

export default Header