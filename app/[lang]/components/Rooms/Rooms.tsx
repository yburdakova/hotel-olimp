import React from 'react';
import Image from 'next/image';
import { room1, room2, room3, wave } from '@/public';
import { Room } from '../'
import styles from './rooms.module.css'

function Rooms({ title, text, roomsTitles, currencyLiteral, time, roomDictionary, buttonTitle}: any) {

    const rooms = [
        {
            title: roomsTitles["room1-title"],
            price:`${2500} ${currencyLiteral} / ${time}`,
            beds: `${roomDictionary.numbersOfbeds}: 2`,
            facilities: roomDictionary.facilities,
            facilitiesList: Object.values(roomDictionary.facilitiesList),
            image: room1
        },
        {
            title: roomsTitles["room2-title"],
            price:`${3500} ${currencyLiteral} / ${time}`,
            beds: `${roomDictionary.numbersOfbeds}: 4`,
            facilities: roomDictionary.facilities,
            facilitiesList: Object.values(roomDictionary.facilitiesList),
            image: room2
        },
        {
            title: roomsTitles["room3-title"],
            price:`${5500} ${currencyLiteral} / ${time}`,
            beds: `${roomDictionary.numbersOfbeds}: 2`,
            facilities: roomDictionary.facilities,
            facilitiesList: Object.values(roomDictionary.facilitiesList),
            image: room3
        },
    ];

    return (
        <div className='component mt-20'>
            <div className="component_container" >
                <div className="component_title flex justify-center items-center">
                    <div className='line'></div>
                    <div className='dot'></div>
                    <div className="text-center mx-3">{title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
                <div className="component_text text-center mt-6 bold">{text}</div>
                {rooms.map ((room, index) => 
                    <Room
                        key={`room-${index}`}
                        price={room.price}
                        title={room.title}
                        image={room.image}
                        beds={room.beds}
                        facilities={room.facilities}
                        facilitiesList={room.facilitiesList}
                        buttonTitle={buttonTitle}
                    />
                )}
            </div>
        </div>
    )
}

export default Rooms