import Script from 'next/script';
import React from 'react';
import Image from 'next/image';

import { socials } from '@/constants';
import styles from './Socials.module.css';
import { SocialsProps } from '@/constants/interfaces';

function Socials({ title }: SocialsProps) {
    return (
        <div className='relative mt-20 component' id="socials">
            <div className="mt-10 component_container">
                <div className="flex flex-col items-center justify-center mb-20 component_title md:flex-row ">
                    <div className='line'></div>
                    <div className='dot'></div>
                    <div className={styles.icons_container}>
                            { socials. map ( item => 
                                <a href={item.link} target="_blank" rel="noopener noreferrer" key={`link-${item.name}}`}>
                                    <div className={styles.icon}>
                                        <Image src={item.image} alt={item.name} className={styles.icon_img}/>
                                    </div>
                                </a>
                            )}
                        </div>
                    <div className="mx-3 text-center">{title}</div>
                </div>
            </div>
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
            <div className="elfsight-app-9de58e30-bda8-4008-807c-ffa5e3c40ad5"></div>
            <div className='panel absolute w-[100%] h-[60px] bg-white z-[100000] bottom-0'></div>
        </div>
    )
}

export default Socials

