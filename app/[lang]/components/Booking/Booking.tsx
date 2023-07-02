"use client"
import React, {useState, useEffect} from 'react';
import styles from './Booking.module.css';
import { Button, ModalBooking } from '../'

function Booking({buttonTitle, guestsDictionary}:any) {
    const currentDate = new Date().toISOString().split('T')[0];

    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(e.target.value);
    };
    
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = 'auto';
        }
        return () => {
            document.documentElement.style.overflow = 'auto';
        };
    }, [isPopupOpen]);
    

    return (
        <div className="z-10 component">
            <div className='component_container'>
                <div className={styles.box}>
                    <div className={styles.container}>
                        <div className={styles.item}>
                            <label htmlFor="startDate" className={styles.label}>Check-in</label>
                            <input 
                                type="date" 
                                value={selectedDate} 
                                name='startDate' 
                                className={styles.input}
                                onChange={(e)=>handleDateChange(e)}/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="endDate" className={styles.label}>Check-out</label>
                            <input 
                                type="date" 
                                value={selectedDate} 
                                name='endDate' 
                                className={styles.input}
                                onChange={(e)=>handleDateChange(e)}/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="guests" className={styles.label}>{guestsDictionary["title"]}</label>
                            <select name="guests" className={styles.input}>
                                <option>1 <span>{guestsDictionary["one"]}</span></option>
                                <option>2 <span>{guestsDictionary["several"]}</span></option>
                                <option>3 <span>{guestsDictionary["several"]}</span></option>
                                <option>4 <span>{guestsDictionary["several"]}</span></option>
                                <option>5 <span>{guestsDictionary["many"]}</span></option>
                            </select>
                        </div>
                        {isPopupOpen && <ModalBooking isOpen={isPopupOpen} onClose={handleClosePopup} src='https://olimp.burdakova.com/'/>}
                        <div className={styles.button_container}>
                            <Button text={buttonTitle} openModal={handleOpenPopup} textsize='lg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Booking