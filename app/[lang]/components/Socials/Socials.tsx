'use client'

import React, { useState, useEffect, useRef }  from 'react';
import Image from 'next/image';
import axios from 'axios';

import PostItem from '../PostItem/PostItem';
import { socials } from '@/constants';
import styles from './Socials.module.css';
import { SocialsProps, InstagramData } from '@/constants/interfaces';


function Socials({ title, follow_text, button_text }: SocialsProps) {
    
    
    const [instagramData, setInstagramData] = useState<InstagramData[] | null>(null);
    const [numberOflines, setNumberOflines] = useState(2);
    const [isLoading, setIsLoading] = useState(true);
    const elementRef = useRef<HTMLDivElement>(null);
    const [heightInstagramLine, setHeightInstagramLine] = useState(0)
    const [heightInstagramContainer, setHeightInstagramContainer] = useState(0)
    const [screenWidth, setScreenWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        setScreenWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,thumbnail_url,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;
                const response = await axios.get(apiUrl);
                const data = response.data;
                setInstagramData(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
                setIsLoading(false);
            }
        };
      
        fetchData();
      }, []);

    useEffect(() => {
        if (!isLoading && instagramData) {
            console.log(instagramData);
        }
    }, [isLoading, instagramData]);
    
    useEffect(() => {
        if (elementRef.current) {
            const element = elementRef.current;
            const rect = element.getBoundingClientRect();
            setHeightInstagramLine(rect.height);
        }
    }, [isLoading, screenWidth]);
    
    useEffect(() => {
        setHeightInstagramContainer (numberOflines*heightInstagramLine)
    }, [numberOflines, screenWidth, heightInstagramLine])
    
    const addLine = () => {
        setNumberOflines(numberOflines+1)
    }
    
    return (
        <div className='relative mt-20 component' id="socials">
            <div className="mt-10 component_container">
                <div className="flex flex-col items-center justify-center mb-20 component_title md:flex-row ">
                    <div className='line'></div>
                    <div className='dot'></div>
                    <div className={styles.icons_container}>
                            { socials. map ( item => 
                                <a href={item.link} target="_blank" rel="noopener noreferrer" key={`link-${item.name}}`}>
                                    <div className={styles.icon}>
                                        <Image src={item.image} alt={item.name} className={styles.icon_img}/>
                                    </div>
                                </a>
                            )}
                        </div>
                    <div className="mx-3 text-center">{title}</div>
                </div>
            </div>
            {isLoading 
            ?  <p>Loading...</p>
            :  <div className={styles.instagram_container}>
                    <div className={styles.instagram_title_container}>
                        <div className={styles.instagram_title}>
                            {follow_text}
                        </div>
                    </div>
                    <div className={styles.feed_wrapper} style={{height: heightInstagramContainer}}>
                        <div className={styles.feed_container}>
                            {instagramData?.map(item => 
                                <div ref={elementRef} className={styles.post_container} key={item.id} >
                                    <PostItem
                                        id={item.id}
                                        caption={item.caption}
                                        type={item.media_type}
                                        img={item.media_type == "VIDEO" ? item.thumbnail_url : item.media_url}
                                        url={item.media_url}
                                        username={item.username}
                                        date={item.timestamp}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.button_container}>
                        <div className={styles.button} onClick={addLine}>
                            <button className={styles.button_title} >
                                {button_text}
                            </button>
                        </div>
                    </div>
                </div>
            }  
        </div>
    )
}

export default Socials

