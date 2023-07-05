'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

import { alcohol, coffe, desert, garnish, maindish, salads, pasta, fromoven, salads_en, salads_ru, salads_ka, soup } from '@/public';
import styles from './Restaurant.module.css';
import { RestaurantProps, MenuItem } from '@/constants/interfaces';

function Restaurant( { dictionary, lang }: RestaurantProps) {

    const restaurantItems = [
        {
            name: dictionary.alcohol,
            image: alcohol,
            url: lang=='en' ? salads_en :lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.coffe,
            image: coffe,
            url: lang=='en' ? salads_en :lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.desert,
            image:desert,
            url: lang=='en' ? salads_en :lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.garnish,
            image:garnish,
            url: lang=='en' ? salads_en :lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.maindish,
            image:maindish,
            url: lang=='en' ? salads_en :lang=='ka'? salads_ka : salads_ru

        },
        {
            name: dictionary.salads,
            image:salads,
            url: lang=='en' ? salads_en : lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.soups,
            image: soup,
            url: lang=='en' ? salads_en : lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.fromoven,
            image:fromoven,
            url: lang=='en' ? salads_en : lang=='ka'? salads_ka : salads_ru
        }
    ]

    const [indexMenu, setIndexMenu] = useState<number | null>(null);
    const [menuItem, setMenuItem] = useState<MenuItem>({} as MenuItem);
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    
    const getIndex = (index: number) => {
        setIndexMenu(index);
    };

    useEffect(() => {
        if (indexMenu !== null) {
        setMenuItem(restaurantItems[indexMenu]);
        }
    }, [indexMenu]);

useEffect(()=>{
    setIsOpenMenu(true)
},[menuItem])

const closeMenu=() => {
    setIsOpenMenu(false)
    setIndexMenu(null)
}

    return (
        <div className='mt-6 component md:mt-20' id="restaurant">
            <div className="component_container">
            <div className="px-8 mt-2 md:mt-10 title_container">
                <div className="flex items-center justify-center component_title">
                    <div className="mx-3 text-center">{dictionary.title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
            </div>
            </div>
            <div className="bg-[#D0EBFF] w-[100%] md:mt-24 mt-10 flex justify-center items-center">
            <div className="component_container">
                <div className="grid grid-cols-1 gap-6 my-16 items_container sm:grid-cols-2 lg:grid-cols-4" >
                    {restaurantItems.map( (item, index)  => 
                        <div key={`link-${index}`} onClick={()=>getIndex(index)}>
                            <div className={`${styles.restaurant_item} relative overflow-hidden rounded-3xl `}>
                                <div className={`${styles.item_image} relative flex  overflow-hidden `}>
                                    <div className='w-[100%] h-[100%] bg-gray-600 opacity-50 absolute'/>
                                    <Image src={item.image} alt="dish-image" className='h-[100%] w-[100%]'/>
                                    <div className="w-[100%] h-[100%] text-3xl font-semibold text-white absolute z-10 flex justify-center items-center p-8 text-center">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
                {isOpenMenu && menuItem.url && (
                    <div className={styles.open}>
                        <div className={styles.menu_container}>
                            <Image src={menuItem.url} alt={`menu-${menuItem.name}`} className={styles.menu_img} />
                        </div>
                        <button className={styles.button} onClick={closeMenu}>
                            Close Menu
                        </button>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default Restaurant

