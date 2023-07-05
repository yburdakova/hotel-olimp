import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';
import { trLogo, wave02 } from '@/public';
import { LocaleSwitcher, Currency} from '../';
import { FooterProps } from '@/constants/interfaces';

function Footer( {title, subtitle, menu, lang}: FooterProps) {
  
  return (
    <div className="component">
      <div className="relative component_container ">
        <div className="flex items-center justify-center mt-10 component_title">
            <div className='line'></div>
            <div className='dot'></div>
            <div className={styles.header_logo}>
              <div className={styles.logo}>
                  <Image src={trLogo} alt='logo' className={styles.logo_img} />
              </div>
              <div className={styles.logo_title}>{title}</div>
              <div className={styles.logo_subtitle}>{subtitle}</div>
            </div>
            <div className='dot'></div>
            <div className='line'></div>
        </div>
        <div className={`xl:absolute flex flex-wrap items_container w-[100%] xl:top-[240px] z-999 ${styles.menu_container}`}>
          <div className="flex flex-wrap left_items grow ">
            <div className="flex flex-col mr-10 hotel_links">
              <Link href="#resort" className={styles.menu_item}>{menu.resort}</Link>
              <Link href="#hotel" className={styles.menu_item}>{menu.hotel}</Link>
              <Link href="#rooms" className={styles.menu_item}>{menu.rooms}</Link>
              <div className={styles.menu_item}>{menu.restaurant}</div>
            </div>
            <div className="flex flex-col contact_links">
              <Link href="#restaurant" className={styles.menu_item}>{menu.contacts}</Link>
              <Link href="#socials" className={styles.menu_item}>{menu.socials}</Link>
            </div>
          </div>
          <div className="w-[307px]"></div>
          <div className="flex flex-wrap justify-end right_items grow">
            <LocaleSwitcher lang={lang} row={false}/>
            <Currency/>
          </div>
        </div>
      </div>
      <div className='w-[100%] xl:mt-[-100px] mt-0'><Image src={wave02} className='w-[100%]' alt="wave"/></div>
      <div className=" w-[80%] mb-5 xl:mt-[-20px] mt-3  text-xs text-gray-300 md:text-base"><a href="http://burdakova.com/" target='_blank'>Designed and developed by Yana Burdakova</a>, 2023</div>
    </div>
  )
}

export default Footer