'use client'
import React, { useRef } from 'react';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { PiPhoneBold } from 'react-icons/pi';
import { BsGeoAlt } from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md'


function OlimpMap( { lang, title }: any) {

    const objectManager = useRef(null);
    const map = useRef(null);
    const ymaps = useRef(null);

    return (
        <div className='component'>
            <div className="title_container w-[1440px] px-8">
                <div className="component_title flex justify-center items-center">
                    <div className="text-center mx-3">{title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
            </div>
            <div className="map relative">
                <div className="contacts_container absolute z-10 top-56 left-10 w-[350px] xl:w-[440px] 2xl:left-96">
                    <div className="contacts_item flex">
                        <div className="item_icon"><PiPhoneBold/></div>
                        <div className="item_text"><a href="tel:+995595536060" type='phone'>+995 595 53 60 60</a></div>
                    </div>
                    <div className="contacts_item flex">
                        <div className="item_icon"><BsGeoAlt/></div>
                        <div className="item_text">WQP8+H8Q, Ozurgeti, Natanebi, Shekvetili, Shekhvetili 3500, Georgia</div>
                    </div>
                    <div className="contacts_item flex">
                        <div className="item_icon"><MdOutlineEmail/></div>
                        <div className="item_text"><a href="mailto:olimp-shekvetili@gmail.com" type='email'>olimp-shekvetili@gmail.com</a></div>
                    </div>
                </div>
            <YMaps query={lang === 'ru' ? { lang: 'ru_RU' } : { lang: 'en_US' }}>
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