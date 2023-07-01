import React from 'react';
import styles from './Booking.module.css';
import { Button } from '../'

function Booking() {

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
                        {/* <Button openModal={openModal} text={buttonTitle}/> */}
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Booking