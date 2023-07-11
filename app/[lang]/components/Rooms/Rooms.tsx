'use client'
import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Image from 'next/image';
import { room1, room2, room3, wave } from '@/public';
import { Room } from '../'
import styles from './Rooms.module.css'
import { RoomsProps } from '@/constants/interfaces';

function Rooms({ lang, title, text, roomsInfo, buttonTitle}: RoomsProps) {

    const [rooms, setRooms] = useState<RoomsProps[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get("/api/uploadRoomcards");
            setRooms(response.data.files);
            console.log(rooms)
        } catch (error) {
            console.error(error);
        }
    }, []); 

    useEffect(() => {
        fetchData();
        console.log(rooms)
    }, []);

    const roomsCollection = [
        {
            image: room1,
            name: roomsInfo.room1.name,
            description: roomsInfo.room1.description,
            bedx2: 1,
            bedx1: 0,
            sofa: 0,
        },
        {
            image: room2,
            name: roomsInfo.room2.name,
            description: roomsInfo.room2.description,
            bedx2: 1,
            bedx1: 1,
            sofa: 0,
        },
        {
            image: room3,
            name: roomsInfo.room3.name,
            description: roomsInfo.room3.description,
            bedx2: 1,
            bedx1: 1,
            sofa: 0,
        },
        {
            image: room1,
            name: roomsInfo.room4.name,
            description: roomsInfo.room4.description,
            bedx2: 1,
            bedx1: 2,
            sofa: 0,
        },
        {
            image: room2,
            name: roomsInfo.room5.name,
            description: roomsInfo.room5.description,
            bedx2: 1,
            bedx1: 2,
            sofa: 1,
        },
        {
            image: room1,
            name: roomsInfo.room6.name,
            description: roomsInfo.room6.description,
            bedx2: 1,
            bedx1: 2,
            sofa: 1,
        }
        
    ];

    return (
        <div className='mt-6 md:mt-20 component' id="rooms">
            <div className="component_container" >
                <div className="flex items-center justify-center mt-10 component_title">
                    <div className='line'></div>
                    <div className='dot'></div>
                    <div className="mx-3 text-center">{title}</div>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>
                <div className="mt-6 text-center component_text">{text}</div>
                {rooms.map ((room, index) => 
                    <Room
                        key={`room-${index}`}
                        name={lang=='en' ? room.metadata.enname : lang=='ka' ? room.metadata.gename : room.metadata.runame }
                        image={room.filename}
                        numberBedx2={room.metadata.bedx2}
                        numberBedx1={room.metadata.bedx1}
                        numberSofa={room.metadata.sofa}
                        description={lang=='en' ? room.metadata.en : lang=='ka' ? room.metadata.ge : room.metadata.ru }
                        buttonTitle={buttonTitle}
                    />
                )}
            </div>
        </div>
    )
}

export default Rooms