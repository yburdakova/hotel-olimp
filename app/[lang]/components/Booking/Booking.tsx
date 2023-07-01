"use client"
import React, {useState, useEffect} from 'react';
import styles from './booking.module.css';
import { Button, ModalBooking } from '../'

function Booking({buttonTitle}:any) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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
                            <label htmlFor="startDate" className={styles.label}>Start date</label>
                            <input type="date" name='startDate' className={styles.input}/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="endDate" className={styles.label}>End date</label>
                            <input type="date" name='endDate' className={styles.input}/>
                        </div>
                        <div className={styles.item}>
                            <label htmlFor="guests" className={styles.label}>Guests</label>
                            <select name="guests" className={styles.input}>
                                <option>1 гость</option>
                                <option>2 гостя</option>
                                <option>3 гостя</option>
                                <option>4 гостя</option>
                                <option>5 гостей</option>
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