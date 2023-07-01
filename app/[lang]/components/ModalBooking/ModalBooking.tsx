import React from 'react';
import styles from './ModalBooking.module.css';

function ModalBooking ({ isOpen, onClose, src }: any)  {
    return (
        <>
        {isOpen &&
        <div className={ styles.open}>
            <iframe src={src} title="Popup Content" className={styles.iframe}/>
            <button className={styles.button} onClick={onClose}>
                Close Booking
            </button>
            
        </div>
        }
        </>
        
    );
};

export default ModalBooking;

