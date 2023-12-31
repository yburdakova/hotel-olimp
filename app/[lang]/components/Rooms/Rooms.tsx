'use client'
import React, {useState, useEffect, useCallback} from 'react';
import { room1, room2, room3, room4, room5, room6 } from '@/public';
import { Room } from '../'
import { RoomsProps, FileData } from '@/constants/interfaces';

function Rooms({ lang, title, text, roomsInfo, buttonTitle}: RoomsProps) {
    const [bdConnetion, setBDConnetion] = useState(false)
    const [rooms, setRooms] = useState<FileData[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("/api/uploadRoomCards");
            if (response.ok) {
                const data = await response.json();
                setBDConnetion(true);
                setRooms(data.files);
                setBDConnetion(true);
            } else {
                throw new Error("Request failed with status: " + response.status);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
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
            image: room4,
            name: roomsInfo.room4.name,
            description: roomsInfo.room4.description,
            bedx2: 1,
            bedx1: 2,
            sofa: 0,
        },
        {
            image: room5,
            name: roomsInfo.room5.name,
            description: roomsInfo.room5.description,
            bedx2: 1,
            bedx1: 2,
            sofa: 1,
        },
        {
            image: room6,
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
                {bdConnetion 
                ?   <>
                        {rooms.map ((room, index) => 
                                <Room
                                    key={`room-${index}`}
                                    name={lang === 'en' ? room.metadata?.enname : lang === 'ka' ? room.metadata?.gename : room.metadata?.runame}
                                    image={`/api/uploadsRoomCards/${room.filename}`}
                                    numberBedx2={room.metadata && room.metadata.bedx2 ? +room.metadata.bedx2 : 0}
                                    numberBedx1={room.metadata && room.metadata.bedx1 ? +room.metadata.bedx1 : 0}
                                    numberSofa={room.metadata && room.metadata.sofa ? +room.metadata.sofa : 0}
                                    description={lang === 'en' ? room.metadata?.en : lang === 'ka' ? room.metadata?.ge : room.metadata?.ru}
                                    buttonTitle={buttonTitle}
                                />
                        )}
                    </>
                :   <>
                        {roomsCollection.map ((room, index) => 
                            <Room
                                key={`room-${index}`}
                                name={room.name}
                                image={room.image}
                                numberBedx2={room.bedx2}
                                numberBedx1={room.bedx1}
                                numberSofa={room.sofa}
                                description={room.description}
                                buttonTitle={buttonTitle}/>
                        )}
                    </>
                }  
                
            </div>
        </div>
    )
}

export default Rooms