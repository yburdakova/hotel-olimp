'use client'
import React, { useRef } from 'react';
import Script from 'next/script';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { PiPhoneBold } from 'react-icons/pi';
import { BsGeoAlt } from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';
import { OlimpMapProps } from '@/constants/interfaces';


function OlimpMap({ lang, title }: OlimpMapProps) {

    const objectManager = useRef(null);
    const map = useRef(null);
    const ymaps = useRef(null);

    return (
        <div className='component' id="contacts">
            <div className="component_container">
                <div className="px-8 title_continer">
                    <div className="flex items-center justify-center component_title">
                        <div className="mx-3 text-center">{title}</div>
                        <div className='dot'></div>
                        <div className='line'></div>
                    </div>
                </div>
            </div>

            <div className="relative map w-[100%] mt-6">
                <div className="z-10 w-[350px] xl:w-[440px] absolute left-20 top-[20%]">
                    <div className="flex items-center mb-6">
                        <div className="mr-6"><PiPhoneBold/></div>
                        <div className="item_text"><a href="tel:+995595536060" type='phone'>+995 595 53 60 60</a></div>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="mr-6"><BsGeoAlt/></div>
                        <div className="item_text">WQP8+H8Q, Ozurgeti, Natanebi, Shekvetili, Shekhvetili 3500, Georgia</div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="mr-6"><MdOutlineEmail/></div>
                        <div className="item_text"><a href="mailto:olimp-shekvetili@gmail.com" type='email'>olimp-shekvetili@gmail.com</a></div>
                    </div>
                </div>
            <YMaps 
                query={{
                    lang: `${lang === 'ru' ? 'ru_RU' : 'en_US'}`,
                    apikey: 'd48460db-1da4-45ae-b185-6a995ea048cd'
                }}>
                <Map
                    width={"100%"}
                    height={"550px"}
                    defaultState={{
                        center: [41.936545169920365, 41.76582784588911],
                        zoom: 9,
                    }}
                >
                    <Placemark 
                        geometry={[41.936545169920365, 41.76582784588911]} 
                    />
                    </Map>
            </YMaps>
            
            </div> 
            
            
        </div>
    )
}

export default OlimpMap;