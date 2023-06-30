import React from 'react'
import Image from 'next/image';

import styles from './SightCard.module.css';
import { SightCardprops } from '@/constants/interfaces';

function SightCard( {id, title, description, image, active, handleClick }: SightCardprops) {

    const activeCard = (id == active)

    return (
        <div onClick={() => handleClick(id)} className={activeCard? styles.activesightcard: styles.sightcard}>
            <div className={activeCard? styles.activesightcard_text: styles.sightcard_text}>
                <div className={activeCard? styles.activesightcard_title: styles.sightcard_title}>{title}</div>
            </div>
            {!activeCard &&  <div className={styles.sightcard_glassmorphism}></div>}
            <Image src={image} alt="resort" className={styles.sightcard_img}/>
            <div className={activeCard? styles.activesightcard_description: styles.card_description}>{description}</div>
        </div>
    )
}

export default SightCard

