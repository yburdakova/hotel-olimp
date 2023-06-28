import Script from 'next/script';
import React from 'react';
import Image from 'next/image';

import { socials } from '@/constants';

function Socials({ title }: any) {
    return (
        <div className='component relative mt-20'>
            <div className="title_container w-[1440px] px-8">
                <div className="component_title flex justify-center items-center">
                <div className='line'></div>
                <div className='dot'></div>
                <div className="icons_container flex mx-10">
                        { socials. map ( item => 
                            <a href={item.link} target="_blank" key={`socialslink-{index}`}>
                                <div className="flex ">
                                    <Image src={item.image} alt={item.name} className=''/>
                                </div>
                            </a>
                        )}
                    </div>
                <div className="text-center mx-3">{title}</div>
                    
            </div>
        </div>
            <div className="component_container">
            </div>
            <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></Script>
            <div className="elfsight-app-9de58e30-bda8-4008-807c-ffa5e3c40ad5"></div>
            <div className='panel absolute w-[100%] h-[60px] bg-white z-[100000] bottom-0'></div>
        </div>
    )
}

export default Socials

