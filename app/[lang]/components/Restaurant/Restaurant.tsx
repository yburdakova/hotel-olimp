import React from 'react';
import Image from 'next/image';

import { alcohol, coffe, desert, garnish, maindish, salads, pasta, fromoven } from '@/public';
import styles from './Restaurant.module.css';

function Restaurant( { dictionary }: any) {

    const restaurantItems = [
        {
            name: dictionary.alcohol,
            image: alcohol,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=8&lang=1"
        },
        {
            name: dictionary.coffe,
            image: coffe,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=9&lang=1"
        },
        {
            name: dictionary.desert,
            image:desert,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=1&lang=1"
        },
        {
            name: dictionary.garnish,
            image:garnish,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=2&lang=1"
        },
        {
            name: dictionary.maindish,
            image:maindish,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=3&lang=1"
        },
        {
            name: dictionary.salads,
            image:salads,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=4&lang=1"
        },
        {
            name: dictionary.pasta,
            image:pasta,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=5&lang=1"
        },
        {
            name: dictionary.fromoven,
            image:fromoven,
            url: "https://hotelolimp.kovzy.com/qr-menu/shop?catId=6&lang=1"
        }
    ]

    return (
        <div className='component'>
            <div className="title_container w-[1440px] px-8">
            <div className="component_title flex justify-center items-center">
                    <div className="text-center mx-3">{dictionary.title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
            </div>
            <div className="background_block bg-[#D0EBFF] w-[100%] mt-24">
            <div className="component_container">
                <div className="items_container grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 my-16" >
                    {restaurantItems.map( (item, index)  => 
                        <a href={item.url} target="_blank" key={`link-${index}`}>
                            <div className={`${styles.restaurant_item} relative overflow-hidden rounded-3xl `}>
                                <div className={`${styles.item_image} relative flex `}>
                                    <div className='w-[100%] h-[100%] bg-gray-600 opacity-50 absolute'/>
                                    <Image src={item.image} alt="dish-image" className='h-[100%] w-[100%]'/>
                                    <div className="w-[100%] h-[100%] text-3xl text-white absolute z-10 flex justify-center items-center p-8 text-center">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </a>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Restaurant