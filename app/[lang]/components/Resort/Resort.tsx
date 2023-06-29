'use client'
import React, { useState } from 'react';

import styles from './Resort.module.css';
import { game_park, arena, dendropark, music_park, inverted_house } from '@/public';
import SightCard from '../SightCard/SightCard';

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
        },
        {
            title: cards.card5.title,
            description: cards.card5.description,
            image: inverted_house
        }
    ];

    const [active, setActive] = useState(1);

    return (
        <div className="component" id="resort">
            <div className="mt-10 component_container">
                <div className="flex items-center justify-start component_title">
                    {title}
                </div>
                    
                <div className='w-[100%] lg:w-[50%]'>
                    <div className="mt-10 component_text">{text}</div>
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