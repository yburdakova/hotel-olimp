'use client'

import React, { useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.css';
import { resort_bg, game_park, arena, dendropark, music_park } from '@/public';
import SightCard from '../SightCard';

function Resort({ title, text, cards }: any) {

    const sights = [
        {
            title: cards.card1.title,
            description: cards.card1.description,
            image: game_park
        },
        {
            title: cards.card2.title,
            description: cards.card2.description,
            image: arena
        },
        {
            title: cards.card3.title,
            description: cards.card3.description,
            image: dendropark
        },
        {
            title: cards.card4.title,
            description: cards.card4.description,
            image: music_park
        }
    ];

    const [active, setActive] = useState(2);

    return (
        <div className="component mt-[100px]">
            <div className={styles.resort_bg}>
                <div>
                    <Image src={resort_bg} alt="resort" className={styles.resort_bg_image} />
                </div>
            </div>
            <div className="component_container">
                <div className="component_title flex justify-center items-center">
                    <div className="text-center mx-3">{title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
                    
                <div className='z-10 w-[50%] ml-10'>
                    <div className="component_text mt-10">{text}</div>
                </div>


                <div className={styles.sights_container}>
                    {sights.map((card, index) =>
                        <SightCard
                            key={card.title}
                            id={index}
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            active={active}
                            handleClick={setActive} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Resort