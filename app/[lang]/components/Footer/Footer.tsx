import React from 'react';
import Image from 'next/image';
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
        <div className="items_container flex  flex-wrap">
          <div className="left_items basis-6/12 border-2 flex">
            <div className="hotel_links flex flex-col mr-6">
              <div className={styles.menu_item}>{menu.resort}</div>
              <div className={styles.menu_item}>{menu.hotel}</div>
              <div className={styles.menu_item}>{menu.rooms}</div>
              <div className={styles.menu_item}>{menu.restaurant}</div>
            </div>
            <div className="contact_links flex flex-col">
              <div className={styles.menu_item}>{menu.contacts}</div>
              <div className={styles.menu_item}>{menu.socials}</div>
            </div>
          </div>
          <div className="right_items basis-6/12 border-2 flex justify-end">
            <LocaleSwitcher lang={lang} flex="col "/>
            <div className="currency ml-6">
              Currency MODULE
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100%]'><Image src={wave} className='w-[100%]' alt="wave"/></div>
        <div className="developer mb-5 text-gray-300"><a href="http://burdakova.com/" target='_blank'>Designed and developed by Yana Burdakova</a>, 2023</div>
    </div>
  )
}

export default Footer