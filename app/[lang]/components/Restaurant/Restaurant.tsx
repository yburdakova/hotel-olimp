'use client'
import React, {useEffect, useState} from 'react';
import Image from 'next/image';

import { beverages, snacks, hachapuri, garnish, maindish, salads, pizza, soup,
        salads_en, salads_ru, salads_ka,  
        main_en, main_ru, main_ka,
        pizza_en, pizza_ru, pizza_ka,
        snacks_en, snacks_ru, snacks_ka,
        beverages_en, beverages_ka, beverages_ru,
        khachapuri_en, khachapuri_ru, khachapuri_ka,
        soups_en, soups_ru, soups_ka,
        garnish_en, garnish_ru, garnish_ka } from '@/public';
import styles from './Restaurant.module.css';
import { RestaurantProps, MenuItem } from '@/constants/interfaces';

function Restaurant( { dictionary, lang }: RestaurantProps) {

    const restaurantItems = [
        {
            name: dictionary.beverages,
            image: beverages,
            url: lang=='en' ? beverages_en :lang=='ka'? beverages_ka : beverages_ru
        },
        {
            name: dictionary.starters,
            image: snacks,
            url: lang=='en' ? snacks_en :lang=='ka'? snacks_ka : snacks_ru
        },
        {
            name: dictionary.khachapuri,
            image: hachapuri,
            url: lang=='en' ? khachapuri_en :lang=='ka'? khachapuri_ka : khachapuri_ru
        },
        {
            name: dictionary.sides,
            image:garnish,
            url: lang=='en' ? garnish_en :lang=='ka'? garnish_ka : garnish_ru
        },
        {
            name: dictionary.maindish,
            image:maindish,
            url: lang=='en' ? main_en :lang=='ka'? main_ka : main_ru

        },
        {
            name: dictionary.salads,
            image:salads,
            url: lang=='en' ? salads_en : lang=='ka'? salads_ka : salads_ru
        },
        {
            name: dictionary.soups,
            image: soup,
            url: lang=='en' ? soups_en : lang=='ka'? soups_ka : soups_ru
        },
        {
            name: dictionary.pizza,
            image: pizza,
            url: lang=='en' ? pizza_en : lang=='ka'? pizza_ka : pizza_ru
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
        <div className='mt-4 component ' id="restaurant">
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
                <div className="grid grid-cols-1 gap-6 my-16 items_container sm:grid-cols-2 lg:grid-cols-4">
                    {restaurantItems.map((item, index) => (
                        <div key={`link-${index}`} onClick={() => getIndex(index)} className="self-start h-[220px] cursor-pointer">
                        <div className={`${styles.restaurant_item} relative overflow-hidden rounded-3xl h-full`}>
                            <div className={`${styles.item_image} relative flex overflow-hidden h-full`}>
                            <div className="absolute w-full h-full bg-gray-600 opacity-50" />
                            <Image src={item.image} alt="dish-image" className="object-cover w-full h-full" />
                            <div className="absolute z-10 flex items-center justify-center w-full h-full p-8 text-3xl font-semibold text-center text-white">
                                {item.name}
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
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

