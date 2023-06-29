import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.css';
import { logo, wave } from '@/public';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';

function Footer( {title, subtitle, menu, lang}: any) {
  return (
    <div className="component">
      <div className="component_container">
        <div className="component_title w-[1440px] px-8 flex justify-center items-center">
            <div className='line'></div>
            <div className='dot'></div>
            <div className={styles.header_logo}>
              <div className={styles.logo}>
                  <Image src={logo} alt='logo' className={styles.logo_img} />
              </div>
              <div className={styles.logo_title}>{title}</div>
              <div className={styles.logo_subtitle}>{subtitle}</div>
            </div>
            <div className='dot'></div>
            <div className='line'></div>
        </div>
        <div className="flex flex-wrap items_container">
          <div className="flex border-2 left_items basis-6/12">
            <div className="flex flex-col mr-6 hotel_links">
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
          <div className="flex justify-end border-2 right_items basis-6/12">
            <LocaleSwitcher lang={lang} flex="col "/>
            <div className="ml-6 currency">
              Currency MODULE
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%]'><Image src={wave} className='w-[100%]' alt="wave"/></div>
        <div className="mb-5 text-gray-300 developer"><a href="http://burdakova.com/" target='_blank'>Designed and developed by Yana Burdakova</a>, 2023</div>
    </div>
  )
}

export default Footer