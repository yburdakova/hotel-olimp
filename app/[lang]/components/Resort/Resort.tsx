'use client'
import React, { useEffect, useState } from 'react';

import styles from './Resort.module.css';
import { game_park, arena, dendropark, music_park, botanicgarden } from '@/public';
import SightCard from '../SightCard/SightCard';
import { ResortProps } from '@/constants/interfaces';

function Resort({ title, text, cards }: ResortProps) {

    const sights = [
        {
            title: cards.card1.title,
            description: cards.card1.description,
            image: game_park,
            link:'https://www.tripadvisor.com/Attraction_Review-g1598756-d8756182-Reviews-Amusement_Park_Tsitsinatela-Kobuleti_Adjara_Region.html'
        },
        {
            title: cards.card2.title,
            description: cards.card2.description,
            image: arena,
            link: 'https://www.tripadvisor.com/Attraction_Review-g12595476-d10805540-Reviews-Black_Sea_Arena-Shekvetili_Guria_Region.html'
        },
        {
            title: cards.card3.title,
            description: cards.card3.description,
            image: dendropark,
            link: 'https://www.tripadvisor.com/Attraction_Review-g6959029-d24179841-Reviews-Shekvetili_Dendrological_Park-Shekhvetili_Guria_Region.html'
        },
        {
            title: cards.card4.title,
            description: cards.card4.description,
            image: music_park,
            link:'https://www.tripadvisor.com/Attraction_Review-g12595476-d21242672-Reviews-Musicians_Park-Shekvetili_Guria_Region.html'
        },
        {
            title: cards.card5.title,
            description: cards.card5.description,
            image: botanicgarden,
            link:'https://www.tripadvisor.com/Attraction_Review-g297576-d1085317-Reviews-Batumi_Botanical_Gardens-Batumi_Adjara_Region.html'
        }
    ];

    const [active, setActive] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevActive) => (prevActive >= 4 ? 0 : prevActive + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="mt-6 component" id="resort">
            <div className="mt-10 component_container">
                <div className="flex items-center justify-start component_title">
                    {title}
                </div>
                    
                <div className='w-[100%] lg:w-[58%]'>
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
                            handleClick={setActive} 
                            link={card.link}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Resort