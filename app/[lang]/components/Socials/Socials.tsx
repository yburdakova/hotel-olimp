import Script from 'next/script';
import React from 'react';
import Image from 'next/image';

import { socials } from '@/constants';

function Socials({ title }: any) {
    return (
        <div className='component relative mt-20'>
            <div className="title_container w-[1440px] px-8 flex mb-10 justify-end">
                <div className="flex m-auto point w-[10px] h-[10px] bg-[#2D70B2] rounded-full" />
                <div className="icons_container flex mx-20">
                    { socials. map ( item => 
                        <a href={item.link} target="_blank">
                            <div className="flex h-[100%]">
                                <Image src={item.image} alt={item.name} className='w-[100%]'/>
                            </div>
                            
                        </a>
                    )}
                </div>
                <div className="component_title w-[100%]">{title}</div>
            </div>
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
            <div className="elfsight-app-9de58e30-bda8-4008-807c-ffa5e3c40ad5"></div>
            <div className='panel absolute w-[100%] h-[60px] bg-white z-[100000] bottom-0'></div>
        </div>
    )
}

export default Socials